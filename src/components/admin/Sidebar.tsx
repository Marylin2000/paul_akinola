'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Settings,
  LogOut,
  ChevronLeft,
  Moon,
  Sun,
  Palette,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from "../../../public/images/logo/05 PA_Logo_Master_1.svg"
import { useTheme } from './ThemeProvider';
import { useAdminAuth } from '@/context/AdminAuthContext';

const collections = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Articles', href: '/admin/articles', icon: FileText },
  { name: 'Media', href: '/admin/media', icon: ImageIcon },
  { name: 'Users', href: '/admin/users', icon: Settings },
];

const globals = [
  { name: 'Hero', href: '/admin/globals/hero' },
  { name: 'Offerings', href: '/admin/globals/offerings' },
  { name: 'About', href: '/admin/globals/about' },
  { name: 'Work', href: '/admin/globals/work' },
  { name: 'Inner Life', href: '/admin/globals/inner-life' },
  { name: 'Recognition', href: '/admin/globals/recognition' },
  { name: 'Personal Anchor', href: '/admin/globals/personal-anchor' },
  { name: 'Build', href: '/admin/globals/build' },
  { name: 'Together', href: '/admin/globals/together' },
];

const springConfig = { type: 'spring', stiffness: 300, damping: 25 };

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAdminAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <motion.aside
      suppressHydrationWarning
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={springConfig}
      className={cn(
        'h-full flex flex-col glass-strong',
        'border-r'
      )}
    >
      {/* Header */}
      <div className={cn('p-4 border-b', collapsed ? 'px-4' : 'px-6')}>
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            animate={{ opacity: collapsed ? 0 : 1, display: collapsed ? 'none' : 'flex' }}
            transition={{ duration: 0.2 }}
          >
            <div className={cn(
              'w-10 h-10 flex items-center justify-center',
              'bg-primary/10 border border-primary/20'
            )}>
 <Image 
                  src="/images/logo/05%20PA_Logo_Master_1.svg" 
                  alt="Paul Akinola" 
                  width={150} 
                  height={40} 
                  className="h-8 w-auto dark:invert" 
                  priority
                />            </div>
            <div>
              <h1 className="font-serif text-lg font-bold text-foreground">Paul Akinola</h1>
              <p className="text-xs text-foreground/60">Admin Portal</p>  
            </div>
          </motion.div>
          <button
            onClick={onToggle}
            className={cn(
              'p-2 rounded-sm border transition-colors',
              'border-foreground/10 hover:bg-foreground/5',
              'text-foreground/60 hover:text-foreground'
            )}
          >
            {collapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4 rotate-180" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="space-y-6">
          {/* Main Collections */}
          <div>
            {!collapsed && (
              <p className="px-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">
                General
              </p>
            )}
            <nav className="space-y-1">
              {collections.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 p-3 border transition-all duration-200',
                      'border-transparent hover:border-foreground/10 hover:bg-foreground/5',
                      isActive
                        ? 'bg-foreground/5 border-foreground/10 text-foreground font-semibold'
                        : 'text-foreground/60',
                      collapsed ? 'justify-center px-2' : 'px-4'
                    )}
                  >
                    <item.icon className={cn(
                      'w-5 h-5 shrink-0',
                      isActive ? 'text-primary' : 'text-foreground/40'
                    )} />
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm"
                      >
                        {item.name}
                      </motion.span>
                    )}
                    {!collapsed && isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-1.5 h-1.5 bg-primary"
                        transition={springConfig}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Globals / Pages */}
          <div>
            {!collapsed && (
              <p className="px-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">
                Page Globals
              </p>
            )}
            <nav className="space-y-1">
              {globals.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 p-3 border transition-all duration-200',
                      'border-transparent hover:border-foreground/10 hover:bg-foreground/5',
                      isActive
                        ? 'bg-foreground/5 border-foreground/10 text-foreground font-semibold'
                        : 'text-foreground/60',
                      collapsed ? 'justify-center px-2' : 'px-4'
                    )}
                  >
                    <div className={cn(
                      'w-1.5 h-1.5 shrink-0',
                      isActive ? 'bg-primary' : 'bg-foreground/30'
                    )} />
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={cn('p-4 border-t space-y-2', collapsed ? 'px-2' : 'px-6')}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={cn(
            'w-full flex items-center gap-3 p-3 border border-transparent',
            'hover:border-foreground/10 hover:bg-foreground/5',
            'text-foreground/60 hover:text-foreground transition-colors',
            collapsed ? 'justify-center' : ''
          )}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 shrink-0" />
          ) : (
            <Moon className="w-5 h-5 shrink-0" />
          )}
          {!collapsed && <span className="text-sm">Toggle Theme</span>}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className={cn(
            'w-full flex items-center gap-3 p-3 border border-transparent',
            'hover:border-red-500/20 hover:bg-red-500/10',
            'text-foreground/60 hover:text-red-500 transition-colors',
            collapsed ? 'justify-center' : ''
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
}
