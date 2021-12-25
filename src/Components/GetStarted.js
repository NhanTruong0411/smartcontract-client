import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function GetStarted() {
  return (
    <div className='container mx-auto px-10 py-10'>
      {/* Header */}
      <h2 className='text-center font-bold text-4xl py-5'>Get Started Now</h2>

      {/* Main Content */}
      <div className="my-8 py-8 px-10 grid lg:grid-cols-3 gap-8">
        {/* Create an Account */}
        <div className="flex">
          <div className="w-3/8 lg:pt-2">
            <h3 className="font-bold text-center text-6xl text-gray-500 px-4">1</h3>
          </div>
          <div className="w-5/8">
            <h3 className='font-bold py-1'>Create an Account</h3>
            <p className='text-gray-400'>You can use any supported Wallet. It is free and easy.</p>
          </div>
        </div>

        {/* Start investing */}
        <div className="flex">
          <div className="w-3/8 lg:pt-2">
            <h3 className="font-bold text-center text-6xl text-gray-500 px-4">2</h3>
          </div>
          <div className="w-5/8">
            <h3 className='font-bold py-1'>Start investing</h3>
            <p className='text-gray-400'>Just deposit your Capital and let the fund managers do the rest</p>
          </div>
        </div>
        
        {/* Stake PEAK as a Bonus */}
        <div className="flex">
          <div className="w-3/8 lg:pt-2">
            <h3 className="font-bold text-center text-6xl text-gray-500 px-4">3</h3>
          </div>
          <div className="w-5/8">
            <h3 className='font-bold py-1'>Stake PEAK as a Bonus</h3>
            <p className='text-gray-400'>Set the amount and the timeframe and see your PEAK growing.</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='flex flex-row justify-center mb-5'>
        <div className='flex flex-row btn bg-gray-700'>Lauch App <span className='pl-3 mt-0.5'><FaArrowRight /></span></div>
      </div>

    </div>
  )
}
