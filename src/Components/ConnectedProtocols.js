import React from 'react'
import kyber from './ConnectedProtocols/image/kyber-logo.svg'
import uniswap from './ConnectedProtocols/image/uniswap.svg'
import inch from './ConnectedProtocols/image/1inch-logo.svg'
import compound from './ConnectedProtocols/image/compound-logo.svg'
import graph from './ConnectedProtocols/image/thegraph-logo.svg'


export default function ConnectedProtocols() {
  return (
    <div>
      <div className='bg-gray-200'>
        <div className='container mx-auto px-8 py-10'>

          {/* Header */}
          <h2 className='text-center text-md font-bold text-gray-500 mt-5 uppercase'>Connected Protocols</h2>

          {/* Protocols */}
          <div className='flex justify-center'>
            <div class="grid lg:grid-cols-5 gap-5 my-8 py-8 px-10">
              <div className='flex items-center justify-center'>
                <img src={kyber} className='h-24 md:h-16' alt="kyber-logo" /> 
              </div>
              <div className='flex items-center justify-center'>
                <img src={uniswap} className='h-24 md:h-16' alt="uniswap-logo" />
              </div>
              <div className='flex items-center justify-center'>
                <img src={inch} className='h-24 md:h-16' alt="1inch-logo" />
              </div>
              <div className='flex items-center justify-center'>
                <img src={compound} className='h-24 md:h-16' alt="compound-logo" />
              </div>
              <div className='flex items-center justify-center'>
                <img src={graph} className='h-32 md:h-24' alt="graph-logo" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
