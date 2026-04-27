
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Save, Shield, Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { payload } from '@/lib/payload/api';

export default function UserEditorPage({ userId, initialData }: { userId: string; initialData?: any }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: initialData?.email || '',
    password: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    const token = document.cookie.split('; ').find(row => row.startsWith('payload-token='))?.split('=')[1];
    if (!token) {
      setError('Not authenticated');
      setIsSaving(false);
      return;
    }

    try {
      if (userId === 'new') {
        // Payload API for creating users usually requires specific fields
        // For simplicity, we assume the same format as login
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api'}/users`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to create user');
      } else {
        await payload.updateUser(userId, formData, token);
      }
      router.push('/admin/users');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Save failed');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/users"
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-400" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {userId === 'new' ? 'Add User' : 'Edit User'}
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            {userId === 'new' ? 'Grant administrative access' : `Editing access for ${formData.email}`}
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start gap-3 text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-purple-500/50 text-sm transition-all text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">
            {userId === 'new' ? 'Password' : 'New Password (Optional)'}
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="password"
              required={userId === 'new'}
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-purple-500/50 text-sm transition-all text-white"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="pt-4 flex items-center gap-4">
           <button
             type="submit"
             disabled={isSaving}
             className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-[0.98] shadow-xl shadow-purple-500/20 disabled:opacity-50"
           >
             {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
             {isSaving ? 'Saving...' : 'Save User Settings'}
           </button>
           <div className="flex-1" />
           <div className="flex items-center gap-2 text-xs text-neutral-500 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
             <Shield className="w-3 h-3 text-purple-500" />
             Admin Role
           </div>
        </div>
      </form>
    </div>
  );
}
