const PAYLOAD_URL = '/api';

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    ...(!(options.body instanceof FormData) && { 'Content-Type': 'application/json' }),
    ...options.headers,
  };

  // If body is FormData, fetch automatically sets the correct Content-Type with boundary
  if (options.body instanceof FormData && 'Content-Type' in headers) {
    // @ts-ignore
    delete headers['Content-Type'];
  }

  const res = await fetch(`${PAYLOAD_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.errors?.[0]?.message || data.message || 'Request failed');
  }

  return data;
}

export const api = {
  auth: {
    login: async (email: string, password: string) => {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      return data;
    },
    
    logout: async () => {
      const res = await fetch('/api/admin/logout', { method: 'POST' });
      return res.json();
    },
    
    verify: async () => {
      const res = await fetch('/api/admin/verify');
      return res.json();
    },
  },

  articles: {
    list: async () => fetchWithAuth('/articles?limit=100'),
    get: async (id: string) => fetchWithAuth(`/articles/${id}`),
    create: async (data: any) => fetchWithAuth('/articles', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: async (id: string, data: any) => fetchWithAuth(`/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
    delete: async (id: string) => fetchWithAuth(`/articles/${id}`, {
      method: 'DELETE',
    }),
  },

  media: {
    list: async () => fetchWithAuth('/media?limit=100'),
    upload: async (formData: FormData) => fetchWithAuth('/media', {
      method: 'POST',
      body: formData,
    }),
    update: async (id: string, data: any) => fetchWithAuth(`/media/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
    delete: async (id: string) => fetchWithAuth(`/media/${id}`, {
      method: 'DELETE',
    }),
  },

  globals: {
    get: async (slug: string) => fetchWithAuth(`/globals/${slug}`),
    update: async (slug: string, data: any) => fetchWithAuth(`/globals/${slug}`, {
      method: 'POST', // payload cms typically uses POST for globals updates
      body: JSON.stringify(data),
    }),
  },

  users: {
    list: async () => fetchWithAuth('/users?limit=100'),
    get: async (id: string) => fetchWithAuth(`/users/${id}`),
    update: async (id: string, data: any) => fetchWithAuth(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  },
};

