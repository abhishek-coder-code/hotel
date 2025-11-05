import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'


const Hotel = () => {

  const { hotelData } = useContext(AppContext)
  return (
    <div className='min-h-screen py-24 w-full mx-auto max-w-7xl'>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center"
      >
        <h1 className=" text-4xl font-bold my-4 text-orange-500 cursor-pointer relative after:block 
        after:h-[2px] after:w-0 after:bg-orange-500 after:mt-1 after:transition-width after:duration-500 after:origin-left
        hover:after:w-full"
        >
          Explore Our Hotels
        </h1>
      </motion.div>
      <div className='flex flex-col items-center'>
        <p className='text-center text-gray-500 text-lg px-2 max-w-2xl'>
          We have <span className='font-semibold'></span> top-rated hotels available for your next stay.
          Find the perfect spot to relax, work, or enjoy your vacation.
        </p>
      </div>
      <div className='flex flex-wrap items-center p-2 justify-center mt-12 gap-4 md:max-w-5xl w-full mx-auto'>
        {
          hotelData.map((item, index) => (

            <div
              key={index}
              className='relative group rounded-lg overflow-hidden cursor-pointer'
            >
              <img src={item.image} alt="img" className='md:size-56 w-full object-cover object-top' />
              <div className='absolute inset-0 flex flex-col justify-end md:p-4 p-2 text-white bg-black/50 opacity-0 group-hover:opacity-100 trsnsition-all duration-300'>
                <h1 className='text-lg font-medium'>{item.name}</h1>
                <p className='text-sm'>{item.address}</p>
                <h1 className='text-sm'>{item.price}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Hotel
