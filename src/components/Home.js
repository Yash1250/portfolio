/** @format */

import React from "react";
import HeroImage from "../assets/hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black  to-gray-800 w-full h-screen text-white">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-4xl sm:text-7xl font-bold">
            I'm a Front End Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a motivated front-end web developer with a strong foundation in
            ReactJS, JavaScript, CSS, HTML, Tailwind CSS, and Redux Toolkit. I
            bring fresh perspectives and a willingness to learn and adapt
            quickly.{" "}
          </p>

          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group w-fit px-6 py-3 flex items-center justify-center bg-yellow-400 rounded-md cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/3 md:w-[30rem] mx-auto">
          <img src={HeroImage} className="rounded-2xl w-full" alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
