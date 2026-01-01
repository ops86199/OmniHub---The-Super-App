
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Search, Tag, Timer, Heart } from 'lucide-react';

const CATEGORIES = [
  "Vegetables", "Dairy & Eggs", "Beverages", "Snacks", "Household", "Personal Care", "Meat", "Frozen Food"
];

const PRODUCTS = [
  { id: 1, name: "Fresh Broccoli", weight: "500g", price: 2.99, img: "https://picsum.photos/seed/broccoli/400/300", category: "Vegetables" },
  { id: 2, name: "Full Cream Milk", weight: "1L", price: 1.50, img: "https://picsum.photos/seed/milk/400/300", category: "Dairy & Eggs" },
  { id: 3, name: "Greek Yogurt", weight: "400g", price: 4.25, img: "https://picsum.photos/seed/yogurt/400/300", category: "Dairy & Eggs" },
  { id: 4, name: "Chocolate Cookies", weight: "200g", price: 3.49, img: "https://picsum.photos/seed/cookie/400/300", category: "Snacks" },
  { id: 5, name: "Orange Juice", weight: "1L", price: 3.99, img: "https://picsum.photos/seed/juice/400/300", category: "Beverages" },
  { id: 6, name: "Bananas", weight: "1kg", price: 1.20, img: "https://picsum.photos/seed/banana/400/300", category: "Vegetables" },
  { id: 7, name: "Fresh Eggs", weight: "12 pcs", price: 5.99, img: "https://picsum.photos/seed/eggs/400/300", category: "Dairy & Eggs" },
  { id: 8, name: "Green Grapes", weight: "500g", price: 4.50, img: "https://picsum.photos/seed/grapes/400/300", category: "Vegetables" },
];

const Shopping = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id]--;
      else delete newCart[id];
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((acc, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return acc + (p?.price || 0) * qty;
  }, 0);

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Shop Area */}
        <div className="flex-1 space-y-8">
          <div className="relative">
            <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
              <div className="relative z-10 max-w-sm">
                <div className="flex items-center space-x-2 bg-emerald-500 w-fit px-3 py-1 rounded-full text-xs font-bold mb-4">
                  <Timer size={14} /> <span>DELIVERING IN 12 MINS</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">Groceries delivered in a blink</h1>
                <p className="text-emerald-100 text-sm mb-6">Get everything from fresh produce to electronics at your doorstep.</p>
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-50 transition-colors">
                  Shop Essentials
                </button>
              </div>
              <img src="https://picsum.photos/seed/grocery_bag/400/300" className="w-64 h-48 object-cover rounded-2xl shadow-2xl mt-6 md:mt-0 transform rotate-3" alt="Banner" />
            </div>
          </div>

          {/* Categories Horizontal */}
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                  selectedCategory === cat 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.category === selectedCategory).map(product => (
              <div key={product.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square">
                  <img src={product.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase mb-1">
                    <Tag size={10} className="mr-1" /> {product.weight}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm h-10 line-clamp-2">{product.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                    {cart[product.id] ? (
                      <div className="flex items-center bg-emerald-50 border border-emerald-100 rounded-xl px-2 py-1">
                        <button onClick={() => removeFromCart(product.id)} className="p-1 text-emerald-600"><Minus size={14} /></button>
                        <span className="mx-2 text-sm font-bold text-emerald-600">{cart[product.id]}</span>
                        <button onClick={() => addToCart(product.id)} className="p-1 text-emerald-600"><Plus size={14} /></button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-100"
                      >
                        <Plus size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Cart (Desktop) */}
        <div className="hidden lg:block w-80">
          <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <ShoppingCart size={20} className="text-emerald-600" /> My Cart
            </h3>
            
            {Object.keys(cart).length === 0 ? (
              <div className="text-center py-10">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <ShoppingCart size={32} />
                </div>
                <p className="text-gray-400 text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="max-h-64 overflow-y-auto pr-2 space-y-3">
                  {Object.entries(cart).map(([id, qty]) => {
                    const p = PRODUCTS.find(p => p.id === Number(id));
                    if (!p) return null;
                    return (
                      <div key={id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={p.img} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <h4 className="text-xs font-bold text-gray-800">{p.name}</h4>
                            <p className="text-[10px] text-gray-500">${p.price} x {qty}</p>
                          </div>
                        </div>
                        <p className="text-sm font-bold">${(p.price * qty).toFixed(2)}</p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 text-sm">Delivery Fee</span>
                    <span className="text-emerald-500 text-sm font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between mb-6">
                    <span className="text-gray-800 font-bold">Total</span>
                    <span className="text-gray-900 font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;

