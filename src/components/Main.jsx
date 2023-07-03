import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="grid grid-cols-12 max-w-[1400px] mx-auto">
      <div className="md:col-start-2 col-start-1 col-span-12 md:grid md:grid-cols-2 md:gap-8">
        {/* image */}
        <div className="col-span-1">
          <div className="relative flex items-center">
            <img className="w-full pl-0 md:pl-2" src="src/assets/propic.png" alt="picture" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-4/5">
              <div className="h-full md:border-l-4 md:border-red-700"></div>
            </div>
          </div>
        </div>
        {/* written content */}
        <div className="col-span-1 mt-8 md:mt-0 flex justify-center md:justify-start">
          <div className="max-w-[700px] mx-auto h-full flex flex-col justify-center items-start">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-600">
                Brandon Roberts.
              </h1>
              <h2 className="pt-4 text-2xl sm:text-3xl text-gray-500 font-semibold">
                I'm a{" "}
                <span className="text-gray-700">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Programmer",
                    2000,
                    "Veteran",
                    2000,
                    "Husband",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "5px",
                  }}
                  repeat={Infinity}
                />
                </span>
              </h2>
              <div className="flex justify-center md:justify-start pt-6 md:mx-0 mx-auto space-x-4">
                <a
                  href="https://www.linkedin.com/in/brandonroberts25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 hover:scale-125 transition-transform duration-300 ease-in-out shadow-xl"
                >
                  <FaLinkedinIn className="cursor-pointer" size={20} />
                </a>
                <a
                  href="https://www.facebook.com/brandon.roberts.96558/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 hover:scale-125 transition-transform duration-300 ease-in-out"
                >
                  <FaFacebookF className="cursor-pointer" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/off.brand.drake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 hover:scale-125 transition-transform duration-300 ease-in-out"
                >
                  <FaInstagram className="cursor-pointer" size={20} />
                </a>
              </div>
              <a className="border border-4 border-gray-400 p-3 mt-6 text-red-700 uppercase hover:shadow-xl font-bold flex justify-center md:mx-0 mx-auto" href="#projects">View Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;