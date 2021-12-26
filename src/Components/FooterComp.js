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
    <footer style={{backgroundColor: "#131415"}} className='overflow-hidden p-10'>
      <div className='container mx-auto px-8 py-10'>
        <div>
          {/* section 1 */}
          <div className="grid lg:grid-cols-6 gap-4 px-10 mb-3">
            {/* 1 */}
            <div className=''>
              {/* brand logo */}
              <div>
                <img src={logo1} alt="logo-1" className='h-24'/>
              </div>
              {/* link 1 */}
              <div className='flex flex-row lg:justify-start md:justify-center btn my-3' style={{backgroundColor: "#6e84a3"}}>
                <img src={logo2} alt="logo-2" className='flex flex-row h-8 px-2' /> <p className='grid content-center'>Build on Ethereum</p>
              </div>
              {/* link 2 */}
              <div className='flex flex-row lg:justify-start md:justify-center btn my-3' style={{backgroundColor: "#6e84a3"}}>
                <img src={logo2} alt="logo-2" className='flex flex-row h-8 px-2' /> <p className='grid content-center'>Craft with Solidity</p>
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
          <hr className=" mt-2 sm:my-10 lg:my-0" style={{borderTop: "1px solid #333436"}} />
          <div className="social-media py-3">
            <div className="grid grid-cols-2 gap-5">
              {/* copy right */}
              <div className='flex flex-row-reverse lg:flex-row'>
                <p style={{color: "#6e84a3"}}>&copy; 2021 Fifth Tech.</p>
              </div>
              {/* social media icons */}
              <div className='flex flex-row lg:flex-row-reverse'>
                <div className="icon-lists flex flex-row">
                  <a href='#telegram'><img src={telegram} alt="telegram-icon" className="h-6 pl-3" ></img></a>
                  <a href='#discord'><img src={discord} alt="discord-icon" className="h-6 pl-3" ></img></a>
                  <a href='#twitter'><img src={twitter} alt="twitter-icon" className="h-6 pl-3" ></img></a>
                  <a href='#medium'><img src={medium} alt="medium-icon" className="h-6 pl-3" ></img></a>
                  <a href='#github'><img src={github} alt="github-icon" className="h-6 pl-3" ></img></a>
                  <a href='#defipulse'><img src={defipulse} alt="defipulse-icon" className="h-6 pl-3" ></img></a>
                </div>
              </div>
            </div>
          </div>


          {/* section 3 */}
          <div className="disclaimer">
            <div className="borderOutside border-dashed border-2 border-gray-700 rounded-lg p-7 mt-7">
              <div className="disc-content">
                {/* heading */}
                <h3 className='font-bold text-center text-white text-lg'>Disclaimer</h3>
                {/* first content */}
                <h3 className='font-bold text-white mb-1'>No Advice</h3>
                <p style={{color: "#6e84a3"}}>
                  The information on this Site is provided for information only and does not constitute, and should not be construed as, investment advice or a recommendation to buy, sell, or otherwise transact in any investment including any products or services or an invitation, offer or solicitation to engage in any investment activity.<br/><br/>
                  The information on this Site is provided solely on the basis that you will make your own investment decisions and PEAKDEFI does not take account of any investor’s investment objectives, particular needs, or financial situation. In addition, nothing on this Site shall, or is intended to, constitute financial, legal, accounting or tax advice.<br/><br/>
                  It is strongly recommended that you seek professional investment advice before making any investment decision. Any investment decision that you make should be based on an assessment of your risks in consultation with your investment adviser.<br/><br/>
                </p>
                {/* second content */}
                <h3 className='font-bold text-white mb-1'>Risk Warnings</h3>
                <p style={{color: "#6e84a3"}}>
                  There are significant risks associated with an investment in any products or services provided by PEAKDEFI. Investment in the products and services is intended only for those investors who can accept the risks associated with such an investment (including the risk of a complete loss of investment) and you should ensure you have fully understood such risks before taking any decision to invest.<br/><br/>
                  Past performance does not guarantee future performance and the value of investments can fall as well as rise. No investment strategy is without risk and markets influence investment performance. Investment markets and conditions can change rapidly. Strategies or products can lose money as well as gain. All investors should consider investing only if they can accept the risks associated with investing including a loss of invested capital. No investor should invest without a thorough reading of the risk factors associated with each investment strategy in official documentation provided for each fund or strategy. Investors with questions should additionally seek independent investment advice tailored to their needs, circumstances, and risk tolerances.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
