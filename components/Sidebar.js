import Link from 'next/link'
const Sidebar = () => {
  return (
    <>
        <div className="absolute top-0 left-0 h-screen bg-white text-black p-10 font-poppins text-lg font-medium flex flex-col justify-between shadow-xl">
            <div className="flex flex-col space-y-3">
                <Link href="/">
                    <a>lipa Wallet</a>
                </Link>
                <Link href="/" >
                    <a>lipa wallet for bussiness</a>
                </Link>
                <Link href="/" >
                    <a>About Us</a>
                </Link>
                <Link href="/" >
                    <a>FAQ</a>
                </Link>
                <div className="flex justify-center pt-4">
                    <Link href="/" >
                        <a className="px-10 rounded-full py-1 text-white bg-cyan-600">Sign up</a>
                    </Link>
                </div>
            </div>
            <div>
                <div>Follow us on</div>
                <div className="my-2">
                    <Link href="https://www.facebook.com/">
                        <a className="py-0.5 px-2 text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full"><i className="fa-brands fa-facebook-f"></i></a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className="py-1 px-2 text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full mx-3"><i className="fa-brands fa-linkedin-in"></i></a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className="py-1 px-2 text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full"><i className="fa-brands fa-instagram"></i></a>
                    </Link>
                </div>
                <div>Data protection</div>
                <div>Imprint</div>
                <div><i className="fa-regular fa-copyright"></i> 2021 lipa</div>
            </div>
        </div>
    </>
  )
}

export default Sidebar