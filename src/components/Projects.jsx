import React from "react";
import travel from "../assets/travel.png";
import isstracker from "../assets/iss-tracker.png";
import news from "../assets/news.png";
import portfolio from "../assets/portfolio.png";
import zomato from "../assets/zomato.png";
const ProjectsData = [
  {
    id: 1,
    name: "Zomato clone",
    imgSrc: zomato,
    demoUrl: "https://tomat0.netlify.app/order_online",
    codeUrl: "https://github.com/arpitjha867/Zomato_Clone",
  },
  {
    id: 2,
    name: "Travel Website",
    imgSrc: travel,
    demoUrl: "https://arpitjha867.github.io/Travel-Website-React-Tailwind/",
    codeUrl: "https://github.com/arpitjha867/Travel-Website-React-Tailwind",
  },
  {
    id: 4,
    name: "Newsify Webapp",
    imgSrc: news,
    demoUrl:
      "https://drive.google.com/file/d/1Ot9SsAWFaYvlAzBpJdhYDI7pBwjX6TwR/view?usp=drive_link",
    codeUrl: "https://github.com/arpitjha867/Newsify",
  },
  {
    id: 5,
    name: "Portfolio Website",
    imgSrc: portfolio,
    demoUrl: "/",
    codeUrl: "https://github.com/arpitjha867/arpit-portfolio",
  },
];
export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#5E17EB]">
            Projects
          </p>
          <p className="py-6">// Check out some of my projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ProjectsData.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.imgSrc})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={item.demoUrl} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={item.codeUrl} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
}
