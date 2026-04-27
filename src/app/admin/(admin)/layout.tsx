
import { ReactNode } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500/30">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-neutral-900/50 backdrop-blur-sm border-l border-white/5">
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
