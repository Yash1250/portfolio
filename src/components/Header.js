/** @format */

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "home",
    },
    {
      id: 2,
      title: "About",
      link: "about",
    },
    {
      id: 3,
      title: "Portfolio",
      link: "portfolio",
    },
    {
      id: 4,
      title: "Skills",
      link: "skills",
    },
    {
      id: 5,
      title: "Contact",
      link: "contact",
    },
    {
      id: 6,
      title: "Resume",
      link: "/resume.pdf",
      download: true,
    },
  ];
  const navHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex bg-gradient-to-r from-zinc-900 to-slate-800 text-white items-center h-20 px-8 justify-between fixed w-[100vw] z-10">
      <h1 className="text-5xl font-yashName">Yash.</h1>
      <ul className="md:flex gap-6 hidden">
        {navLinks.map(({ title, id, link, download }) => (
          <li
            key={id}
            className="text-gray-500 text-xl font-medium cursor-pointer hover:text-white hover:scale-110 duration-200">
            {download ? (
              <a href={link} download={download}>
                {title}
              </a>
            ) : (
              <Link to={link} smooth={true} duration={500}>
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div onClick={navHandler} className="md:hidden z-20">
        {isNavOpen ? (
          <FaTimes className="w-8 h-8 cursor-pointer text-gray-500 hover:text-white duration-200 " />
        ) : (
          <FaBars className="w-8 h-8 cursor-pointer text-gray-500 hover:text-white duration-200 z-20" />
        )}
      </div>
      {isNavOpen && (
        <div className="absolute w-full h-screen bg-gradient-to-b from-zinc-900 to-slate-800 top-0 left-0 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map(({ title, id, link, download }) => (
              <li
                key={id}
                className="text-gray-500 text-4xl font-medium cursor-pointer hover:text-white hover:scale-110 duration-200">
                {download ? (
                  <a href={link} download={download}>
                    {title}
                  </a>
                ) : (
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    onClick={navHandler}>
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
