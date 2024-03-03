import React from "react";
import { GradientText } from "@/components/general/NavBar";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Let's Grow
            <GradientText
              text=" Together"
              gradient="-webkit-linear-gradient(45deg, #338cf5, #4fd1c5)"
              classes="text-6xl font-bold"
            />
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Empower. Collaborate. Elevate: Uniting Minds, Igniting Futures.
          </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <a
            href="#"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
          >
            JUMP IN
            <svg
              className="flex-shrink-0 size-4"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            Tied Up Universities with Us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">
            <CollegeLogo
              src="https://jyothyit.ac.in/wp-content/themes/jyothi/images/logo.png"
              alt="College 1 Logo"
            />
            <CollegeLogo
              src="https://www.iiits.ac.in/iiits-content/uploads/2020/04/logo1.png"
              alt="College 2 Logo"
            />
            <CollegeLogo
              src="https://rvpucollege.edu.in/wp-content/uploads/2022/11/Logo-2-300x121.png"
              alt="College 4 Logo"
            />
            <CollegeLogo
              src="https://vidyaniketan.edu.in/images/Vidyaniketan_Public_School.png?v=ats-cms.1.0"
              alt="College 5 Logo"
            />
            <CollegeLogo
              src="https://www.ryangroup.org/public/images/front_end/SiteSetting/ryan-group-logo_1628517995.png"
              alt="College 6 Logo"
            />
            {/* Add more colleges as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

const CollegeLogo = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
      <Image src={src} alt={alt} width={100} height={100} />
    </div>
  );
};

export default HeroPage;
