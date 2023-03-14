import React from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import About from '../components/about/About';

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
