import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 md:p-10 bg-teal-200'>
        <div className="text-5xl font-yaro mb-10">lipa</div>
        <div className="flex flex-col md:flex-row justify-evenly items-center text-xl font-medium">
            <div className="">
                <div className="">lipa</div>
                <div className="">Lorem, ipsum. 12</div>
                <div className="">Lorem hjn slx </div>
            </div>
            <div className="border-l-2 border-gray-800 pl-32">
                <div className="">Data protection</div>
                <div className="">Imprint</div>
                <div className="">@2021 lipa</div>
            </div>
            <div className="border-l-2 border-gray-800 pl-32">
                <div className="">Follow us on</div>
                <div className="text-2xl">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter mx-2"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer