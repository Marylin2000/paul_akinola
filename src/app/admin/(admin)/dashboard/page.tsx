
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          Welcome back, Paul
        </h1>
        <p className="text-neutral-400 mt-2">Here's what's happening with your portfolio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Articles', value: '12', trend: '+2 this month' },
          { label: 'Media Items', value: '48', trend: '+5 this month' },
          { label: 'Site Visitors', value: '1,280', trend: '+12% increase' },
        ].map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
            <p className="text-neutral-500 font-medium">{stat.label}</p>
            <h3 className="text-3xl font-bold mt-2 group-hover:text-purple-400 transition-colors">{stat.value}</h3>
            <p className="text-sm text-green-500 mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-4 text-lg">Recent Articles</h4>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/10 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium group-hover:text-purple-400 transition-colors">How to build a custom CMS</p>
                  <p className="text-sm text-neutral-500">Draft • 2 hours ago</p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-4 text-lg">System Status</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 text-sm font-medium">Payload API Online</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-sm font-medium">Database Connected</span>
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';
