import React, { useState } from 'react'
import logo from '/assets/logo_white.png'

const Header = () => {
  const [display, setDisplay] = useState(true);

  const displayMenu = () => {
    display === false ? setDisplay(true) : setDisplay(false)
  }

  const checkDisplay = () => {
    display === false ? setDisplay(true) : '';
  }

  const downloadPdf = () => {
    const url = '/assets/KWASI_ANTWI_BAAYEH.pdf';
    window.open(url, '_blank')
  }

  return (
    <>
      <header className="h-screen bg-header-bg bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="header-content backdrop-blur-sm h-full relative text-white">
          <div className="nav-content md:flex justify-between items-start">
            <nav className='p-4 md:px-14 lg:px-36 text-white flex justify-between items-center'>
              <a href="/">
                <img src={logo} loading="lazy" alt="Portfolio Image" className='w-32' />
              </a>
              <button type="button" className={display ? 'hamburger hamburger--spin z-10 md:hidden' : 'hamburger hamburger--spin z-10 is-active'} onClick={displayMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </nav>
            <ul className={display ? 'hidden md:flex gap-10 text-white items-center pt-4 pr-14' : 'flex absolute w-full box-border h-full top-0 text-white flex-col items-center justify-center text-2xl gap-10 bg-slate-900 animate__animated animate__fadeIn animate__faster'}>
                <li className="nav-item uppercase z-0">
                  <a href="#about" onClick={checkDisplay}>About</a>
                </li>
                <li className="nav-item uppercase">
                  <a href="#projects" onClick={checkDisplay}>Works</a>
                </li>
                <li className="nav-item uppercase">
                  <a href="#contact" onClick={checkDisplay}>Contact</a>
                </li>
                <li className="nav-item uppercase">
                  <button type='button' className='bg-green-600 p-3 rounded animate__animated animate__pulse animate__infinite animate__fast' id='downloadBtn' value='download' onClick={downloadPdf}>Get My Resume</button>
                </li>
              </ul>
          </div>

          <section className="header-body px-4 md:pl-14 lg:pl-36 mt-16 md:mt-28 md:max-w-5xl ">
            <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold'>I'm <span className='text-orange-500'>Steps</span>👋</h2>
            <h3 className='text-5xl md:text-7xl lg:text-8xl font-bold'>Nice to meet you!</h3>
            <p className='mt-6 font-light text-lg'>I'm a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>

            <div className="header-actions mt-6 flex gap-6">
              <a href="#about" type="button" className='uppercase bg-orange-800 py-3 px-4 rounded tracking-wide'>Who is Steps?</a>
              <a href="#contact" type="button" className='uppercase border py-3 px-6 rounded'>Let's talk</a>
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default Header
