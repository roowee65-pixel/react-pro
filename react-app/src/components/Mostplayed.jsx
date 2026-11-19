import React from 'react'
import img2 from '../assets/react2.png'
import img3 from '../assets/react3.png'
import img4 from '../assets/react4.png'
import img5 from '../assets/react5.png'
import img6 from '../assets/react6.png'
import img7 from '../assets/react7.png'

export default function MostPlayed({ onViewAll = () => {} }) {
  const mostPlayedGames = [
    { id: 1, title: 'Assassin Creed', category: 'Adventure', image: img2 },
    { id: 2, title: 'Assassin Creed', category: 'Adventure', image: img3 },
    { id: 3, title: 'Assassin Creed', category: 'Adventure', image: img4 },
    { id: 4, title: 'Assassin Creed', category: 'Adventure', image: img5 },
    { id: 5, title: 'Assassin Creed', category: 'Adventure', image: img6 },
    { id: 6, title: 'Assassin Creed', category: 'Adventure', image: img7 },
  ]

  return (
    <section className='w-full bg-[#f7f7f7] rounded-[90px] md:rounded-[150px] py-20 my-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4'>
          <div>
            <span className='text-xs font-bold uppercase tracking-widest text-[#ee626b]'>
              TOP GAMES
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-1'>
              Most Played
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

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
          {mostPlayedGames.map((game) => (
            <div
              key={game.id}
              className='bg-white rounded-[25px] overflow-hidden group transition-all duration-300 flex flex-col justify-between pb-5'
            >
              <div>
                <div className='h-44 overflow-hidden rounded-[25px] bg-gray-200'>
                  <img
                    src={game.image}
                    alt={game.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='px-4 pt-4 pb-3 text-center'>
                  <span className='block text-xs text-gray-400 mb-1'>
                    {game.category}
                  </span>
                  <h3 className='text-base font-bold text-gray-900 group-hover:text-[#008af8] transition-colors duration-300'>
                    {game.title}
                  </h3>
                </div>
              </div>

              <div className='px-4 flex justify-center'>
                <button
                  type='button'
                  onClick={onViewAll}
                  className='bg-[#ee626b] group-hover:bg-[#008af8] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full cursor-pointer transition-colors duration-300'
                >
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}