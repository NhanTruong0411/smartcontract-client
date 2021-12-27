import React, { useState } from 'react'
import Modal from 'react-modal';
import { ethers } from 'ethers';

export default function Header() {

    const [modalIsOpen, setModelIsOpen] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    function openModal() {
            setModelIsOpen(true);
    }

    function closeModal() {
            setModelIsOpen(false);
    }

    function connectWalletHandler() {
        if(window.ethereum) {
            window.ethereum.request({
                method: 'eth_requestAccounts'
            }).then(result => {
                accountChangeHandler(result[0]);
            })
        } else {
            console.log("no metamask")
        }
    }

    function accountChangeHandler(newAccount) {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());
    }

    function getUserBalance(address) {
        window.ethereum.request({
            method: 'eth_getBalance',
            params: [address, 'latest']
        }).then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    function chainChangedHandler() {
        window.location.reload();
    }
    window.ethereum.on('accountsChanged', accountChangeHandler);
    window.ethereum.on('chainChanged', chainChangedHandler)

    return (
        <div>
            <div className="bg-black text-white">
                <div className='grid grid-rows-1 text-center max-w-3xl mx-auto'>
                    <p className='uppercase text-xs mb-2'>meet peakdefi</p>
                    <h1 className='mt-4 mb-2 px-4'>A decentralized asset management fund created to grow your wealth</h1>
                    <p className='font-normal text-lg mt-4 mb-4' style={{color: '#6E84A3'}}>Join thousands of smart investors and let your money be managed by the best experts fully autonomous and proven by the law of blockchain!</p>
                    <div className='grid grid-rows-2 mt-3'>
                        <div className='grid grid-cols-1'>
                            <div>
                                <h6 className='text-xs uppercase'>assets under management</h6>
                                <span className="text-xl font-medium" style={{color: '#00D97E'}}>$483,031.06</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-2 w-96 mx-auto'>
                            <div>
                                <h6 className='text-xs uppercase'>ethereum total staked</h6>
                                <span className="text-xl font-medium after:content-['PEAK'] after:ml-2 after:text-white"  style={{color: '#00D97E'}}>$483,031.06</span>
                            </div>
                            <div>
                                <h6 className='text-xs uppercase'>bsc total staked</h6>
                                <span className="text-xl font-medium after:content-['PEAK'] after:ml-2 after:text-white" style={{color: '#00D97E'}}>$483,031.06</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div class="relative">
                                <video 
                                    className='bottom-0 left-0 right-0 top-0 -z-1 brightness-50' 
                                    poster='https://cdn.coingape.com/wp-content/uploads/2021/01/25172204/2021-01-25-10.17.42-min.jpg'>
                                </video>
                                <a 
                                    className='rounded-full absolute' 
                                    style={{left:'50%', top: '50%', transform: "translate(-50%,-50%)"}}
                                    href='#' 
                                    onClick={openModal}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                        >
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9HnD2fXNC8Y?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="mb-[70px]">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-rows-1">
                        <p className='uppercase text-center -translate-y-[6rem] text-white text-xs mb-2 z-[100]'>get started now</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='bg-sky-900 header-card mr-2'>
                            <div className='my-auto pt-2 text-white'>
                                <img className='h-16 mx-auto' src='https://peakdefi.com/assets/img/eth-logo.png' />
                                <p className='mt-2 font-lg header-card__text'>ethereum network</p>
                            </div>
                        </div>
                        <div className='bg-slate-900 header-card ml-2'>
                            <div className='my-auto pt-2 text-white'>
                                <img className='h-16 mx-auto' src='https://peakdefi.com/assets/img/bsc-logo.png' />
                                <p className='mt-2 font-lg header-card__text'>binance smart chain</p>
                            </div>
                        </div>
                    </div>
                    <p className='mt-4 text-center text-xs'>PEAKDEFI smart contracts are audited and secured by QuantStamp</p>
                    <button onClick={connectWalletHandler}>Connect</button>
                    <div>
                        <h3>Address: {defaultAccount}</h3>
                        <h5>Balance: {userBalance}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
