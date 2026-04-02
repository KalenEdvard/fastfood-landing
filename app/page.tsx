'use client';

import { useState } from 'react';
import { menuCategories } from './data/menu';

const WHATSAPP = '+996779044425';

function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [cart, setCart] = useState<{ name: string; price: number; qty: number }[]>([]);
  const [showCart, setShowCart] = useState(false);

  const activeMenu = menuCategories.find((c) => c.id === activeCategory);

  function addToCart(name: string, price: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price, qty: 1 }];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) => prev.filter((i) => i.name !== name));
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function buildOrderText() {
    const lines = cart.map((i) => `• ${i.name} x${i.qty} — ${i.price * i.qty} сом`);
    return `Привет! Хочу заказать:\n${lines.join('\n')}\n\nИтого: ${totalPrice} сом`;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-oswald">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold tracking-widest text-white">KOROZ</span>
            <span className="text-2xl font-bold tracking-widest text-orange-500"> FOOD</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hidden sm:block text-sm text-white/70 hover:text-white transition-colors">Меню</a>
            <a href="#contacts" className="hidden sm:block text-sm text-white/70 hover:text-white transition-colors">Контакты</a>
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
            >
              Корзина
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-20 min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.15)_0%,_transparent_70%)]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-widest mb-4">
            <span className="text-white">KOROZ</span>
            <span className="text-orange-500"> FOOD</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl mb-2 tracking-wide">Ноокат, Ош — Кыргызстан</p>
          <p className="text-white/40 text-sm mb-8">Бургеры · Шаурма · Пицца · Роллы · Фритюр</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg tracking-wider transition-colors"
            >
              СМОТРЕТЬ МЕНЮ
            </a>
            <a
              href={whatsappLink('Привет! Хочу сделать заказ')}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg tracking-wider transition-colors"
            >
              ЗАКАЗАТЬ В WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center tracking-widest mb-10 text-white">
          НАШ <span className="text-orange-500">МЕНЮ</span>
        </h2>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-bold text-sm tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeMenu?.items.map((item) => (
            <div
              key={item.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-500/50 transition-all hover:bg-white/8"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-lg leading-tight">{item.name}</h3>
                <span className="text-orange-500 font-bold text-xl ml-2 whitespace-nowrap">{item.price} с</span>
              </div>
              {item.description && (
                <p className="text-white/40 text-xs mb-4 leading-relaxed">{item.description}</p>
              )}
              <button
                onClick={() => addToCart(item.name, item.price)}
                className="w-full bg-orange-500/20 hover:bg-orange-500 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-white font-bold py-2 rounded-full text-sm tracking-wider transition-all"
              >
                + ДОБАВИТЬ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-black/40 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold tracking-widest mb-10 text-white">
            КОНТАКТЫ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-bold text-lg mb-1">Адрес</h3>
              <p className="text-white/60">Ноокат, Ош</p>
              <p className="text-white/40 text-sm">Кыргызстан</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
              <a href={whatsappLink('Привет!')} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                +996 779 044 425
              </a>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-white font-bold text-lg mb-1">Режим работы</h3>
              <p className="text-white/60">Ежедневно</p>
              <p className="text-white/40 text-sm">10:00 — 23:00</p>
            </div>
          </div>
          <a
            href={whatsappLink('Привет! Хочу сделать заказ')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full text-xl tracking-wider transition-colors"
          >
            ЗАКАЗАТЬ В WHATSAPP
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-white/30 text-sm tracking-wider">© 2026 KOROZ FOOD — Ноокат, Кыргызстан</p>
      </footer>

      {/* CART MODAL */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h2 className="text-xl font-bold text-white tracking-widest">КОРЗИНА</h2>
              <button onClick={() => setShowCart(false)} className="text-white/40 hover:text-white text-2xl">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <p className="text-white/40 text-center py-8">Корзина пуста</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-xl p-3">
                      <div className="flex-1">
                        <p className="text-white text-sm font-bold">{item.name}</p>
                        <p className="text-white/40 text-xs">{item.qty} × {item.price} с</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-orange-500 font-bold">{item.price * item.qty} с</span>
                        <button onClick={() => removeFromCart(item.name)} className="text-white/30 hover:text-red-400 transition-colors">✕</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-5 border-t border-white/10">
                <div className="flex justify-between mb-4">
                  <span className="text-white/60 font-bold tracking-wider">ИТОГО</span>
                  <span className="text-orange-500 text-xl font-bold">{totalPrice} сом</span>
                </div>
                <a
                  href={whatsappLink(buildOrderText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCart(false)}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-full text-center text-lg tracking-wider transition-colors"
                >
                  ЗАКАЗАТЬ В WHATSAPP
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
