import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const business = () => {
  return (
    <>
      <Head>
        <title>LIPA - Business</title>
      </Head>
      <div className="">
        <Navbar />
        {/* Header */}
        <div
          className="h-screen w-full bg-center bg-cover flex"
          style={{ backgroundImage: `url(/Bussiness/header.jpg)` }}
        ></div>
      </div>

      <Footer />
    </>
  )
}

export default business