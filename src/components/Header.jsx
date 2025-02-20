/**
 * @copyright 2025 praveenmadiwal
 * @license Apache-2.0
 */

/**
 * Components
 */

import Navbar from "./Navbar"
/**
 * Node modules
 */
import { useState } from "react"

const Header = () => {

    const[navOpen, setNavOpen] = useState(false);
     return (
    <header className="fixed top-0 left-0 w-full h-20 flex
    items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4
            flex justify-between items-center md:px-6 md:grid
            md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/"  className="logo">
                        <img src="/images/h-logo.png"
                        width={40}
                        height={40}
                        alt="PraveenMadiwal"/>
                    </a>
                </h1>

                <div className="relative md:justify-self-center mt-1">
                    <button className="menu-btn md:hidden"
                    onClick={(()=>setNavOpen((prev)=>!prev))}>
                        <div className="material-symbols-rounded">
                            {navOpen? 'close' : 'menu'}
                        </div>
                    </button>
                    <Navbar navOpen={navOpen}/>
                </div>
                <a 
                    href="#contact" 
                    className="btn btn-secondary max-md:hidden
                    md:justify-self-end">Contact Me</a>
            </div>
    </header>
  )
}


export default Header 