import React, { useState } from 'react'

export default function OurShop({ onBackHome }) {
  const [selectedCategory, setSelectedCategory] = useState('SHOW ALL')

  const categories = ['SHOW ALL', 'ADVENTURE', 'STRATEGY', 'RACING']

  const shopGames = [
    {
      id: 1,
      title: 'Assassin Creed',
      category: 'ADVENTURE',
      label: 'Action',
      price: '$24',
      oldPrice: '$36',
      image: '/images/trending-01.jpg',
    },
    {
      id: 2,
      title: 'Assassin Creed',
      category: 'STRATEGY',
      label: 'Action',
      price: '$32',
      oldPrice: '',
      image: '/images/trending-02.jpg',
    },
    {
      id: 3,
      title: 'Assassin Creed',
      category: 'RACING',
      label: 'Action',
      price: '$45',
      oldPrice: '$64',
      image: '/images/trending-03.jpg',
    },
    {
      id: 4,
      title: 'Assassin Creed',
      category: 'ADVENTURE',
      label: 'Action',
      price: '$22',
      oldPrice: '$32',
      image: '/images/trending-04.jpg',
    },
  ]

  const filteredGames =
    selectedCategory === 'SHOW ALL'
      ? shopGames
      : shopGames.filter((game) => game.category === selectedCategory)

  return (
    <div>
      {/* بانر OUR SHOP الأزرق بحواف دائرية */}
      <section className='w-full bg-[#007bff] text-white pt-36 pb-24 rounded-b-[90px] md:rounded-b-[140px] text-center px-6'>
        <h1 className='text-4xl sm:text-5xl font-bold uppercase tracking-wide'>
          OUR SHOP
        </h1>
        <p className='text-sm text-white/85 mt-3'>
          <button
            type='button'
            onClick={onBackHome}
            className='hover:underline cursor-pointer font-medium'
          >
            Home
          </button>{' '}
          &gt; Our Shop
        </p>
      </section>

      {/* أزرار الفلترة وكروت الألعاب */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
        <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-12'>
          {categories.map((cat) => {
            const active = selectedCategory === cat
            return (
              <button
                key={cat}
                type='button'
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition ${
                  active
                    ? 'bg-[#ee626b] text-white shadow'
                    : 'bg-[#eeeeee] text-gray-800 hover:text-[#ee626b]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className='bg-[#eeeeee] rounded-[25px] overflow-hidden group transition-all duration-300'
            >
              <div className='relative h-56 overflow-hidden rounded-[25px] bg-gray-200'>
                <img
                  src={game.image}
                  alt={game.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute bottom-3 right-3 bg-[#008af8] text-white rounded-[10px] px-3 py-1.5 text-center leading-tight shadow'>
                  {game.oldPrice && (
                    <span className='block text-[11px] line-through text-white/80'>
                      {game.oldPrice}
                    </span>
                  )}
                  <span className='block text-base font-bold'>
                    {game.price}
                  </span>
                </div>
              </div>

              <div className='px-5 py-6 flex items-center justify-between gap-3'>
                <div>
                  <span className='block text-xs text-gray-500 mb-1'>
                    {game.label}
                  </span>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-[#008af8] transition-colors'>
                    {game.title}
                  </h3>
                </div>

                <button
                  type='button'
                  aria-label={`Add ${game.title} to cart`}
                  className='w-11 h-11 rounded-full bg-[#ee626b] group-hover:bg-[#008af8] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer shadow'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.12L7.9 15h8.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.8 6H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44C5.52 17.37 6.48 19 8 19h12v-2H8l1.16-2.74z' />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}