
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Lock, Mail, Loader2, AlertCircle } from 'lucide-react';
import { payload } from '@/lib/payload/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await payload.login({ email, password });
      
      // Store JWT in cookie
      if (data.token) {
        document.cookie = `payload-token=${data.token}; path=/; max-age=${60 * 60 * 24}; SameSite=Strict`;
        router.push('/admin/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 selection:bg-purple-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <LayoutDashboard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Admin Portal</h1>
            <p className="text-neutral-500 mt-2">Sign in to manage your content</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm font-medium">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-800/50 border border-white/5 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 rounded-xl py-3 pl-12 pr-4 outline-none transition-all text-white placeholder:text-neutral-600"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-neutral-800/50 border border-white/5 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 rounded-xl py-3 pl-12 pr-4 outline-none transition-all text-white placeholder:text-neutral-600"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Decorative noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </motion.div>
    </div>
  );
}
