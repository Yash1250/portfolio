/** @format */

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="flex flex-col px-4 justify-center max-w-screen-lg mx-auto pt-28 sm:pt-24 md:pt-0">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://formspree.io/f/xgegbylo"
            method="POST"
            className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

            <button className="text-white bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
