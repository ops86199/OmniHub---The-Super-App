
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Car, 
  Hotel, 
  Plane, 
  Wallet, 
  Bell, 
  User, 
  Search, 
  Menu, 
  X, 
  LogOut, 
  Sparkles, 
  ArrowRight,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Shopping from './pages/Shopping';
import CabBooking from './pages/CabBooking';
import HotelBooking from './pages/HotelBooking';
import FlightBooking from './pages/FlightBooking';
import PaymentWallet from './pages/PaymentWallet';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
      <Sparkles size={24} fill="currentColor" />
    </div>
    <span className="text-2xl font-black text-gray-900 tracking-tight">Omni<span className="text-indigo-600">Hub</span></span>
  </div>
);

const SidebarLink = ({ to, icon: Icon, label, active }: { to: string, icon: any, label: string, active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
      : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </Link>
);

const LoginPage = ({ onLogin }: { onLogin: (name: string) => void }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && password.trim()) {
      onLogin(name);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-6">
      <div className="glass-morphism max-w-md w-full p-8 rounded-[2.5rem] shadow-2xl animate-in fade-in zoom-in duration-700">
        <div className="flex flex-col items-center text-center space-y-6">
          <Logo className="mb-2 scale-110" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome to OmniHub</h1>
            <p className="text-gray-600 mt-2">The only super app you'll ever need. Cabs, Flights, Hotels & Shopping in one place.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="text-left space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2 block">Tell us your name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name" 
                  className="w-full bg-white border-2 border-transparent focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-6 shadow-sm outline-none transition-all text-gray-800 font-medium"
                />
              </div>
            </div>

            <div className="text-left space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2 block">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password" 
                  className="w-full bg-white border-2 border-transparent focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-12 shadow-sm outline-none transition-all text-gray-800 font-medium"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-xl shadow-indigo-200"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </form>
          
          <div className="pt-2 text-xs text-gray-400">
            By logging in, you agree to our <a href="#" className="underline hover:text-indigo-600 transition-colors">Terms</a> and <a href="#" className="underline hover:text-indigo-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ userName, onLogout }: { userName: string, onLogout: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-50">
      <Logo />

      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search groceries, flights, hotels..." 
            className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-gray-100">
           <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-bold text-gray-700">{userName}</span>
        </div>
        <button 
          onClick={onLogout}
          className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
        <button 
          className="md:hidden p-2 text-gray-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col space-y-2 md:hidden animate-in slide-in-from-top duration-300">
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} />
          <SidebarLink to="/shopping" icon={ShoppingBag} label="Shopping" active={location.pathname === '/shopping'} />
          <SidebarLink to="/cabs" icon={Car} label="Cabs" active={location.pathname === '/cabs'} />
          <SidebarLink to="/hotels" icon={Hotel} label="Hotels" active={location.pathname === '/hotels'} />
          <SidebarLink to="/flights" icon={Plane} label="Flights" active={location.pathname === '/flights'} />
          <SidebarLink to="/wallet" icon={Wallet} label="Wallet" active={location.pathname === '/wallet'} />
        </div>
      )}
    </nav>
  );
};

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 p-6 hidden md:block">
      <div className="flex flex-col space-y-2">
        <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} />
        <SidebarLink to="/shopping" icon={ShoppingBag} label="Shopping" active={location.pathname === '/shopping'} />
        <SidebarLink to="/cabs" icon={Car} label="Cabs" active={location.pathname === '/cabs'} />
        <SidebarLink to="/hotels" icon={Hotel} label="Hotels" active={location.pathname === '/hotels'} />
        <SidebarLink to="/flights" icon={Plane} label="Flights" active={location.pathname === '/flights'} />
        <SidebarLink to="/wallet" icon={Wallet} label="Wallet" active={location.pathname === '/wallet'} />
      </div>

      <div className="absolute bottom-10 left-6 right-6 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2rem] border border-indigo-100 group cursor-pointer hover:shadow-lg transition-all duration-300">
        <p className="text-xs font-black text-indigo-600 uppercase mb-1 flex items-center gap-1">
          <Sparkles size={12} fill="currentColor" /> OmniHub Pro
        </p>
        <p className="text-xs text-indigo-900/70 mb-3 leading-relaxed">Unlimited free deliveries & premium seat selections.</p>
        <button className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors group-hover:scale-[1.02]">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

const App = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem('omnihub_user');
    if (savedName) {
      setUser({ name: savedName });
    }
  }, []);

  const handleLogin = (name: string) => {
    localStorage.setItem('omnihub_user', name);
    setUser({ name });
  };

  const handleLogout = () => {
    localStorage.removeItem('omnihub_user');
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar userName={user.name} onLogout={handleLogout} />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard userName={user.name} />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/cabs" element={<CabBooking />} />
              <Route path="/hotels" element={<HotelBooking />} />
              <Route path="/flights" element={<FlightBooking />} />
              <Route path="/wallet" element={<PaymentWallet />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
