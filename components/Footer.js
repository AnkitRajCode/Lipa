import Link from 'next/link'
const Footer = () => {
  return (
    <div className='p-10 bg-sky-600 text-white'>
        <div className="text-5xl font-yaro mb-10 md:ml-44 text-center md:text-left">lipa</div>
        <div className="flex flex-col md:flex-row justify-evenly items-center text-xl font-medium">
            <div className="text-center md:text-left">
                <div className="">lipa</div>
                <div className="">Lorem, ipsum. 12</div>
                <div className="">Lorem hjn slx </div>
            </div>
            <div className="md:border-l-2 md:border-white md:pl-32 mt-10 md:mt-0 text-center md:text-left">
                <div className="">Data protection</div>
                <div className="">Imprint</div>
                <div className="">@2021 lipa</div>
            </div>
            <div className="md:border-l-2 md:border-white md:pl-32 mt-10 md:mt-0 text-center md:text-left">
                <div className="">Follow us on</div>
                <div className="mt-5 text-2xl">
                    <Link href="https://www.facebook.com/">
                        <a className="py-0.5 px-2.5 text-white border-2 border-white rounded-full"><i className="fa-brands fa-facebook-f"></i></a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className="py-1 px-2.5 text-white border-2 border-white rounded-full mx-3"><i className="fa-brands fa-linkedin-in"></i></a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className="py-1 px-2 text-white border-2 border-white rounded-full"><i className="fa-brands fa-instagram"></i></a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer