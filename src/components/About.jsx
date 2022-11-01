import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-slate-900 md:bg-transparent px-4 py-14 md:p-14 lg:px-36 md:my-8"
      >
        <h3 className="md:text-center lg:text-start lg:mb-14 mb-4 text-5xl lg:text-7xl font-bold before:w-36 lg:before:w-52 before:h-1 before:bg-orange-600 relative before:absolute before:bottom-0">
          About me
        </h3>
        <div className="md:flex gap-8 items-center">
          <div className="profile-img hidden md:block rounded-full overflow-hidden">
            <img src="/assets/profile_pic.jpg" alt="Profile Image" />
          </div>
          <div className="about-content">
            <p className="mt-10 md:mt-8 text-lg lg:text-3xl text-slate-400">
              Full-Stack Developer
            </p>
            <p className="stack text-green-500 my-1 lg:text-xl">
              <span>Javascript </span>|<span> React & Redux </span>|
              <span> Ruby </span>|<span> Ruby on Rails </span>|
              <span> HTML/CSS </span>
            </p>
            <p className="lg:text-lg">
              I'm a software developer! I can help you build a product , feature
              or website Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hesitate to contact me.
            </p>

            <div className="connect">
              <p className="text-xl md:text-lg uppercase mt-5 text-orange-400 tracking-widest font-extralight">
                Let's Connect
              </p>
              <div className="socials flex gap-4 mt-2">
                <a href="https://github.com/Baayeh" className="text-2xl">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kabaayeh"
                  className="text-2xl"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/Cest_Baayeh" className="text-2xl">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://web.facebook.com/kwasiantwi.baayeh"
                  className="text-2xl"
                >
                  <i className="fa-brands fa-facebook"></i>
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
