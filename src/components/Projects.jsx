import React from "react";
import portfolio from "../assets/portfolio.png";
import ecommerce from "../assets/ecommerce.png"
import chatKaro from "../assets/chatkaro.png"
import cli from "../assets/cli.png"
const ProjectsData = [
  {
    id: 1,
    name: "Express Ecommerce App",
    imgSrc: ecommerce,
    demoUrl: "https://thankful-frog-bandanna.cyclic.app",
    codeUrl: "https://github.com/arpitjha867/express-ecommerce-store",
  },
  {
    id: 1,
    name: "ChatKaro App",
    imgSrc: chatKaro,
    demoUrl: "https://chatkaro-v1-0-0.onrender.com/",
    codeUrl: "https://github.com/arpitjha867/ChatKaro-v1.1.0",
  },  {
    id: 1,
    name: "Text File Compress/Decompress CLI application",
    imgSrc: cli,
    demoUrl: "https://github.com/arpitjha867/TEXT_FILE_COMPRESSION_CLI_APPLICATION",
    codeUrl: "https://github.com/arpitjha867/TEXT_FILE_COMPRESSION_CLI_APPLICATION",
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
