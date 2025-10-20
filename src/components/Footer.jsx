import React from 'react'
import {FaLinkedin ,FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full h-[200px] bg-[#0b1825] p-4 flex flex-col justify-center items-center'>
        <div className=' flex flex-row gap-1 font-extrabold text-xl'>
        <p className='text-[#ffde59]'>&lt;</p> <p className='text-gray-300'>Arpit</p> <p className='text-[#5e17eb]'>Jha</p>  <p className='text-[#ffde59]'>/&gt;</p>
        </div>
        <div>
            <ul className='flex flex-row mt-8'>
                    <li className='w-[40px] h-[40px] flex justify-center items-center mr-[10px]'>
                        <a className='flex justify-evenly items-center  text-gray-300' href="https://www.linkedin.com/in/arpit-jha-385ba4190/" target='_blank'><FaLinkedin  size={30} color='#5e17eb'/></a>
                    </li>
                    <li className='w-[40px] h-[40px] flex justify-center items-center  '>
                        <a className='flex justify-evenly items-center  text-gray-300' href="https://github.com/arpitjha867" target='_blank'><FaGithub  size={30} color='#5e17eb'/></a>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
