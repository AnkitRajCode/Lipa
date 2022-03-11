import React, { useState } from "react";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='font-yaro tracking-wider text-white w-full text-3xl font-semibold p-5 md:p-10 md:px-32 flex items-center justify-between absolute top-0 left-0'>
            <div className='text-6xl'>lipa</div>
            <div>
                <i className="fa-solid fa-language cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                ></i>
                <i className="fa-solid fa-bars ml-10"></i>
                {dropdown && <div className="absolute right-48 top-20 bg-white w-40 text-black rounded-lg">
                    <div className="text-xl py-2 w-full hover:bg-gray-400 cursor-pointer text-center rounded-lg">English</div>
                    <div className="text-xl py-2 w-full hover:bg-gray-400 cursor-pointer text-center rounded-lg">French</div>
                </div>}
            </div>
        </div>
    )
}

export default Navbar