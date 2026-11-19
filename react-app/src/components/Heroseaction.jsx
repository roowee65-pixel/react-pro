import React, { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#007bff] text-white pt-36 md:pt-44 pb-24 md:pb-32 rounded-b-[90px] md:rounded-b-[150px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* الجانب الأيسر: النصوص والبحث */}
        <div className="lg:col-span-7 space-y-5">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.15em] text-white">
            WELCOME TO LUGX
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.18] uppercase tracking-tight">
            BEST GAMING SITE EVER!
          </h1>

          <p className="text-sm sm:text-[15px] text-white/90 max-w-xl leading-7 font-normal pt-1">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about TemplateMo.
          </p>

          <form
            onSubmit={handleSearch}
            className="bg-white rounded-full p-1.5 flex items-center max-w-md shadow-xl relative pt-1.5 mt-7"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type Something"
              className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm px-6 py-3 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ee626b] hover:bg-[#e04f58] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shrink-0 cursor-pointer transition"
            >
              SEARCH NOW
            </button>
          </form>
        </div>

        {/* الجانب الأيمن: كارت اللعبة والخصم والسعر */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] rounded-[25px] overflow-visible shadow-2xl">
            {/* السعر أعلى اليمين */}
            <span className="absolute top-4 right-4 bg-[#0171f9] text-white font-bold text-xl px-4 py-1.5 rounded-full shadow-md z-20">
              $22
            </span>

            {/* صورة اللعبة */}
            <div className="w-full h-[400px] rounded-[25px] overflow-hidden relative bg-[#0069d9]">
              <img
                src="/images/REACT1.png"
                alt="Banner Game"
                className="w-full h-full object-cover object-top block"
              />
            </div>

            {/* شارة الخصم -40% أسفل اليسار */}
            <span className="absolute -bottom-5 -left-5 bg-[#ee626b] text-white font-bold text-2xl w-24 h-24 rounded-full flex items-center justify-center shadow-lg z-20">
              -40%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}