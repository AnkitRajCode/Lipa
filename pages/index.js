import Head from "next/head";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import WalletEveryone from "../components/WalletEveryone";

export const getStaticProps = async (context) => {
  const {locales} =  context;
  const {locale} =  context;

  const initialRes = await fetch(
    `https://lipa-backend.herokuapp.com/home-page`
  );
  const data = await initialRes.json();

  let translated =  undefined;

  if(locale=="de")
  {
    const localiData =  await fetch(`https://lipa-backend.herokuapp.com/home-page?_locale=de`)
    translated =  await localiData.json();
  }

  return {
    props: {
      data:translated?translated:data,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>LIPA</title>
      </Head>
      <div className="">
        <Navbar />
        {/* Header */}
        <div
          className="h-screen w-full bg-center bg-cover flex"
          style={{ backgroundImage: `url(/Backgrounds/Landing.jpg)` }}
        >
          {/* Header Text */}
          <div className="md:w-1/2 font-kanyon font-semibold flex justify-end pr-20 items-center h-full text-6xl text-white leading-12">
            <div className="w-96">
              {data.banner_text}
            </div>
          </div>
          {/* Header Slider */}
          <div className="md:w-1/2 flex justify-end items-center h-full">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              className="w-[26rem] h-96 rounded-3xl bg-white "
              mousewheel={true}
              modules={[Mousewheel, Pagination]}
            >
              {data.banner_slider.map((item, index) => {
                return (
                  <SwiperSlide key={index + 1}>
                    <div className="p-8">
                      <div className="">
                        <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                      </div>
                      <div className="mt-10 text-3xl font-semibold text-blue-500">{item.description}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* Section 1 - vertical scroll */}
        <div className="px-40">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-[30rem] w-full "
          >
            {data.section2.map((item, index) => {
              return (
                <SwiperSlide key={index + 1} className="flex justify-center items-center">
                  <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                  <div className="max-w-xl ml-14 text-4xl font-medium font-montserrat">{item.description} </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Businesses need */}
        <div className="py-20 px-60 bg-gray-100">
          <div className="text-center mb-20 text-4xl font-semibold font-montserrat">Businesses need...</div>
          <div className="flex flex-col md:flex-row justify-between">
            {data.section3_cards.map((item, index) => {
              return (
                <div key={index} className="w-72 h-72 bg-white p-10 flex flex-col justify-center items-center shadow-xl rounded-2xl">
                  <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                  <div className="mt-10 text-xl font-medium ">{item.description} </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* welcome to lipa */}
        <div 
          className="h-screen flex flex-col px-60 w-full justify-center bg-center bg-cover font-montserrat text-white"
          style={{ backgroundImage: `url(/Backgrounds/LandingMiddle.jpg)`}}
        >
          <div className="text-3xl font-semibold">welcome to lipa</div>
          <div className="text-6xl font-medium mt-20">lipa reimageines <br /> cashless payments</div>
        </div>

        {/* choose your Wallet */}
        <div className="px-40 py-20">
          <div className="text-center text-4xl font-semibold mb-20">Choose your Wallet</div>
          <div className="flex flex-col  md:flex-row justify-around">
            {data.section5_cards.map((item, index) => {
              return (
                <>
                  <div className="flex flex-col justify-between w-96 h-96 bg-gray-200 shadow-xl rounded-2xl p-10 font-semibold" key={index+1}>
                    <div className="text-3xl">{item.heading}</div>
                    <div className="text-xl my-5 font-normal">{item.description}</div>
                    <div className="flex justify-center ">
                      <a href={item.button_link} className="px-8 rounded-full py-2 text-white bg-cyan-500">{item.button_text}</a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* wallet for bussiness */}
        <WalletEveryone />

        <Contact />
        <Footer />
      </div>
    </>
  );
}