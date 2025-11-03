import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { roomsDatas } from '../assets';
import RomsCard from './RomsCard';

const PopularRooms = () => {

    const { roomData } = useContext(AppContext);
    return (
        <div className='py-12'>
            <h1 className='text-3xl font-semibold text-center mx-auto hover:underline'>Most Popular Rooms</h1>
            <p className='text-md text-center max-w-lg mx-auto text-gray-400'>
                Discover our guest favorites—rooms that combine style, comfort, and the perfect stay experience.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12'>
                {
                    roomsDatas.map((room, index) => (
                        <RomsCard 
                        key={index}
                        room={room}
                        />
                      

                    ))
                }


            </div>


        </div>
    )
}

export default PopularRooms
