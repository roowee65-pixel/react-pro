import React from 'react'

export default function TrendingGames({ onViewAll }) {
  const games = [
    {
      id: 1,
      title: 'Assassin Creed',
      category: 'Action',
      price: '$20',
      oldPrice: '$28',
      image: '/images/react2.png',
    },
    {
      id: 2,
      title: 'Assassin Creed',
      category: 'Action',
      price: '$44',
      oldPrice: '',
      image: '/images/react3.png',
    },
    {
      id: 3,
      title: 'Assassin Creed',
      category: 'Action',
      price: '$44',
      oldPrice: '$64',
      image: '/images/react4.png',
    },
    {
      id: 4,
      title: 'Assassin Creed',
      category: 'Action',
      price: '$32',
      oldPrice: '',
      image: '/images/react5.png',
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-6 py-16'>
      {/* الهيدر الخاص بالسيكشن */}
      <div className='flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4'>
        <div>
          <span className='text-xs font-bold uppercase tracking-widest text-[#ee626b]'>
            TRENDING
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-1'>
            Trending Games
          </h2>
        </div>

        <button
          type='button'
          onClick={onViewAll}
          className='self-start sm:self-auto bg-[#ee626b] hover:bg-[#008af8] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full cursor-pointer transition-colors duration-300'
        >
          VIEW ALL
        </button>
      </div>

      {/* شبكة كروت الألعاب */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {games.map((game) => (
          <div
            key={game.id}
            className='bg-[#eeeeee] rounded-[25px] overflow-hidden group transition-all duration-300'
          >
            {/* صورة اللعبة وشارة السعر */}
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
                <span className='block text-base font-bold'>{game.price}</span>
              </div>
            </div>

            {/* تفاصيل اللعبة وزر الشراء الدائري */}
            <div className='px-5 py-6 flex items-center justify-between gap-3'>
              <div>
                <span className='block text-xs text-gray-500 mb-1'>
                  {game.category}
                </span>
                <h3 className='text-lg font-bold text-gray-900 group-hover:text-[#008af8] transition-colors duration-300'>
                  {game.title}
                </h3>
              </div>

              <button
                type='button'
                aria-label={`Add ${game.title} to cart`}
                className='w-11 h-11 rounded-full bg-[#ee626b] group-hover:bg-[#008af8] text-white flex items-center justify-center shrink-0 transition-colors duration-300 cursor-pointer shadow'
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
  )
}