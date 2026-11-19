import React, { useState } from 'react'

export default function NewsletterBanner({ onShopNow = () => {} }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='relative flex flex-col lg:flex-row items-center justify-center'>
      
        <div className='w-full lg:w-[46%] h-[340px] sm:h-[440px] rounded-[25px] overflow-hidden bg-gray-200 shadow-md'>
          <img
            src='/images/react17.png'
            alt='LUGX Featured Game'
            className='w-full h-full object-cover'
          />
        </div>

        
        <div className='w-full lg:w-[35%] lg:absolute lg:left-0 bg-[#f7f7f7] rounded-[25px] p-7 sm:p-10 shadow-sm mt-6 lg:mt-0 z-10'>
          <span className='block text-xs font-bold uppercase tracking-widest text-[#ee626b] mb-3'>
            OUR SHOP
          </span>

          <h2 className='text-2xl sm:text-[28px] font-bold text-gray-900 leading-snug mb-4'>
            Go Pre-Order <span className='text-[#0071f8]'>Buy</span> &amp; Get{' '}
            <span className='text-[#0071f8]'>Best Prices</span> For You!
          </h2>

          <p className='text-sm text-gray-500 leading-relaxed mb-6'>
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>

          <button
            type='button'
            onClick={onShopNow}
            className='bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full cursor-pointer transition-colors duration-300'
          >
            SHOP NOW
          </button>
        </div>

       
        <div className='w-full lg:w-[35%] lg:absolute lg:right-0 bg-[#f7f7f7] rounded-[25px] p-7 sm:p-10 shadow-sm mt-6 lg:mt-0 z-10'>
          <span className='block text-xs font-bold uppercase tracking-widest text-[#ee626b] mb-3'>
            NEWSLETTER
          </span>

          <h2 className='text-2xl sm:text-[28px] font-bold text-gray-900 leading-snug mb-6'>
            Get Up To <span className='text-[#0071f8]'>$100 off</span> Just
            Buy <span className='text-[#0071f8]'>Subscribe</span> Newsletter!
          </h2>

          <form
            onSubmit={handleSubmit}
            className='bg-white rounded-full p-1.5 flex items-center shadow-sm gap-1'
          >
            <input
              type='email'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (subscribed) setSubscribed(false)
              }}
              placeholder='Your email...'
              className='min-w-0 flex-1 bg-transparent text-gray-700 placeholder-gray-400 text-sm px-4 py-2.5 focus:outline-none'
            />

            <button
              type='submit'
              className='bg-[#ee626b] hover:bg-[#0071f8] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-full shrink-0 cursor-pointer transition-colors duration-300'
            >
              SUBSCRIBE NOW
            </button>
          </form>

          {subscribed && (
            <p className='text-xs font-semibold text-[#0071f8] mt-3'>
              Subscribed successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}