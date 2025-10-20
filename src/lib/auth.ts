import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

// In production, these should be environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBu0jN4QS7JdMy'; // "admin123"
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const ADMIN_PATH_SECRET = process.env.ADMIN_PATH_SECRET || 'growth-systems';

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
}

export async function validateCredentials(username: string, password: string): Promise<boolean> {
  if (username !== ADMIN_USERNAME) {
    return false;
  }
  
  return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export function generateSessionToken(): string {
  // Simple token generation - in production, use a proper JWT library
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2);
  return `${timestamp}-${random}`;
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('admin-session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/',
  });
}

export async function getAuthCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get('admin-session')?.value;
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
}

export function isValidAdminPath(path: string): boolean {
  return path === `/admin-${ADMIN_PATH_SECRET}`;
}

export function getAdminPath(): string {
  return `/admin-${ADMIN_PATH_SECRET}`;
}

// Simple session store (in production, use Redis or database)
const sessions = new Map<string, { username: string; createdAt: number }>();

export function createSession(username: string): string {
  const token = generateSessionToken();
  sessions.set(token, {
    username,
    createdAt: Date.now(),
  });
  return token;
}

export function validateSession(token: string): AdminUser | null {
  const session = sessions.get(token);
  if (!session) {
    return null;
  }

  // Check if session is expired (24 hours)
  const isExpired = Date.now() - session.createdAt > 24 * 60 * 60 * 1000;
  if (isExpired) {
    sessions.delete(token);
    return null;
  }

  return {
    username: session.username,
    isAuthenticated: true,
  };
}

export function deleteSession(token: string) {
  sessions.delete(token);
}

export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('admin-session')?.value;
  if (!token) {
    return false;
  }

  const user = validateSession(token);
  return user !== null;
}