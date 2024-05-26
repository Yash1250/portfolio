/** @format */

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Links = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/yash-mehta-ym/",
      children: (
        <>
          Linkedin
          <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://github.com/Yash1250",
      children: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "https://leetcode.com/u/Yashmehta11/",
      children: (
        <>
          LeetCode
          <SiLeetcode size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "mailto:mehtayashkuleri503@gmail.com",
      children: (
        <>
          Mail
          <IoMail size={30} />
        </>
      ),
    },
    {
      id: 5,
      href: "/resume.pdf",
      children: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, children, style, download, href }) => {
          return (
            <li
              key={id}
              className={
                "flex items-center justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[0] hover:rounded-r-md duration-300" +
                " " +
                style
              }>
              <a
                href={href}
                download={download}
                className="flex items-center justify-between text-white w-full"
                target="_blank"
                rel="noreferrer">
                {children}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
