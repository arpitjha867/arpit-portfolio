import React from 'react'

export default function About() {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#5E17EB]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right pb-8 '>
                        <p className='sm:text-right font-bold text-4xl'>Hi. I'm Arpit, nice to see you. Please explore the site.</p>
                    </div>
                    <div>
                        <p>I am passionate software developer with vision of improving lives. I specialize in creating Frontend solutions for clients ranging from individuals and Start-Ups all the way to big organisations. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
