'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';
import { ThemeProvider } from '@/components/admin/ThemeProvider';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 };

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
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 text-foreground selection:bg-primary/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ...springConfig }}
          className="w-full max-w-md"
        >
          <div className="bg-paper border border-rule rounded-none p-8 relative overflow-hidden">
            {/* Logo Section */}
            <div className="flex flex-col items-center mb-8 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, ...springConfig }}
                className="w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/10 mb-4"
              >
                <span className="font-serif font-bold text-2xl text-primary">P</span>
              </motion.div>
              <h1 className="font-serif text-3xl font-bold text-foreground">Admin Portal</h1>
              <p className="text-foreground/60 mt-2 text-sm">Sign in to manage your content</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={springConfig}
                    className="bg-red-500/10 border border-red-500/20 p-4 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 py-3 pl-12 pr-4 outline-none transition-all text-foreground placeholder:text-foreground/30"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 py-3 pl-12 pr-4 outline-none transition-all text-foreground placeholder:text-foreground/30"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={{ scale: 0.97 }}
                transition={springConfig}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Sign In'
                )}
              </motion.button>
            </form>

            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-texture" />
          </div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}
