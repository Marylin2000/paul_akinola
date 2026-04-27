
export const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api';

export async function payloadFetch(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${PAYLOAD_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.errors?.[0]?.message || data.message || 'API request failed');
  }

  return data;
}

export const payload = {
  login: async (credentials: any) => {
    return payloadFetch('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  getArticles: async (token?: string) => {
    return payloadFetch('/articles?limit=100', {
      headers: token ? { Authorization: `JWT ${token}` } : {},
    });
  },

  getArticle: async (id: string, token?: string) => {
    return payloadFetch(`/articles/${id}`, {
      headers: token ? { Authorization: `JWT ${token}` } : {},
    });
  },

  updateArticle: async (id: string, data: any, token: string) => {
    return payloadFetch(`/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: { Authorization: `JWT ${token}` },
    });
  },

  createArticle: async (data: any, token: string) => {
    return payloadFetch('/articles', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { Authorization: `JWT ${token}` },
    });
  },

  uploadMedia: async (formData: FormData, token: string) => {
    const res = await fetch(`${PAYLOAD_API_URL}/media`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.errors?.[0]?.message || data.message || 'Upload failed');
    }
    return data;
  },
};
