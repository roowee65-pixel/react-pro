import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [status, setStatus] = useState('top'); // 'top' | 'hidden' | 'stuck'
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const threshold = 320; // المسافة اللي بعدها بيبدأ سلوك الظهور الثابت

      if (currentY <= 80) {
        setStatus('top');
      } else if (currentY > 80 && currentY < threshold) {
        // اختفاء لحظي أثناء النزول في المنطقة الانتقالية
        if (currentY > lastScrollY) {
          setStatus('hidden');
        } else if (currentY < 160) {
          setStatus('top');
        }
      } else {
        // ظهور ثابت بشكل الناف بار بعد تجاوز المنطقة الانتقالية
        setStatus('stuck');
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getHeaderClasses = () => {
    if (status === 'top') {
      return 'bg-transparent py-6 translate-y-0 rounded-none shadow-none';
    }
    if (status === 'hidden') {
      return 'bg-[#007bff] py-3 -translate-y-full rounded-b-[25px] shadow-lg';
    }
    return 'bg-[#007bff] py-3 translate-y-0 rounded-b-[25px] shadow-xl';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out ${getHeaderClasses()}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* اللوجو */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-white text-[#007bff] flex items-center justify-center font-black text-xl shadow">
            X
          </div>
          <span className="text-2xl font-extrabold tracking-widest uppercase text-white">
            LUGX
          </span>
        </a>

        {/* روابط التنقل */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-white whitespace-nowrap">
          <li>
            <a
              href="#"
              className="bg-white/20 text-white px-5 py-2.5 rounded-full transition hover:bg-white/30"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white/90 hover:text-white transition">
              Our Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-white/90 hover:text-white transition">
              Product Details
            </a>
          </li>
          <li>
            <a href="#" className="text-white/90 hover:text-white transition">
              Contact Us
            </a>
          </li>
          <li>
            <button className="bg-[#ee626b] hover:bg-[#e04f58] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow transition cursor-pointer">
              SIGN IN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}