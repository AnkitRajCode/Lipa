import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = ({ route }) => {
    const [dropdown, setDropdown] = useState(false);
   
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className='w-full absolute top-0 left-0 font-yaro tracking-wider text-white text-3xl font-semibold p-5 md:p-10 md:px-32 flex items-center justify-between ' style={{zIndex:"10"}}>
            <Link href={"/"} >
                <a className="text-6xl">lipa</a>
            </Link>
            <div className="flex items-center">
                {!isOpen ? (
                    <i className="fa-solid fa-language cursor-pointer"
                        onClick={() => setDropdown(!dropdown)}
                    ></i>
                ) : (
                    <i className="fa-solid fa-language cursor-pointer text-black"
                        onClick={() => setDropdown(!dropdown)}
                    ></i>
                )}
                {/* Humburger menu */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    className="ml-10 cursor-pointer"
                >
                    {!isOpen ? (
                        <i className="fa-solid fa-bars"></i>
                    ) : (
                        <i className="fa-solid fa-xmark text-cyan-500"></i>
                    )}
                </div>
                {/* dropdown */}
                {dropdown ? <div className="absolute shadow-xl right-10 md:right-48 top-20 md:top-24 bg-white w-40 text-black rounded-lg font-poppins">
                    <Link href={route?`/${route}`:"/"} locale="en-US" >
                        <div className="text-xl py-2 w-full hover:text-white hover:bg-gray-400 cursor-pointer text-center rounded-t-lg" onClick={()=>{
                            setDropdown(0)
                        }} >English</div>
                    </Link>
                    <Link href={route?`/${route}`:"/"} locale="de" >
                        <div className="text-xl py-2 w-full hover:text-white hover:bg-gray-400 cursor-pointer text-center rounded-b-lg" onClick={()=>{
                            setDropdown(0)
                        }}>German</div>
                    </Link>
                </div>:""}
            </div>
        </div>
        {/* sidebar */}
        {isOpen && <Sidebar />}
        </>
    )
}

export default Navbar