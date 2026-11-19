import React from 'react'

export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: 'FREE STORAGE',
     
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          
        </svg>
      ),
    },
    {
      id: 2,
      title: 'USER MORE',
    
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
         
        </svg>
      ),
    },
    {
      id: 3,
      title: 'REPLY READY',
    
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
        
        </svg>
      ),
    },
    {
      id: 4,
      title: 'EASY LAYOUT',
      
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M4 6h16v12H4zm2 2v8h12V8H6zm2 2h8v2H8zm0 4h5v2H8z"/>
        </svg>
      ),
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-6 -mt-16 mb-20 relative z-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {featuresList.map((item) => (
          <div
            key={item.id}
            className='bg-[#f7f7f7] rounded-[25px] p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group'
          >
           
            <div className='w-24 h-24 bg-[#0071f8] group-hover:bg-[#ee626b] rounded-full flex items-center justify-center mb-6 shadow-md transition-colors duration-300'>
              {item.icon}
            </div>
            
         
            <h3 className='text-base font-extrabold uppercase text-gray-900 tracking-wider group-hover:text-[#0071f8] transition-colors duration-300'>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}