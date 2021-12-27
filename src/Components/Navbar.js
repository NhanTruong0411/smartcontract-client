import React, {useEffect, useState} from 'react'
import logo1 from './FooterComp/image/logo1.png';
import LaunchButton from './LaunchButton';
import AccountInfo from './AccountInfo';
import { ethers } from 'ethers';

const noStyleAnchor = {
    textDecoration: 'none',
    // color: "white"
}

export default function Navbar() {

    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    function connectWalletHandler() {
        if(window.ethereum) {
            setIsMetaMaskInstalled(true);
            window.ethereum.request({
                method: 'eth_requestAccounts'
            }).then(result => {
                accountChangeHandler(result[0]);
            })
        } else {
            setIsMetaMaskInstalled(false);
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
    window.ethereum.on('accountsChanged', connectWalletHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div>
            <nav className='bg-black font-medium'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex justify-between'>
                        <a href="#" style={noStyleAnchor} className='flex items-center text-white'>
                            <img className='h-12 w-12 mr-2' src={logo1} />
                            <span className='hidden md:flex'>FIFTHDEFI</span>
                        </a>
                        
                        <div className='flex items-center'>
                            
                            {(isMetaMaskInstalled && <AccountInfo userBalance={userBalance} defaultAccount={defaultAccount}/> || <LaunchButton  connectWalletHandler={connectWalletHandler}/>)}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
