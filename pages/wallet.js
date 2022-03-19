import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WalletEveryone from '../components/WalletEveryone';
import Image from 'next/image';
import Head from 'next/head';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const getStaticProps = async (context) => {
    const {locales} =  context;
    const {locale} =  context;
  
    const initialRes = await fetch(`https://lipa-backend.herokuapp.com/wallet-page`);
    const data = await initialRes.json();
  
    let translated =  undefined;
  
    if(locale=="de"){
      const localiData =  await fetch(` https://lipa-backend.herokuapp.com/wallet-page?_locale=de`)
      translated =  await localiData.json();
    }
  
    return {
        props: {
            data:translated?translated:data,
        },
    };
};
const wallet = ({data}) => {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>LIPA - Wallet</title>
      </Head>
      <Navbar route="wallet"/>
        {/* Header */}
        <div
          className="h-screen w-full flex flex-col justify-center bg-center bg-cover px-10 md:px-60 text-white"
          style={{ backgroundImage: `url(/Backgrounds/LandingMiddle.jpg)` }}
        >
          {/* Header Text */}
          <div className="text-5xl md:text-7xl ">{data.banner_text}</div>
        </div>

        {/* section1 */}
        <div className="px-5 md:px-40 py-20">
          <div className="text-5xl text-center">{data.section2_heading}</div>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          {data.section2_process.map((item, index) => {
                return (
                  <div className="w-80 font-poppins mt-10 md:mt-0" key={index}>
                    <div className="flex items-center justify-center">
                      {/* <Image src={item.image.url} alt={item.image.name} width={item.image.width} height={item.image.height} /> */}
                      <Image src={item.image.url} alt={item.image.name} width="300px" height="500px" />
                    </div>
                    <div className="text-center text-2xl text-bold text-gray-600 md:my-5">{item.id}</div>
                    <div className="text-center text-xl text-semibold">{item.description}</div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Section 2 - vertical scroll */}
        <div className="px-5 md:px-40">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            className="h-screen w-full "
          >
            {data.section3_slider.map((item, index) => {
              return (
                <SwiperSlide key={index + 1} className="flex flex-col md:flex-row justify-center items-center">
                  {/* <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" /> */}
                      <Image src={item.image.url} alt={item.image.name} width={item.image.width} height={item.image.height} />

                  <div className="max-w-xl md:ml-14 text-center md:text-left text-2xl md:text-5xl font-medium font-sans">{item.description} </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Public Opinion */}
        <div className="px-5 md:px-40 py-20">
          <div className="text-4xl md:text-5xl text-center">What people say about lipa Wallet</div>
          <div className="pt-10 flex justify-between">
            <Swiper
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="md:mt-10 myswiper"
            >
              
              <SwiperSlide className="flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col md:shadow-2xl rounded-3xl md:flex-row p-5 md:max-w-2xl items-center">
                  <div className="text-xl font-medium font-sans md:w-3/5 p-5">
                    <div className='text-justify md:text-left'>What I like most, is easy and quick global transfer. Crypto currencies are global, meaning they have the same value in every country and no exchange rates.</div>
                    <div className='mt-5'>John Ruben, founder of nari.com</div>
                  </div>
                  <div className="md:w-2/5">
                    <Image src="/About/Adrian.png" alt="card" className='rounded-full' width="250px" height="250px" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col md:shadow-2xl rounded-3xl md:flex-row p-5 md:max-w-2xl items-center">
                  <div className="text-xl font-medium font-sans md:w-3/5 p-5">
                    <div className='text-justify md:text-left'>What I like most, is easy and quick global transfer. Crypto currencies are global, meaning they have the same value in every country and no exchange rates.</div>
                    <div className='mt-5'>John Ruben, founder of nari.com</div>
                  </div>
                  <div className="md:w-2/5">
                    <Image src="/About/Bastian.png" alt="card" className='rounded-full' width="250px" height="250px" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col md:shadow-2xl rounded-3xl md:flex-row p-5 md:max-w-2xl items-center">
                  <div className="text-xl font-medium font-sans md:w-3/5 p-5">
                    <div className='text-justify md:text-left'>What I like most, is easy and quick global transfer. Crypto currencies are global, meaning they have the same value in every country and no exchange rates.</div>
                    <div className='mt-5'>John Ruben, founder of nari.com</div>
                  </div>
                  <div className="md:w-2/5">
                    <Image src="/About/Christoph.png" alt="card" className='rounded-full' width="250px" height="250px" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Counter */}
        <div className="px-5 md:px-60 py-10 md:py-20 mb-72 bg-teal-300 text-white flex flex-col md:flex-row justify-between items-center md:items-start font-sans font-semibold">
          {data.numbers.map((item, index) => {
            return (
              <div key={index} className="text-center w-52 mt-10 md:mt-0">
                <div className="text-5xl">{item.number}</div>
                <div className="mt-3 md:mt-10 text-3xl">{item.desc}</div>
              </div>
            );
          })}
        </div>
        <WalletEveryone/>
        <Footer />
    </div>
  )
}

export default wallet