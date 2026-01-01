
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, Coffee, Wifi, Tv, Wind } from 'lucide-react';

const HOTELS = [
  { id: 1, name: "Grand Continental Hotel", city: "London", rating: 4.8, reviews: 254, price: 185, img: "https://picsum.photos/seed/hotel1/600/400", tags: ["Breakfast Included", "Free Cancellation"] },
  { id: 2, name: "Sunset Resort & Spa", city: "Bali", rating: 4.9, reviews: 1024, price: 320, img: "https://picsum.photos/seed/hotel2/600/400", tags: ["Sea View", "Private Pool"] },
  { id: 3, name: "The Urban Lodge", city: "New York", rating: 4.5, reviews: 542, price: 145, img: "https://picsum.photos/seed/hotel3/600/400", tags: ["Downtown", "Modern Decor"] },
  { id: 4, name: "Alpine Vista Lodge", city: "Swiss Alps", rating: 4.7, reviews: 312, price: 210, img: "https://picsum.photos/seed/hotel4/600/400", tags: ["Ski-in/Ski-out", "Spa"] },
];

const HotelBooking = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in slide-in-from-top-4 duration-500">
      {/* Search Header */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl -mt-4 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find the perfect stay</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
            <MapPin className="text-rose-500" size={20} />
            <div className="flex-1">
              <label className="text-[10px] text-gray-400 font-bold uppercase block">Where are you going?</label>
              <input type="text" placeholder="City, hotel name..." className="w-full bg-transparent border-none outline-none text-sm font-semibold" />
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
            <Calendar className="text-rose-500" size={20} />
            <div className="flex-1">
              <label className="text-[10px] text-gray-400 font-bold uppercase block">Check-in - Check-out</label>
              <input type="text" placeholder="24 Oct - 28 Oct" className="w-full bg-transparent border-none outline-none text-sm font-semibold" />
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
            <Users className="text-rose-500" size={20} />
            <div className="flex-1">
              <label className="text-[10px] text-gray-400 font-bold uppercase block">Guests & Rooms</label>
              <input type="text" placeholder="2 Adults, 1 Room" className="w-full bg-transparent border-none outline-none text-sm font-semibold" />
            </div>
          </div>
          <button className="bg-rose-500 text-white rounded-2xl py-4 px-6 font-bold flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors shadow-lg shadow-rose-100">
            <Search size={20} /> Search Stays
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOTELS.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
            <div className="relative aspect-[4/3]">
              <img src={hotel.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={hotel.name} />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm">
                <Star size={14} className="text-amber-500 fill-amber-500" /> {hotel.rating}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-rose-500 text-[10px] font-bold uppercase mb-1">
                <MapPin size={10} className="mr-1" /> {hotel.city}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{hotel.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 mb-6">
                <Wifi size={16} /> <Coffee size={16} /> <Tv size={16} /> <Wind size={16} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Price per night</p>
                  <p className="text-xl font-bold text-gray-900">${hotel.price}</p>
                </div>
                <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelBooking;
