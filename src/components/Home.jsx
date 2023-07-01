import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-14 md:pt-40"
      >
        {/* max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row */}
        <div className=" container mx-auto md:px-60 px-4 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="flex flex-col justify-center h-full mt-14 lg:mt-6 w-full">
              <h1 className="text-4xl sm:text-3xl font-bold text-white inline-flex gap-2">This is <span className="text-blue-300">Rita</span>,</h1>
              <h2 className="text-4xl sm:text-4xl font-bold text-white w-full">
                I'm a
                <TypeAnimation
                  sequence={[
                    'Mern Stack Developer',
                    2000,
                    'Front-End Developer',
                    2000,
                  ]}
                  speed={50}
                  className="text-accent ml-4"
                  wrapper="span"
                  repeat={Infinity}
                />
              </h2>
              <p className="text-gray-500 py-4 max-w-md">
                I have 8 years of experience building and desgining software.
                Currently, I love to work on web application using technologies like
                React, Tailwind, Next JS and GraphQL.
              </p>

              <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <a
                  href="/resume.pdf"
                  download='resume'
                  className="flex justify-between items-center w-full text-white"

                  target="_blank"
                  rel="noreferrer"
                >
                  Download Cv
                </a>
                <span className="group-hover:rotate-90 duration-300">
                  <MdDownload size={20} className="ml-1" />
                </span>
              </div>
            </div>

            <div className="lg:ml-48 w-full">
              <img
                src={HeroImage}
                alt="me"
                style={{ borderRadius: '0 200px 200px 200px' }} className="w-[200px] mt-12 mb-6 lg:mb-0 mx-auto md:mx-0 lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Home;
