import React from "react";

const skills = [
  {
    name: "JavaScript",
    img: require("../assets/javascript.png"),
  },
  {
    name: "React.js",
    img: require("../assets/react.png"),
  },
  {
    name: "Redux",
    img: require("../assets/redux.png"),
  },
  {
    name: "Node.js",
    img: require("../assets/nodejs.png"),
  },
  {
    name: "Express.js",
    img: require("../assets/express.png"),
  },
  {
    name: "MongoDB",
    img: require("../assets/mongodb.png"),
  },
  {
    name: "PHP",
    img: require("../assets/php.png"),
  },
  {
    name: "Tailwind",
    img: require("../assets/tailwind.png"),
  },
  {
    name: "HTML",
    img: require("../assets/html.png"),
  },
  {
    name: "CSS",
    img: require("../assets/css.png"),
  },
  {
    name: "GitHub",
    img: require("../assets/github.png"),
  },
];

const SkillTab = ({ name, img }) => {
  return (
    <>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={img} alt="html" />
        <p className="my-4">{name}</p>
      </div>
    </>
  );
};

export default function Skills() {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#5E17EB]">
            Skills
          </p>
          <p className="py-4">/* Technologies I've worked with */</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skil) => (
            <SkillTab {...skil} />
          ))}
        </div>
      </div>
    </div>
  );
}
