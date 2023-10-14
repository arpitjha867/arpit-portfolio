import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import leetcodeLogo from "../assets/leetcode.svg";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { RESUME_LINK } from "../Constants/GlobalConstants";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center bg-[#0a192f] px-4 text-gray-300">
      <Link
        to="home"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer logoImg flex flex-row gap-1 font-extrabold text-4xl "
      >
        <p className="text-[#ffde59]">&lt;</p> <p>Arpit</p>{" "}
        <p className="text-[#5e17eb]">Jha</p>{" "}
        <p className="text-[#ffde59]">/&gt;</p>
      </Link>
      {/* Menu */}
      <div className="menuOptions  hidden md:flex">
        <ul className="flex flex-row gap-7 font-bold text-xl">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={toggleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      {nav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <ul>
            <li className="py-6 text-4xl">
              <Link
                onClick={toggleNav}
                to="home"
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={toggleNav}
                to="about"
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={toggleNav}
                to="skills"
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={toggleNav}
                to="projects"
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={toggleNav}
                to="contact"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[180px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A63BC]">
            <a
              className="flex justify-evenly items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/arpit-jha-385ba4190/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161B22]">
            <a
              className="flex justify-evenly items-center w-full text-gray-300"
              href="https://github.com/arpitjha867"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#828282]">
            <a
              className="flex justify-evenly items-center w-full text-black"
              href="https://leetcode.com/arpitjha867/"
              target="_blank"
            >
              Leetcode{" "}
              <img
                src={leetcodeLogo}
                alt="leetcode logo"
                className="w-[30px] h-[30px]"
              />
            </a>
          </li>
          <li className="w-[180px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-evenly items-center w-full text-gray-300"
              href="mailto:arpitjha867@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-evenly items-center w-full text-gray-300"
              href={RESUME_LINK}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
