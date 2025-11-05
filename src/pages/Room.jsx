import React, { useContext } from 'react'
import RomsCard from '../components/RomsCard'
import { AppContext } from '../context/AppContext'

const Room = () => {
  const { roomData = [] } = useContext(AppContext) 

  return (
    <div className='min-h-screen py-24 w-full mx-auto max-w-7xl'>
      <h1 className='text-4xl font-light text-center'>All Rooms</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12'>
        {roomData.map((room, index) => (
          <RomsCard key={index} room={room} />
        ))}
      </div>
    </div>
  )
}

export default Room
