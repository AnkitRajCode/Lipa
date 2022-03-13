import Head from 'next/head'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import Footer from '../components/Footer';


export const getStaticProps = async (context) => { 


  const initialRes = await fetch(`https://lipa-backend.herokuapp.com/home-page`);
  const data = await initialRes.json(); 

  return {
    props: {
      data,
    },
  };
};


export default function Home(data) {
  console.log(data);
  return (
    <>
      <Head>
        <title>LIPA</title>
      </Head>
      <div className="">
        <Navbar />
        {/* Header */}
        <div className="h-screen w-full bg-center bg-cover flex"
          style={{ backgroundImage: `url(/Backgrounds/Landing.jpg)` }}
        >
          {/* Header Text */}
          <div className="md:w-1/2 font-kanyon font-semibold flex justify-end pr-20 items-center h-full text-6xl text-white leading-12">
            Cashless <br /> payments <br /> hurt small <br /> businesses            
            
          </div>
          {/* Header Slider */}
          <div className="md:w-1/2 flex justify-end items-center h-full">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              className="w-96 h-80 rounded-3xl bg-white"
              modules={[Pagination]}
            >
              <SwiperSlide >
                <div className=''>
                  Cashless payments
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div>later on</div>
              </SwiperSlide>
              <SwiperSlide >
                <div>20% more</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Section 1 - vertical scroll */}
        <div className="">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-96 w-full"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        {/* Businesses need */}
        <div className="">
          <div className="text-center">Businesses need</div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-80 h-80 bg-gray-200 shadow-xl rounded-2xl">
              Image
              Low payment fees
            </div>
            <div className="w-80 h-80 bg-gray-200 shadow-xl rounded-2xl">
              Image
              Low payment fees
            </div>
            <div className="w-80 h-80 bg-gray-200 shadow-xl rounded-2xl">
              Image
              Low payment fees
            </div>
          </div>
        </div>
        {/* welcome to lipa */}
        <div className="h-screen flex flex-col justify-center items-center">
          <div>welcome to lipa</div>
          <div>lipa reimageines <br /> cashless payments</div>
        </div>
        {/* choose your Wallet */}
        <div className="">
          <div className='text-center'>choose your Wallet</div>

          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-80 h-80 bg-gray-200 shadow-xl rounded-2xl">
              <div className="text-center">lipa wallet</div>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates!</span>
              <a href="#">Learn more</a>
            </div>

            <div className="w-80 h-80 bg-gray-200 shadow-xl rounded-2xl">
              <div className="">lipa wallet for bussiness</div>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates!</span>
              <a href="#">Learn more</a>
            </div>
          </div>

          {/* wallet for bussiness */}
          <div className="flex">
            <div className="w-1/2">
              <div className="">
                lipa wallet for everyone
              </div>
              <div className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus esse est nemo perferendis! Ratione, deleniti? Quibusdam corrupti pariatur perferendis neque.
              </div>
              <ol>
                <li>bitcoin</li>
                <li>bitcoin</li>
                <li>bitcoin</li>
                <li>bitcoin</li>
              </ol>
              <div className="">image google pay ka</div>
            </div>
            <div className="w-1/2">
              <Image src="/Backgrounds/mobile.png" alt='mobile' width={"300px"} height={"600px"} />
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};




