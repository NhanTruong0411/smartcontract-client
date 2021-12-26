import React from 'react'
import logo1 from './FooterComp/image/logo1.png';

const noStyleAnchor = {
    textDecoration: 'none',
    // color: "white"
}

export default function Navbar() {
    return (
        <div>
            <nav className='bg-black font-medium'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex justify-between'>
                        <a href="#" style={noStyleAnchor} className='flex items-center py-2 text-white'>
                            <img className='h-12 w-12 mr-2' src={logo1} />
                            <span className='hidden md:flex'>FIFTHDEFI</span>
                        </a>
                        
                        <div className='flex items-center'>
                            <a 
                                style={noStyleAnchor} 
                                className='
                                    py-2 
                                    px-3 
                                    text-black
                                    bg-yellow-400 
                                    rounded
                                    hover:bg-yellow-300
                                '
                            >     
                                Launch App
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
