import React, { useRef, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import styles from './Header.module.css';

const Header = () => {
  const [display, setDisplay] = useState(true);
  const navRef = useRef(null);
  const [textColor, setTextColor] = useState('');

  const displayMenu = () => {
    display === false ? setDisplay(true) : setDisplay(false);
  };

  const checkDisplay = () => {
    display === false ? setDisplay(true) : '';
  };

  const downloadPdf = () => {
    const url = '/assets/Resume.pdf';
    fetch(url).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      });
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 50) {
      navRef.current?.classList.add('bg-white');
      setTextColor('text-[#11001d]');
    } else {
      navRef.current?.classList.remove('bg-white');
      setTextColor('');
    }
  };

  return (
    <header className="h-screen">
      <div className="w-full h-full relative">
        <div
          ref={navRef}
          className="md:p-5 nav-content md:flex justify-between items-start fixed z-10 top-0 w-full"
        >
          <nav className="p-3 md:px-14 lg:px-36 text-white flex justify-between items-center transition-all duration-300 ease-in-out">
            <a className={`${textColor} ${styles.logo}`} href="/">
              steps
            </a>
            <button
              type="button"
              className={
                display
                  ? 'hamburger hamburger--spin z-10 md:hidden'
                  : 'hamburger hamburger--spin z-10 is-active'
              }
              onClick={displayMenu}
            >
              <span className="hamburger-box">
                <span
                  className={`hamburger-inner ${
                    textColor === ''
                      ? ''
                      : 'bg-[#11001d] before:bg-[#11001d] after:bg-[#11001d]'
                  }`}
                ></span>
              </span>
            </button>
          </nav>
          <ul
            className={
              display
                ? `hidden md:flex gap-10 items-center pt-4 pr-[8rem] ${
                    textColor === '' ? 'text-white' : textColor
                  }`
                : 'flex w-full box-border h-screen flex-col items-center justify-start text-2xl gap-10 bg-slate-900 animate__animated animate__fadeIn animate__faster'
            }
          >
            <li className="nav-item uppercase z-0">
              <a href="#about" onClick={checkDisplay}>
                About
              </a>
            </li>
            <li className="nav-item uppercase">
              <a href="#projects" onClick={checkDisplay}>
                Works
              </a>
            </li>
            <li className="nav-item uppercase">
              <a href="#contact" onClick={checkDisplay}>
                Contact
              </a>
            </li>
            <li className="nav-item uppercase">
              <button
                type="button"
                className="bg-green-600 text-white p-3 rounded animate__animated animate__pulse animate__infinite animate__fast xl:w-[10rem]"
                id="downloadBtn"
                value="download"
                onClick={downloadPdf}
              >
                Get My Resume
              </button>
            </li>
          </ul>
        </div>

        <section className="header-body pt-[5rem] md:pt-[8rem] px-5 sm:px-0">
          <section id="hero-header" className="mt-1 sm:mt-1">
            <p className="text-xl font-bold sm:hidden">I'm a</p>

            <h1
              className={`uppercase sm:mt-10 sm:flex justify-center sm:gap-4 ${styles.header_title} ${styles['bounce-in-top']}`}
            >
              <div className={`sm:hidden ${styles.typewriter}`}>
                <Typewriter
                  options={{
                    strings: ['Software', 'Frontend'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <span className={`hidden sm:block ${styles.software}`}>
                Software{' '}
              </span>{' '}
              Developer
            </h1>
            <div className={styles.header_subtext}>
              <p className="md:text-left md:w-[20rem] lg:w-[20rem]">
                I possess the necessary skills to assist you in constructing a
                high-quality product, feature, or website. With a focus on user
                experience.{' '}
                <span className="md:hidden">
                  I am adept at designing and building applications that
                  effectively meet the needs of your target audience. Let me
                  utilize my expertise to help you develop a successful and
                  user-friendly solution.
                </span>
              </p>
              <p className="hidden md:block md:w-[20rem] lg:w-[25rem]">
                I am adept at designing and building applications that
                effectively meet the needs of your target audience. Let me
                utilize my expertise to help you develop a successful and
                user-friendly solution.
              </p>
              <div className={` ${styles.get_in_touch}`}>
                <a href="#">Get in touch</a>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </div>
              <div className="header-actions sm:hidden mt-6 flex gap-6">
                <a
                  href="#about"
                  type="button"
                  className="uppercase bg-orange-800 py-3 px-4 rounded tracking-wide"
                >
                  Who is Steps?
                </a>
                <a
                  href="#contact"
                  type="button"
                  className="uppercase border py-3 px-6 rounded"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </section>

          <div className={`${styles.header_bg} ${styles['fade-in']}`}>
            <div className={styles.header_overlay}></div>
            <div className={styles.header_img}>
              <img
                src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678733145/IMG_20220213_101435-removebg-preview_jqbhcj.png"
                alt=""
              />
            </div>
            <div
              className={`${styles.header_first_img} ${styles['roll-in-left']}`}
            >
              <img
                src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678782717/DESIGN_STRATEGY-removebg-preview_1_hpa6pc.png"
                alt=""
                className="w-[7rem] xl:w-[10rem]"
              />
            </div>
            <div className={styles.header_second_img}>
              <img
                src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678785646/DESIGN_STRATEGY_1_-removebg-preview_1_rgih0f.png"
                alt=""
                className="w-[12rem] xl:w-[20rem]"
              />
            </div>
            <div
              className={`${styles['swing-in-left-fwd']} ${styles.header_third_img}`}
            >
              <h3>Optimization &</h3>
              <h3>Scalability</h3>
            </div>
            <div className={styles.header_fourth_img}>
              <img
                src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678798012/DESIGN_STRATEGY_3_-removebg-preview_1_hefxe8.png"
                alt="Teamwork"
                className="w-[5rem] xl:w-[10rem]"
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
