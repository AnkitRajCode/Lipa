import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WalletEveryone from '../components/WalletEveryone';
import Testimonials from '../components/Testimonials';
import Head from 'next/head';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const getStaticProps = async (context) => {
  const {locales} =  context;
  const {locale} =  context;

  const initialRes = await fetch(`https://lipa-backend.herokuapp.com/wallet-business-page`);
  const data = await initialRes.json();

  let translated =  undefined;

  if(locale=="de"){
    const localiData =  await fetch(`https://lipa-backend.herokuapp.com/wallet-business-page?_locale=de`)
    translated =  await localiData.json();
  }

  return {
      props: {
          data:translated?translated:data,
      },
  };
};
const business = ({data}) => {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>LIPA - Business</title>
      </Head>
      <div className="">
        <Navbar route="business" />
        {/* Header */}
        <div
          className="h-screen w-full flex flex-col justify-center bg-center bg-cover px-5 md:px-80 text-white"
          style={{ backgroundImage: `url(/Bussiness/header.jpg)` }}
        >
          {/* Header Text */}
          <div className="text-6xl max-w-sm font-semibold mb-20">{data.banner_text}</div>
        </div>
      </div>

        {/* section1 */}
        <div className="px-5 md:px-40 py-20">
          <div className="text-5xl text-center">How it is done</div>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          {data.secton2_process.map((item, index) => {
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

                  <div className="max-w-xl md:ml-14 text-sky-600 text-center md:text-left text-2xl md:text-5xl font-medium font-sans">{item.description} </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Public Opinion */}
        {/* <Testimonials/> */}

        {/* company logo */}
        <div className="px-5 md:px-40 py-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mt-10 md:mt-0 flex justify-center items-center"><Image src="/Bussiness/companyLogo1.png" alt="card" className='rounded-full' width="250px" height="150px" /></div>
            <div className="mt-10 md:mt-0 flex justify-center items-center"><Image src="/Bussiness/companyLogo2.png" alt="card" className='rounded-full' width="250px" height="150px" /></div>
            <div className="mt-10 md:mt-0 flex justify-center items-center"><Image src="/Bussiness/companyLogo3.png" alt="card" className='rounded-full' width="250px" height="150px" /></div>
          </div>
        </div>

        {/* Counter */}
        <div className="px-5 md:px-60 py-10 md:py-20 mb-72 md:mb-0  bg-teal-300 text-white flex flex-col md:flex-row justify-between items-center md:items-start font-sans font-semibold">
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

export default business