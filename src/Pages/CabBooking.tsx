
import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Shield, Star, Info } from 'lucide-react';

const RIDE_TYPES = [
  { id: 'mini', name: 'Mini', time: '3 min', price: '$8.50', desc: 'Compact hatchbacks for 4', icon: Car, color: 'text-blue-500 bg-blue-50' },
  { id: 'sedan', name: 'Sedan', time: '5 min', price: '$12.00', desc: 'Premium sedans with extra legroom', icon: Car, color: 'text-indigo-500 bg-indigo-50' },
  { id: 'suv', name: 'SUV', time: '8 min', price: '$18.50', desc: 'Larger vehicles for groups of 6', icon: Car, color: 'text-amber-500 bg-amber-50' },
  { id: 'luxury', name: 'Luxury', time: '10 min', price: '$35.00', desc: 'High-end vehicles with expert drivers', icon: Car, color: 'text-purple-500 bg-purple-50' },
];

const CabBooking = () => {
  const [selectedType, setSelectedType] = useState('sedan');

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Booking Controls */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Navigation className="text-indigo-600" size={24} /> Where to?
            </h2>
            <div className="space-y-4 relative">
              <div className="absolute left-[21px] top-10 bottom-10 w-0.5 bg-gray-200 border-dashed"></div>
              
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 z-10">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-400 font-bold uppercase mb-1 block">Pick up</label>
                  <input 
                    type="text" 
                    placeholder="Current location" 
                    className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
                  />
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 z-10">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-400 font-bold uppercase mb-1 block">Drop off</label>
                  <input 
                    type="text" 
                    placeholder="Enter destination" 
                    className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Choose a ride</h3>
            <div className="space-y-3">
              {RIDE_TYPES.map(type => (
                <button 
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    selectedType === type.id 
                    ? 'border-indigo-600 bg-indigo-50' 
                    : 'border-gray-100 hover:border-indigo-100 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${type.color}`}>
                      <type.icon size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        {type.name} <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-gray-100 text-gray-500">{type.time}</span>
                      </h4>
                      <p className="text-xs text-gray-500">{type.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{type.price}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <button className="w-full mt-6 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
              Book {RIDE_TYPES.find(t => t.id === selectedType)?.name} Now
            </button>
          </div>
        </div>

        {/* Right Side: Map & Live Info */}
        <div className="space-y-6">
          <div className="bg-gray-200 rounded-3xl h-[400px] relative overflow-hidden flex items-center justify-center border border-gray-200">
            {/* Mock Map Background */}
            <img src="https://picsum.photos/seed/map/800/600" className="w-full h-full object-cover grayscale opacity-50" alt="Map" />
            <div className="absolute inset-0 bg-indigo-500/10"></div>
            
            {/* Map UI Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white border-4 border-white shadow-xl animate-bounce">
                  <Navigation size={16} className="rotate-45" />
                </div>
                <div className="w-4 h-4 bg-indigo-600/30 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 scale-150 blur-sm"></div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase">Secure Ride</p>
                  <p className="text-xs text-gray-800 font-medium">All drivers are verified & trained.</p>
                </div>
              </div>
              <Info size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                <Star size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">4.8 Rating</p>
                <p className="text-[10px] text-gray-500">Average Driver Score</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
              <div className="bg-rose-100 p-2 rounded-xl text-rose-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">5-10 Min</p>
                <p className="text-[10px] text-gray-500">Wait Time Near You</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabBooking;
