import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-[#0071f8] text-white rounded-t-[100px] md:rounded-t-[150px] pt-16 pb-20 mt-16 px-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-sm sm:text-base font-medium text-white leading-relaxed'>
          Copyright &copy; 2048 LUGX Gaming Company. All rights reserved.{' '}
          <a
            href='https://templatemo.com'
            target='_blank'
            rel='noreferrer'
            className='hover:underline font-semibold'
          >
            Design: TemplateMo
          </a>
        </p>
      </div>
    </footer>
  )
}