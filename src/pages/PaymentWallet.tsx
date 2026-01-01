
import React from 'react';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, Shield, CreditCard, Send, Smartphone } from 'lucide-react';

const PaymentWallet = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Wallet Balance Card */}
        <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between aspect-[1.618/1]">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Wallet size={24} />
              </div>
              <Shield size={24} className="text-white/40" />
            </div>
            <p className="text-indigo-100 font-medium mb-1">Available Balance</p>
            <h2 className="text-5xl font-bold tracking-tight mb-8">$8,950.42</h2>
          </div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-indigo-400 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-indigo-500 flex items-center justify-center text-xs font-bold">
                +4
              </div>
            </div>
            <button className="bg-white text-indigo-600 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
              <Plus size={24} />
            </button>
          </div>
          
          {/* Abstract Decorations */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 group-hover:scale-110 transition-transform">
              <Send size={24} />
            </div>
            <span className="font-bold text-gray-900">Send Money</span>
          </button>
          <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
            <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
              <Smartphone size={24} />
            </div>
            <span className="font-bold text-gray-900">Recharge</span>
          </button>
          <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
            <div className="bg-rose-100 p-4 rounded-2xl text-rose-600 group-hover:scale-110 transition-transform">
              <CreditCard size={24} />
            </div>
            <span className="font-bold text-gray-900">Pay Bill</span>
          </button>
          <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-all group">
            <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 group-hover:scale-110 transition-transform">
              <Plus size={24} />
            </div>
            <span className="font-bold text-gray-900">Top Up</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Payment History</h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200">All</button>
            <button className="text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50">Spending</button>
            <button className="text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50">Income</button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-50">
          {[
            { id: 1, name: 'Spotify Premium', type: 'Subscription', amount: -15.99, time: '10:30 AM', icon: Smartphone, color: 'bg-emerald-100 text-emerald-600' },
            { id: 2, name: 'John Smith', type: 'Transfer', amount: +250.00, time: 'Yesterday', icon: ArrowUpRight, color: 'bg-indigo-100 text-indigo-600' },
            { id: 3, name: 'Blinkit Orders', type: 'Shopping', amount: -64.20, time: 'Oct 22, 2023', icon: Smartphone, color: 'bg-rose-100 text-rose-600' },
            { id: 4, name: 'Cash Deposit', type: 'Bank Transfer', amount: +1200.00, time: 'Oct 20, 2023', icon: ArrowDownLeft, color: 'bg-emerald-100 text-emerald-600' },
          ].map(tx => (
            <div key={tx.id} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl ${tx.color}`}>
                  <tx.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{tx.name}</h4>
                  <p className="text-sm text-gray-400 font-medium">{tx.type} • {tx.time}</p>
                </div>
              </div>
              <p className={`text-xl font-bold ${tx.amount > 0 ? 'text-emerald-500' : 'text-gray-900'}`}>
                {tx.amount > 0 ? `+${tx.amount.toFixed(2)}` : tx.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentWallet;
