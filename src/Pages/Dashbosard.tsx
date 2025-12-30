
import React from 'react';
import { 
  ShoppingBag, 
  Car, 
  Hotel, 
  Plane, 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  Clock,
  Sparkles
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 700 },
];

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <div className="flex items-center text-green-500 text-xs font-bold">
        <TrendingUp size={14} className="mr-1" />
        {change}%
      </div>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc, to, color }: any) => (
  <Link to={to} className={`group p-6 rounded-3xl border border-gray-100 ${color} transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}>
    <div className="relative z-10">
      <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white">
        <Icon size={24} />
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-white/80 text-sm">{desc}</p>
      <div className="mt-4 flex items-center text-white text-xs font-bold group-hover:translate-x-1 transition-transform">
        Explore <ArrowUpRight size={14} className="ml-1" />
      </div>
    </div>
    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
      <Icon size={120} />
    </div>
  </Link>
);

const Dashboard = ({ userName }: { userName: string }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userName}! 👋</h1>
          <p className="text-gray-500">Here's what's happening with your OmniHub today.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Clock size={16} /> 24 Oct, 2023
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <Sparkles size={16} /> Premium Access
          </button>
        </div>
      </header>

      {/* Grid for Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard 
          icon={ShoppingBag} 
          title="Instant Shop" 
          desc="Groceries in 10 mins" 
          to="/shopping" 
          color="bg-emerald-500 shadow-emerald-100" 
        />
        <ServiceCard 
          icon={Car} 
          title="Fast Ride" 
          desc="Reliable city cabs" 
          to="/cabs" 
          color="bg-amber-500 shadow-amber-100" 
        />
        <ServiceCard 
          icon={Hotel} 
          title="Hotels" 
          desc="Stay comfortable" 
          to="/hotels" 
          color="bg-rose-500 shadow-rose-100" 
        />
        <ServiceCard 
          icon={Plane} 
          title="Flights" 
          desc="Travel the world" 
          to="/flights" 
          color="bg-indigo-500 shadow-indigo-100" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stats Graph */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900 text-lg">Total Spendings</h3>
            <select className="bg-gray-100 border-none rounded-lg py-1 px-3 text-sm font-medium outline-none cursor-pointer">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}
                  cursor={{stroke: '#6366f1', strokeWidth: 2}}
                />
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          <StatCard title="Total Savings" value="$1,245.80" change="12" icon={Sparkles} color="bg-indigo-600" />
          <StatCard title="Active Bookings" value="3" change="2" icon={Clock} color="bg-emerald-600" />
          <StatCard title="Wallet Balance" value="$8,950.00" change="5" icon={Users} color="bg-rose-600" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-lg">Recent Transactions</h3>
          <button className="text-indigo-600 font-semibold text-sm hover:underline">View all</button>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { id: 1, name: 'Blinkit Groceries', date: '2 hours ago', amount: '-$42.50', status: 'Completed', icon: ShoppingBag, color: 'bg-emerald-100 text-emerald-600' },
            { id: 2, name: 'Uber Ride', date: '5 hours ago', amount: '-$18.00', status: 'Completed', icon: Car, color: 'bg-amber-100 text-amber-600' },
            { id: 3, name: 'Marriott Stay', date: 'Yesterday', amount: '-$450.00', status: 'Completed', icon: Hotel, color: 'bg-rose-100 text-rose-600' },
            { id: 4, name: 'Wallet Topup', date: '2 days ago', amount: '+$500.00', status: 'Pending', icon: Users, color: 'bg-indigo-100 text-indigo-600' },
          ].map((item) => (
            <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.date} • {item.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${item.amount.startsWith('+') ? 'text-emerald-500' : 'text-gray-900'}`}>
                  {item.amount}
                </p>
                <button className="text-xs text-indigo-600 hover:underline">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
