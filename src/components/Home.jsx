import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
export default function Home() {
  return (
    <div  name="home" className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FFDE59]'>Hi my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arpit Jha</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer,</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Frontend Developer specializing in building &#40; and occasionally designing &#41; exceptional digital experiences.</p>
        <div>
            <button className='group hover:bg-[#5E17EB]  hover:border-[#5e17eb] duration-300 flex flex-row text-white border-2 px-6 py-3 my-2 items-center'>
                    <Link  to="projects"  smooth={true} offset={50} duration={500} >
                        View Work
                    </Link>
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/> </span>
            </button>
            <button className='group hover:bg-[#5E17EB]  hover:border-[#5e17eb] duration-300 flex flex-row text-white border-2 px-6 py-3 my-2 items-center'>
                <a href="https://drive.google.com/file/d/17feV_VyMASoczeYyaKB1GvMzaColtI_T/view?usp=sharing" target='_blank'>Resume</a>
            </button>
        </div>
      </div>
    </div>
  )
}
