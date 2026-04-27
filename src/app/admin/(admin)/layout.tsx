'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { ThemeProvider } from '@/components/admin/ThemeProvider';
import { AdminAuthProvider } from '@/context/AdminAuthContext';
import { motion } from 'framer-motion';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <AdminAuthProvider>
      <ThemeProvider>
        <div suppressHydrationWarning className="flex h-screen admin-gradient text-foreground font-sans selection:bg-primary/30">
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto p-8">
            {children}
          </div>
        </motion.main>
      </div>
    </ThemeProvider>
  </AdminAuthProvider>
);
}
