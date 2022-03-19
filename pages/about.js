import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  
    const initialRes = await fetch(`https://lipa-backend.herokuapp.com/about-page`);
    const data = await initialRes.json();
  
    let translated =  undefined;
  
    if(locale=="de"){
      const localiData =  await fetch(`https://lipa-backend.herokuapp.com/about-page?_locale=de`)
      translated =  await localiData.json();
    }
  
    return {
        props: {
            data:translated?translated:data,
        },
    };
};

const about = ({data}) => {
  return (
    <>
      <Head>
        <title>LIPA - About</title>
      </Head>
      <div>
        <Navbar route="about" />
        {/* Header */}
        <div
          className="h-screen w-full flex flex-col justify-center font-sans bg-center bg-cover px-60 text-white"
          style={{ backgroundImage: `url(/About/header.jpg)` }}
        >
          {/* Header Text */}
          <div className="text-5xl ">{data.banner_text1}</div>
          <div className="text-7xl mt-10">{data.banner_text2}</div>
        </div>
      </div>

      {/* Section 1 - vertical scroll */}
      <div className="px-40">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="h-[30rem] w-full"
        >
          {data.section2_slider.map((item, index) => {
            return (
              <SwiperSlide key={index + 1} className="flex justify-center items-center">
                <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                <div className="max-w-xl ml-24 text-4xl font-medium font-montserrat">{item.description} </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* co-founders */}
      <div className="px-40 py-20 bg-gray-100">
        <div className="text-5xl text-center font-semibold">Co Founders</div>
        <div className="flex flex-row justify-between items-center mt-28">
        {data.team.map((item, index) => {
            return (
              <div key={index} className="w-80 h-96 rounded-3xl shadow-2xl p-10 text-center bg-white">
                <div className="-mt-28">
                  <Image src={item.photo.url} alt={item.photo.name} width={item.photo.width} height={item.photo.height} className='rounded-full' />
                </div>
                <div className="text-2xl font-semibold">{item.name}</div>
                <div className="text-xl font-medium mt-2 mb-5">{item.role}</div>
                <div className="text-base font-normal">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Advisors */}
      <div className="px-40 py-20">
        <div className="text-5xl text-center font-semibold">Advisors</div>
        <div className="flex flex-row justify-evenly items-center mt-28">
        {data.advisors.map((item, index) => {
            return (
              <div key={index} className="w-80 h-96 rounded-3xl shadow-2xl p-10 text-center bg-white">
                <div className="-mt-28">
                  <Image src={item.photo.url} alt={item.photo.name} width={item.photo.width} height={item.photo.height} className='rounded-full' />
                </div>
                <div className="text-2xl font-semibold">{item.name}</div>
                <div className="text-xl font-medium mt-2 mb-5">{item.role}</div>
                <div className="text-base font-normal">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partners */}
      <div className="px-40 py-20">
        <div className="p-10 bg-gray-100 rounded-3xl">
        <div className="text-5xl text-center font-poppins font-semibold mb-10">Partners</div>
        <div className=" flex flex-row justify-between ">
          {data.partners.map((item, index) => {
              return (
                <div key={index} className="p-10 text-center">
                  <div>
                    <Image src={item.logo.url} alt={item.logo.name} width={item.logo.width} height={item.logo.height} />
                  </div>
                  <div className="text-2xl font-semibold mt-6 mb-2">{item.name}</div>
                  <div className="text-base font-medium ">{item.role}</div>
                </div>
              );
            })}
        </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default about