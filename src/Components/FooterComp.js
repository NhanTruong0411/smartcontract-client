import React from 'react'
import logo1 from './FooterComp/image/logo1.png';
import logo2 from './FooterComp/image/logo2.png';
import telegram from './FooterComp/image/social/telegram.svg';
import discord from './FooterComp/image/social/discord.svg';
import twitter from './FooterComp/image/social/twitter.svg';
import medium from './FooterComp/image/social/medium.svg';
import github from './FooterComp/image/social/github.svg';
import defipulse from './FooterComp/image/social/defipulse.svg';



export default function FooterComp() {
  return (
    <footer>
      <div style={{backgroundColor: "#131415"}} className='overflow-hidden p-10'>
        <div className='container'>
          {/* section 1 */}
          <div className="grid lg:grid-cols-6 gap-4 px-10 ">
            {/* 1 */}
            <div className=''>
              {/* brand logo */}
              <div>
                <img src={logo1} alt="logo-1" className='h-24'/>
              </div>
              {/* link 1 */}
              <div className='flex flex-row lg:justify-start md:justify-center btn my-3' style={{backgroundColor: "#6e84a3"}}>
                <img src={logo2} alt="logo-2" className='flex flex-row h-8 px-2 h-6' /> <p className='grid content-center'>Build on Ethereum</p>
              </div>
              {/* link 2 */}
              <div className='flex flex-row lg:justify-start md:justify-center btn my-3' style={{backgroundColor: "#6e84a3"}}>
                <img src={logo2} alt="logo-2" className='flex flex-row h-8 px-2 h-6' /> <p className='grid content-center'>Craft with Solidity</p>
              </div>
            </div>
            {/* 2 */}
            <div></div>
            <div></div>
            {/* 3 */}
            <div>
              <h3 className='uppercase text-xs mt-5' style={{color:"#6e84a3"}}>products</h3>
              <ul>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Wallet</a></li>
              </ul>
            </div>
            {/* 4 */}
            <div>
            <h3 className='uppercase text-xs mt-5' style={{color:"#6e84a3"}}>RESOURCES</h3>
              <ul>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Whitepaper</a></li>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Help Center</a></li>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Security Audits</a></li>
              </ul>
            </div>
            {/* 5 */}
            <div>
            <h3 className='uppercase text-xs mt-5' style={{color:"#6e84a3"}}>COMPANY</h3>
              <ul>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Privacy Policy</a></li>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Vision & Mission</a></li>
                <li className='pt-3'><a href='#' className='text-white hover:text-gray-300 text-sm'>Terms and Conditions</a></li>
              </ul>
            </div>
          </div>


          {/* section 2 */}
          <hr className="m-4 py-10 sm:my-10 lg:my-0" style={{borderTop: "1px solid #333436"}} />

            {/* section 3 */}

        </div>
      </div>
    </footer>
  )
}
