import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='p-4 md:py-12 md:px-14 lg:px-36 mt-8'>
      <h3 className='text-center p-4 text-4xl lg:text-7xl md:text-center lg:text-start font-bold leading-normal'>
      I'm always interested in hearing about <span className='text-orange-500'>new projects</span>, so if you'd like to chat please get in touch.
      </h3>

      <div className="bg-slate-900 p-5 rounded contact-info mt-5 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-center lg:justify-around lg:gap-14">
        <p className='text-xl font-semibold flex items-center gap-5 text-slate-400'>
          <span className='text-green-500'>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          </span>
          <span>(+233) 54 809 1237</span>
        </p>
        <a href="https://wa.me/233548091237" target='_blank' className='text-xl flex items-center gap-5 font-semibold text-slate-400'>
          <span><i className="fa-brands fa-whatsapp text-2xl text-green-500"></i></span>
          <span>Whatsapp</span>
        </a>
        <a href='mailto:kabaayeh@gmail.com?subject=New Project Available' className='text-xl flex items-center gap-5 text-slate-400 font-semibold'>
          <span className='text-green-500'><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></span>
          <span>kabaayeh@gmail.com</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
