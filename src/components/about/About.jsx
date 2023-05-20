import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-[#11001d] px-4 py-14 md:p-14 lg:px-36 md:my-8"
      >
        <h3 className="md:text-center lg:text-start lg:mb-14 mb-4 text-5xl lg:text-7xl font-bold before:w-36 lg:before:w-52 before:h-1 before:bg-orange-600 relative before:absolute before:bottom-0 xl:mt-[5rem]">
          About me
        </h3>
        <div className="md:flex gap-8 items-center">
          <div className="profile-img hidden md:block rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678549033/profile_pic_e8y5rh.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="about-content">
            <p className="mt-10 md:mt-8 text-lg lg:text-3xl text-slate-300">
              Full-Stack Developer
            </p>
            <p className="stack text-green-500 my-1 lg:text-xl">
              <span>Javascript </span>|<span> React & Redux </span>|
              <span> Ruby </span>|<span> Ruby on Rails </span>|
              <span> HTML/CSS </span>
            </p>
            <p className="lg:text-lg">
              My name is Kwasi Baayeh and I'm a software developer! I can help
              you build a product, feature or website. Look through some of my
              work and experience! If you like what you see and have a project
              you need coded, don’t hesitate to contact me.
            </p>

            <div className="connect">
              <p className="text-xl md:text-lg uppercase mt-2 text-orange-500 tracking-widest font-light">
                Let's Connect
              </p>
              <div className="socials flex gap-4 mt-2">
                <a
                  href="https://github.com/Baayeh"
                  target="_blank"
                  className="text-2xl"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kabaayeh"
                  className="text-2xl"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://twitter.com/Cest_Baayeh"
                  className="text-2xl"
                  target="_blank"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://web.facebook.com/kwasiantwi.baayeh"
                  className="text-2xl"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
