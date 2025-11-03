import React, { useContext } from 'react'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'


const RomsCard = ({room}) => {
    const { navigate } = useContext(AppContext)
    return (
        <motion.div
            whileHover={{ scale: 1.1 }} transition={{ duration: 2, ease: 'easeInOut' }}>
            <div className='rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out max-w-80 bg-white px-0 md:px-5'>
                <img src={room.img} alt="room" className='w-full h-52 object-cover' />
                <h1 className='mt-3 px-4 pt-3 mb-1 font-semibold text-gray-600'>{room.roomType}</h1>
                <div className='flex items-center gap-4 justify-between'>
                    <p className='text-sm px-4'>{room.pricePerNight}</p>
                    <button onClick={() => {
                        navigate(`/room/${room.singleroom}`)
                        window.scrollTo({top:0, behavior:'smooth'});
                    }}
                    className='bg-indigo-500 text-white rounded-md py-1 px-3 py-2 hover:bg-orange-600 mb-3 cursor-pointer'
                    >
                        See Details</button>

                </div>




            </div>


        </motion.div>
    )
}

export default RomsCard
