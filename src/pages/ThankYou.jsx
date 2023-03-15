import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ThankYou = () => {
  return (
    <section className="flex flex-col justify-center md:justify-start md:mt-[10rem] items-center w-full h-screen">
      <div className="card">
        <div className="thanks-img w-[14rem] mx-auto">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678875697/undraw_appreciation_5ugl_hncd8o.svg"
            alt="Appreciation"
          />
        </div>
        <div className="thanks-body mt-8 px-10">
          <h1 className="text-center text-3xl font-bold">Thank you!</h1>
          <p className="text-center text-xl">
            Your message has been received. <br className="hidden md:block" /> I will get in touch with you
            shortly.
          </p>
        </div>
        <div
          className="thanks-action text-center
        mt-6 w-[12rem] mx-auto"
        >
          <a href="/" type="button" className="bg-[#96BF01] p-3 rounded-full flex justify-center items-center gap-3">
            <span>
              <FaLongArrowAltLeft />
            </span>
            <span className="uppercase font-bold">Back to Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
