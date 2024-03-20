import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "Rhea Bhatia",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "Diya Waryani",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Rujal Bangdiwala",
      style: "shadow-yellow-500",
    },
    
  ];

  return (
    <div
      name="experience"
      className="bg-[rgb(247,255,230)] w-full h-screen flex flex-col justify-center items-center md:items-start p-8 md:pt-25 "
    >
      <div className="max-w-screen-lg mx-auto w-full text-[rgb(71,106,43)] text-center md:text-left pt-20  mt-15 md:mt-20 ">
        <div className=" md:pt-20 md:mt-10">
        <p className="text-6xl font-bold p-2 inline text-center">
            Our Team
        </p>

        
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0 pt-18 mb-14 md:mb-10">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} mb-4`}
            >
              <img src={src} alt="" className="w-24 mx-auto" /> {/* Adjusted width */}
              <p className="mt-4 text-lg font-semibold">{title}</p> {/* Adjusted font size */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
