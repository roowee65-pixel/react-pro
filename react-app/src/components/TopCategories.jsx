import React from 'react'

export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: 'Action',
      image: '/images/react11.png',
    },
    {
      id: 2,
      name: 'Action',
      image: '/images/react12.png',
    },
    {
      id: 3,
      name: 'Action',
      image: '/images/react13.png',
    },
    {
      id: 4,
      name: 'Action',
      image: '/images/react14.png',
    },
    {
      id: 5,
      name: 'Action',
      image: '/images/react16.png',
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-6 py-16'>
      {/* عنوان السيكشن */}
      <div className='text-center max-w-xl mx-auto mb-12'>
        <span className='text-xs font-bold uppercase tracking-widest text-[#ee626b]'>
          CATEGORIES
        </span>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-1'>
          Top Categories
        </h2>
      </div>

      {/* شبكة 5 كروت التصنيفات */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className='bg-[#0071f8] rounded-[25px] overflow-hidden group cursor-pointer transition-all duration-300'
          >
            {/* اسم الفئة في الأعلى */}
            <div className='py-4 px-3 text-center'>
              <h3 className='text-lg font-bold text-white'>{cat.name}</h3>
            </div>

            {/* صورة الفئة في الأسفل */}
            <div className='h-48 overflow-hidden rounded-[25px] bg-blue-600'>
              <img
                src={cat.image}
                alt={cat.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}