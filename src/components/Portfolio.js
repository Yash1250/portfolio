/** @format */

import React from "react";
import AnalogClock from "../assets/portfolio/AnalogClock.png";
import CryspyBytes from "../assets/portfolio/CryspyBytes.png";
import MealSearcher from "../assets/portfolio/MealSearcher.png";
import SongVilla from "../assets/portfolio/SongVilla.png";
import TicTacToe from "../assets/portfolio/TicTacToe.png";
import ToDoList from "../assets/portfolio/ToDoList.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: CryspyBytes,
      code: "https://github.com/Yash1250/crispy-bytes",
      live: "https://crispy-bytes.netlify.app/",
      title: "Cryspy Bytes",
    },
    {
      id: 2,
      src: MealSearcher,
      code: "https://github.com/Yash1250/meal-searcher",
      live: "https://mealsearcher-yash.netlify.app/",
      title: "Meal Searcher",
    },
    {
      id: 3,
      src: SongVilla,
      code: "https://github.com/Yash1250/SongVilla",
      live: "https://github.com/Yash1250/SongVilla",
      title: "SongVilla",
    },
    {
      id: 4,
      src: TicTacToe,
      code: "https://github.com/Yash1250/Tic-Tac-Toe",
      live: "https://tictactoe-yash.netlify.app/",
      title: "Tic-Tac-Toe",
    },
    {
      id: 5,
      src: ToDoList,
      code: "https://github.com/Yash1250/To-Do-List",
      live: "https://todolistbyyashmehta.netlify.app/",
      title: "To-Do List",
    },
    {
      id: 6,
      src: AnalogClock,
      code: "https://github.com/Yash1250/analog-clock",
      live: "https://analog-digital-clock-by-yash.netlify.app/",
      title: "Analog Clock",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-gray-800 w-full md:h-screen text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </h2>
          <h3 className="py-6">Check out some of my projects</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, live, title }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt="port"
                  className="rounded-md hover:scale-105 duration-300"
                />
                <div className="flex flex-col items-center">
                  <h2 className="mx-auto mt-6 font-bold text-xl">{title}</h2>
                  <div className="flex justify-center items-center">
                    <a href={live} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-2 m-2 hover:scale-105 duration-300">
                        Live
                      </button>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="w-1/2 px-6 py-2 m-2 hover:scale-105 duration-300">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
