
import React from 'react';
import { Plane, ArrowRight, Calendar, Users, MapPin, Clock, Luggage } from 'lucide-react';

const FLIGHTS = [
  { id: 1, airline: "SkyHigh Airways", logo: "https://picsum.photos/seed/airline1/100/100", from: "NYC", to: "LHR", dep: "08:30 AM", arr: "08:45 PM", duration: "7h 15m", price: 450, class: "Economy" },
  { id: 2, airline: "Oceanic Air", logo: "https://picsum.photos/seed/airline2/100/100", from: "SFO", to: "TYO", dep: "10:15 AM", arr: "02:30 PM", duration: "11h 15m", price: 820, class: "Premium" },
  { id: 3, airline: "Cloud9", logo: "https://picsum.photos/seed/airline3/100/100", from: "DXB", to: "SIN", dep: "11:50 PM", arr: "11:15 AM", duration: "7h 25m", price: 540, class: "Economy" },
  { id: 4, airline: "StarFly", logo: "https://picsum.photos/seed/airline4/100/100", from: "CDG", to: "LAX", dep: "02:00 PM", arr: "05:15 PM", duration: "11h 15m", price: 690, class: "Business" },
];

const FlightBooking = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Discover your next adventure</h1>
          <p className="text-indigo-100 mb-8">Compare thousands of flights from over 500 airlines worldwide.</p>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase text-indigo-100 mb-1">From</label>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <input type="text" placeholder="New York" className="bg-transparent border-none outline-none text-white placeholder-white/50 font-bold" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase text-indigo-100 mb-1">To</label>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <input type="text" placeholder="London" className="bg-transparent border-none outline-none text-white placeholder-white/50 font-bold" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase text-indigo-100 mb-1">Departure</label>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <input type="text" placeholder="Nov 15" className="bg-transparent border-none outline-none text-white placeholder-white/50 font-bold" />
              </div>
            </div>
            <button className="bg-white text-indigo-600 rounded-2xl py-3 font-bold hover:bg-indigo-50 transition-colors shadow-lg">
              Find Flights
            </button>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Plane size={300} className="rotate-45 translate-x-1/2" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 px-2">Available Flights</h3>
        <div className="space-y-4">
          {FLIGHTS.map(flight => (
            <div key={flight.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="flex items-center gap-4">
                <img src={flight.logo} className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="font-bold text-gray-900">{flight.airline}</h4>
                  <p className="text-xs text-gray-500">{flight.class} Class</p>
                </div>
              </div>

              <div className="flex items-center gap-8 md:gap-12 text-center">
                <div>
                  <p className="text-xl font-bold text-gray-900">{flight.dep}</p>
                  <p className="text-sm text-gray-400 font-bold uppercase">{flight.from}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[10px] text-gray-400 font-bold mb-1">{flight.duration}</p>
                  <div className="w-24 md:w-32 h-0.5 bg-gray-100 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                      <Plane size={14} className="text-indigo-400" />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold mt-1">Direct</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{flight.arr}</p>
                  <p className="text-sm text-gray-400 font-bold uppercase">{flight.to}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:gap-12 justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0">
                <div className="flex items-center gap-4 text-gray-400">
                  <Luggage size={20} />
                  <Clock size={20} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">${flight.price}</p>
                  <button className="text-xs font-bold text-gray-900 bg-gray-100 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-xl transition-all mt-1">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
