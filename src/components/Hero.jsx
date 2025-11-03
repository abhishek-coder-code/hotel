
import React from 'react'
import { motion } from 'motion/react';
import { homePAgeData } from '../pages/Home';
import { SlCalender } from 'react-icons/sl';
import { MdPeopleAlt } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { cities } from '../assets';

const Hero = () => {
    return (

        <>
            <div className='  max-h-screen  flex flex-col md:flex-row max-md:text-center justify-between mt-20 md:px-10 px-2 pb-16 w-full mx-auto max-w-7xl'>

                {/* right side */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-center md:items-start '>
                    <h1 className='  font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight mt-16'>Find your perfect stay, <br />anywhere, anytime.</h1>
                    <p className=' text-md font-light mt-5 text-gray-400'>Discover top-rated hotels, cozy rooms, and unforgettable experiences — <br /> all in one place.</p>
                    <div className='flex items-center mt-8 gap-3 '>
                        <motion.button whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='bg-indigo-500 text-white rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer'>Show more</motion.button>
                    </div>

                    <div className='flex flex-wrap items-center gap-16 mt-8'>
                        {homePAgeData.map((item, index) => (
                            <motion.div key={index} animate={{ y: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className='flex items-center flex-col text-center'>
                                {/* <img src={item.icon} alt="" className='w-6 h-6' /> */}

                                <div className='text-4xl  text-orange-400 mb-2 '>
                                    {item.icon}
                                </div>


                                <div className="flex flex-row items-center space-x-3">
                                    <p className="text-md font-semibold ">{item.value}</p>
                                    <p className="text-md text-gray-400">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* left side */}
                <div className='mt-16'>
                    <motion.img
                        whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}
                        src="/room.jpg"
                        alt="Room"
                        className='w-full max-w-xl h-auto rounded-tl-[4rem] rounded-br-[4rem] shadow-lg object-cover'
                    />
                </div>
            </div>

            {/* hotel search form  */}

            <form className="bg-indigo-300 flex flex-col md:flex-row justify-between items-center py-4 rounded-lg shadow-2xl border w-full mx-auto max-w-4xl mb-16 gap-4 px-4">

                {/* destination */}
                <div className="flex flex-col items-start md:items-start w-full md:w-auto">
                    <div className='flex items-center gap-2 mb-1'>
                        <SlCalender className='w-4 h-4' />
                        <label className='font-light text-sm'>Select Location</label>
                    </div>
                    <select
                        id='destination'
                        className='rounded border border-gray-200 px-3 py-2 text-sm outline-none w-full md:w-48'
                    >
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* check in */}
                <div className="flex flex-col items-start w-full md:w-auto">
                    <div className='flex items-center gap-2 mb-1'>
                        <SlCalender className='w-4 h-4' />
                        <label className='font-light text-sm'>Check in</label>
                    </div>
                    <input
                        type="date"
                        className='rounded border border-gray-200 px-3 py-2 text-sm outline-none w-full md:w-48'
                    />
                </div>

                {/* check out */}
                <div className="flex flex-col items-start w-full md:w-auto">
                    <div className='flex items-center gap-2 mb-1'>
                        <SlCalender className='w-4 h-4' />
                        <label className='font-light text-sm'>Check out</label>
                    </div>
                    <input
                        type="date"
                        className='rounded border border-gray-200 px-3 py-2 text-sm outline-none w-full md:w-48'
                    />
                </div>

                {/* Guests */}
                <div className="flex flex-col items-start w-full  md:w-auto">
                    <div className='flex items-center gap-2 mb-1'>
                        <MdPeopleAlt className='w-4 h-4' />
                        <label className='font-light text-sm'>People</label>
                    </div>
                    <input
                        type="number"
                        className='rounded border border-gray-200 px-3 py-2 text-sm outline-none w-[75%] '
                    />
                </div>

                {/* search button */}

                <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-md flex items-center gap-2"
                >
                    <CiSearch className="w-5 h-5 text-black" />
                    Search
                </button>







            </form>
        </>



    )
}
export default Hero
