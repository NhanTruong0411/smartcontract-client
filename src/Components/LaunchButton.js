import React from 'react'

const noStyleAnchor = {
    textDecoration: 'none',
    // color: "white"
}

export default function LaunchButton({connectWalletHandler}) {
    return (
        <div>
            <a 
                style={noStyleAnchor} 
                onClick={connectWalletHandler}
                className='py-2 px-3 rounded
                    text-black
                    bg-yellow-400 
                    hover:bg-yellow-300
                '
            >     
                Launch App
            </a>
</div>
    )
}
