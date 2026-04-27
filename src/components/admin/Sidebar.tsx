
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Articles', href: '/admin/articles', icon: FileText },
  { name: 'Media', href: '/admin/media', icon: ImageIcon },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/5 flex flex-col h-full bg-neutral-950 p-4">
      {/* Logo */}
      <div className="px-4 py-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="font-bold text-lg">A</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">Admin</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-white/5 text-purple-400" 
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", isActive ? "text-purple-400" : "text-neutral-500 group-hover:text-neutral-300")} />
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {/* User / Logout */}
      <div className="pt-4 mt-4 border-t border-white/5">
        <button
          onClick={() => {}} // TODO: Implement logout
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 text-neutral-500 group-hover:text-red-400" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
