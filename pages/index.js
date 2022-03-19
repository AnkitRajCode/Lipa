import Head from "next/head";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";

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
      <div className=" overflow-hidden">
        <Navbar />
        {/* Header */}
        <div
          className="h-screen w-full bg-center bg-cover flex md:flex-row flex-col"
          style={{ backgroundImage: `url(/Backgrounds/Landing.jpg)` }}
        >
          {/* Header Text */}
          <div className="md:w-1/2 pt-80 md:pt-0 font-kanyon font-semibold flex justify-center  md:justify-end md:pr-20 items-center h-full text-6xl text-white md:leading-12">
            <span className="max-w-xs md:max-w-sm ">{data.banner_text}</span>
          </div>
          {/* Header Slider */}
          <div className="md:w-1/2 flex justify-end items-center h-full pt-20 md:pt-0">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              className="w-80 md:w-[26rem] md:h-96 rounded-3xl bg-white shadow-2xl"
              mousewheel={true}
              modules={[Mousewheel, Pagination]}
            >
              {data.banner_slider.map((item, index) => {
                return (
                  <SwiperSlide key={index + 1}>
                    <div className="p-8">
                      <div>
                        <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                      </div>
                      <div className="mt-5 md:mt-10 text-2xl  md:text-3xl font-semibold text-blue-500">{item.description}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* Section 1 - vertical scroll */}
        <div className="md:px-40 px-10 mt-60 md:mt-0">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            className="h-96 md:h-[30rem] w-full "
          >
            {data.section2.map((item, index) => {
              return (
                <SwiperSlide key={index + 1} className="flex justify-center items-center">
                  <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                  <div className="max-w-xl ml-5 md:ml-14 text-2xl md:text-4xl font-medium font-montserrat">{item.description} </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Businesses need */}
        <div className="py-20 md:px-60 px-10 bg-gray-100">
          <div className="text-center mb-20 text-4xl font-semibold font-montserrat">Businesses need...</div>
          <div className="flex flex-col md:flex-row justify-between">
            {data.section3_cards.map((item, index) => {
              return (
                <div key={index} className="w-72 h-72 bg-white mt-10 md:mt-0 p-10 flex flex-col justify-center items-center shadow-xl rounded-2xl">
                  <Image src={item.image.url} alt={item.image.name} width="120px" height="120px" />
                  <div className="mt-10 text-xl font-semibold md:font-medium text-center">{item.description} </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* welcome to lipa */}
        <div
          className="h-screen flex flex-col md:px-60 px-10 w-full justify-center bg-center bg-cover font-montserrat text-white"
          style={{ backgroundImage: `url(/Backgrounds/LandingMiddle.jpg)`}}
        >
          <div className="text-4xl md:text-3xl font-semibold">Welcome to lipa</div>
          <div className="text-5xl md:text-6xl font-medium mt-20">lipa reimageines <br /> cashless payments</div>
        </div>

        {/* choose your Wallet */}
        <div className="hidden md:block md:px-40 px-10 py-20">
          <div className="text-center text-4xl font-semibold mb-20">Choose your Wallet</div>
          <div className="flex flex-col  md:flex-row justify-around">
            {data.section5_cards.map((item, index) => {
              return (
                <>
                  <div className="flex flex-col justify-between w-80 md:w-96 h-96 bg-gray-200 shadow-xl rounded-2xl p-10 font-semibold" key={index+1}>
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