
import { cookies } from 'next/headers';
import Link from 'next/link';
import { UserPlus, Mail, Shield, ChevronRight, Search } from 'lucide-react';
import { payload } from '@/lib/payload/api';

async function getUsers() {
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;
  
  try {
    const data = await payload.getUsers(token);
    return data.docs || [];
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Users
          </h1>
          <p className="text-neutral-400 mt-2">Manage administrative access.</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20">
          <UserPlus className="w-5 h-5" />
          Add New User
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/2">
           <div className="relative max-w-md">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
             <input 
               type="text" 
               placeholder="Search users..." 
               className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 outline-none focus:border-purple-500/50 text-sm transition-all"
             />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-neutral-500 text-xs font-bold uppercase tracking-wider border-b border-white/5">
                <th className="px-8 py-5">User</th>
                <th className="px-8 py-5">Email</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Last Updated</th>
                <th className="px-0 py-5 w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user: any) => (
                <tr key={user.id} className="group hover:bg-white/2 transition-colors cursor-pointer">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 font-bold group-hover:bg-purple-600 group-hover:text-white transition-all">
                        {user.email?.[0]?.toUpperCase()}
                      </div>
                      <span className="font-semibold text-white">{user.email.split('@')[0]}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                       <Mail className="w-4 h-4 text-neutral-600" />
                       {user.email}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-tight border border-green-500/20">
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-neutral-500">
                    {new Date(user.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-0 py-5">
                    <ChevronRight className="w-5 h-5 text-neutral-700 group-hover:text-purple-400 transition-all transform translate-x-0 group-hover:translate-x-1" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
