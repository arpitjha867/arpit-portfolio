import React from 'react'
import travel from '../assets/travel.png'
import isstracker from '../assets/iss-tracker.png'
import news from '../assets/news.png'
import portfolio from '../assets/portfolio.png'
import flipkart from '../assets/flipkart.png'
const ProjectsData = [
    {
        id: 1,
        name: 'International Space Station Tracker in 3D',
        imgSrc: isstracker,
        demoUrl: '/',
        codeUrl: 'https://github.com/arpitjha867/Space_Busters_Project'
    },
    {
        id: 2,
        name: 'Travel Website',
        imgSrc: travel,
        demoUrl: '/',
        codeUrl: 'https://github.com/arpitjha867/Travel-Website-React-Tailwind'
    },
    {
        id: 3,
        name: 'Flipkart Clone Webapp',
        imgSrc: flipkart,
        demoUrl: '/',
        codeUrl: 'https://github.com/arpitjha867/flipkart-clone'
    },
    {
        id: 4,
        name: 'Newsify Webapp',
        imgSrc: news,
        demoUrl: '/',
        codeUrl: 'https://github.com/arpitjha867/Newsify'
    },
    {
        id: 5,
        name: 'Portfolio Website',
        imgSrc: portfolio,
        demoUrl: '/',
        codeUrl: '/'
    },

]
export default function Projects() {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#5E17EB]'>Projects</p>
                    <p className='py-6'>// Check out some of my projects</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage : `url(${isstracker})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 hover:duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                International Space Station Tracker in 3D
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://drive.google.com/file/d/1vx-aCTv9msNII1sOm_6kRE63rr8CNZty/view?usp=sharing' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/arpitjha867/Space_Busters_Project' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage : `url(${travel})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Travel Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://arpitjha867.github.io/Travel-Website-React-Tailwind/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/arpitjha867/Travel-Website-React-Tailwind' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage : `url(${flipkart})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Flipkart Clone Webapp
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://drive.google.com/file/d/17e0K-wiME02qPIq3pI-neVmJEnbzlkmi/view?usp=sharing' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/arpitjha867/flipkart-clone' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage : `url(${news})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Newsify Webapp
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://drive.google.com/file/d/1BGE6ET5TnGxMFFG-QuuSlcl1gDTEtjQh/view?usp=sharing' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/arpitjha867/Newsify' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage : `url(${portfolio})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portfolio Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://635eb9681beb5469f600e9ba--flourishing-manatee-2c4fd2.netlify.app/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/arpitjha867/arpit-portfolio' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
