import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { hotelDatas } from '../assets'
import { motion } from 'motion/react'




const MostpickedHotel = () => {

    const { hotelData } = useContext(AppContext)


    return (
        <div className='py-8'>
            <h1 className='text-3xl font-semibold text-center mx-auto hover:underline'>Most Picked Hotels</h1>
            <p className='text-md text-center max-w-lg mx-auto text-gray-400'>Explore our top-rated rooms, loved by guests for comfort and location.</p>

            <div className='flex flex-wrap items-center p-2 justify-center mt-12 gap-4 md:max-w-5xl w-full mx-auto'>
                {
                    hotelDatas.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='relative group rounded-lg overflow-hidden cursor-pointer'
                        >

                            <img src={item.image} alt="img" className='md:size-56 w-full object-cover object-top' />

                            <div className='absolute inset-0 flex flex-col justify-end md:p-4 p-2 text-white bg-black/50 opacity-0 group-hover:opacity-100 trsnsition-all duration-300'>
                                <h1 className='text-lg font-medium'>{item.name}</h1>
                                <p className='text-sm'>{item.address}</p>
                                <h1 className='text-sm'>{item.price}</h1>

                            </div>




                        </motion.div>




                    ))
                }
            </div>

        </div>
    )
}

export default MostpickedHotel
