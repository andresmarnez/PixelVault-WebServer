import React from 'react'
import Image from "next/image"
import logo from "../../logos/logo_wb.png"
import explore from "../../icons/explore.png"
import account from "../../icons/account.png"
import all from "../../icons/explore.png"

function navBar(){

    return(
        <ul className="navigate">
            <li>
                <a href="/" className='logo'>
                    <Image
                    src= {logo}
                    width={60}
                    alt="PixelVaul's logo"
                    />
                </a>
            </li>
            <li>
                <a href="/"> 
                    <Image
                        src={explore}
                        width={30}
                        alt="Explore all the contracts."
                    />
                </a>
            </li>
            <li>
                <a  href="/">                    <Image
                    src= {account}
                    width={30}
                    alt="Visit profile"
                    />
                </a>
            </li>
        </ul>
    )

}

export default navBar