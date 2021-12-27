import React, { useEffect, useRef } from 'react'
import Jazzicon from '@metamask/jazzicon';

export default function AccountInfo({userBalance, defaultAccount}) {

    const appendRef = useRef();

    useEffect(() => {
        if(defaultAccount && appendRef) {
            appendRef.current.innerHtml = '';
            if(defaultAccount !== null) {
                const jazz = parseInt(defaultAccount.slice(2,10),16);
                const newJazz = Jazzicon(16,jazz);
                appendRef.current.removeChild(appendRef.current.lastChild);
                appendRef.current.appendChild(newJazz);
            }
        }
    },[defaultAccount]);

    return (
        <div>
            <div className='rounded-lg text-white flex items-center' style={{backgroundColor: "gray", border: "1px solid gray"}}>
                <span className='px-2'>{userBalance} BNB</span>
                <div ref={appendRef} className='px-2 py-1 bg-black  rounded-lg flex items-center'>
                    <span className={defaultAccount !== null?`mr-2`:''}>{defaultAccount !== null?`${defaultAccount.slice(0,6)}...${defaultAccount.slice(defaultAccount.length-4,defaultAccount.length)}`:'No acco'}</span>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
