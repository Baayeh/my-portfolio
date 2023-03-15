import TextField from '@mui/material/TextField';
import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#11001d] p-4 mt-8 lg:flex justify-center items-center lg:p-14 lg:gap-16"
    >
      <section className="text-center my-4 lg:text-start">
        <h3 className="font-bold text-2xl">Get In Touch With Me</h3>
        <p className="my-2">
          I'm always interested in hearing about{' '}
          <span className="text-orange-500">new projects</span>, so if you'd
          like to chat please get in touch.
        </p>
        <div className="contact-info lg:mt-7">
          <div className="mb-6 lg:flex hidden items-center gap-5">
            <div className="bg-green-600 p-4 rounded">
              <FiPhoneCall className="text-2xl" />
            </div>
            <div>
              <h4 className="font-bold">Phone Number</h4>
              <p className="text-slate-300">(+233)54 809 1237</p>
            </div>
          </div>
          <div className="mb-6 lg:flex hidden items-center gap-5">
            <div className="bg-green-600 p-4 rounded">
              <TfiEmail className="text-2xl" />
            </div>
            <div>
              <h4 className="font-bold">Email Address</h4>
              <p className="text-slate-300">kabaayeh@gmail.com</p>
            </div>
          </div>

          <div className="connect">
            <p className="text-xl md:text-lg uppercase mt-2 text-orange-500 tracking-widest font-light">
              Online Profiles
            </p>
            <div className="socials flex justify-center lg:justify-start gap-6 mt-2">
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
      </section>

      <section className="mt-10">
        <form action="https://formsubmit.co/kabaayeh@gmail.com" method="POST">
          <div className="form-control mb-6 sm:w-[30rem] mx-auto">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 text-slate-900 rounded w-full text-lg focus:outline-none"
                placeholder="Full Name"
                required
              />
            </label>
          </div>
          <div className="form-control mb-6 sm:w-[30rem] mx-auto">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 text-slate-900 rounded w-full text-lg focus:outline-none"
                placeholder="Your email"
                required
              />
            </label>
          </div>
          <div className="form-control mb-6 sm:w-[30rem] mx-auto">
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                className="p-3 text-slate-900 rounded w-full text-lg focus:outline-none"
                placeholder="Write your message..."
                required
                rows="6"
              />
            </label>
          </div>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_subject" value="New Client"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_next" value="https://my-portfolio-xi-swart.vercel.app/thanks"></input>
          <div className="form-action mb-6 sm:w-[30rem] mx-auto">
            <button
              type="submit"
              className="block bg-green-500 w-full p-3 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
