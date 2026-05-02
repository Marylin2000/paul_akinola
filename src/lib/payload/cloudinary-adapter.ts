import type { Adapter, GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";
import type { UploadApiResponse } from "cloudinary";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

type CloudinaryAdapterOptions = {
  folder?: string;
};

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

const getPublicId = ({ filename, folder }: { filename: string; folder?: string }) => {
  const extension = path.extname(filename);
  const basename = extension ? filename.slice(0, -extension.length) : filename;
  return [folder, basename]
    .filter((part): part is string => Boolean(part))
    .map(trimSlashes)
    .join("/");
};

const getFormat = (filename: string) => path.extname(filename).replace(".", "") || undefined;

const getCloudinaryConfig = () => ({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

export const hasCloudinaryConfig = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET,
);

export const cloudinaryAdapter =
  ({ folder = "paul-akinola/media" }: CloudinaryAdapterOptions = {}): Adapter =>
  (): GeneratedAdapter => {
    const configureCloudinary = () => {
      cloudinary.config({
        secure: true,
        ...getCloudinaryConfig(),
      });
    };

    const generateURL: GeneratedAdapter["generateURL"] = ({ filename }) => {
      configureCloudinary();

      return cloudinary.url(getPublicId({ filename, folder }), {
        format: getFormat(filename),
        resource_type: "image",
        secure: true,
      });
    };

    return {
      name: "cloudinary",
      generateURL,
      handleDelete: async ({ filename }) => {
        configureCloudinary();

        await cloudinary.uploader.destroy(getPublicId({ filename, folder }), {
          resource_type: "image",
        });
      },
      handleUpload: async ({ file }) => {
        configureCloudinary();

        const uploadResult = await new Promise<UploadApiResponse>(
          (resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              {
                folder,
                overwrite: true,
                public_id: getPublicId({ filename: file.filename }).split("/").pop(),
                resource_type: "image",
                unique_filename: false,
                use_filename: false,
              },
              (error, result) => {
                if (error || !result) {
                  reject(error || new Error("Cloudinary upload failed"));
                  return;
                }

                resolve(result);
              },
            );

            stream.end(file.buffer);
          },
        );

        return {
          url: uploadResult.secure_url,
        };
      },
      onInit: configureCloudinary,
      staticHandler: (_req, { params }) => {
        configureCloudinary();

        return Response.redirect(
          cloudinary.url(getPublicId({ filename: params.filename, folder }), {
            format: getFormat(params.filename),
            resource_type: "image",
            secure: true,
          }),
        );
      },
    };
  };
