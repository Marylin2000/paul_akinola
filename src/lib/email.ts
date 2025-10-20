import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Email configuration using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL || 'your-email@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password', // Use App Password, not regular password
    },
  });
};

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const transporter = createTransporter();

    // Email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #334155;">Message</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
          <p style="margin: 0; font-size: 14px; color: #065f46;">
            This email was sent from the contact form on paulakinola.com
          </p>
        </div>
      </div>
    `;

    // Auto-reply email to sender
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Thank you for contacting me!
        </h2>
        
        <p>Hi ${formData.name},</p>
        
        <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24 hours.</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Your Message Summary</h3>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="line-height: 1.6; white-space: pre-wrap; font-style: italic;">${formData.message.substring(0, 200)}${formData.message.length > 200 ? '...' : ''}</p>
        </div>

        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Check out my <a href="https://paulakinola.com/blog" style="color: #2563eb;">latest blog posts</a> on growth systems and GTM strategies</li>
          <li>Download <a href="https://paulakinola.com/tools-templates" style="color: #2563eb;">free templates and frameworks</a></li>
          <li>Connect with me on <a href="https://linkedin.com/in/paulakinola" style="color: #2563eb;">LinkedIn</a></li>
        </ul>

        <p>Best regards,<br>
        <strong>Paul Akinola</strong><br>
        Growth Systems & GTM Architect</p>

        <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #64748b;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_EMAIL,
      subject: `New Contact: ${formData.subject}`,
      html: adminEmailHtml,
      replyTo: formData.email,
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: formData.email,
      subject: `Re: ${formData.subject} - Message Received`,
      html: autoReplyHtml,
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function sendCustomEmail(options: EmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    return true;
  } catch (error) {
    console.error('Custom email sending failed:', error);
    return false;
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}