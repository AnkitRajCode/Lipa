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
  
    const initialRes = await fetch(`https://lipa-backend.herokuapp.com/testimonials`);
    const data = await initialRes.json();
  
    let translated =  undefined;
  
    if(locale=="de"){
      const localiData =  await fetch(`https://lipa-backend.herokuapp.com/testimonials?_locale=de`)
      translated =  await localiData.json();
    }
  
    return {
        props: {
            data:translated?translated:data,
        },
    };
};
const Testimonials = ({data}) => {
  return (
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
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index + 1} className="flex flex-col md:flex-row justify-center ">
                        <div className="flex flex-col md:shadow-2xl rounded-3xl md:flex-row p-5 md:max-w-2xl items-center">
                        <div className="text-xl font-medium font-sans md:w-3/5 p-5 text-center md:text-left">
                            <div>{item.testimonials}</div>
                            <div className='mt-5'>{item.by}, {item.role}</div>
                        </div>
                        <div className="md:w-2/5">
                            <Image src={item.image.url} alt={item.image.name} className='rounded-full' width="250px" height="250px" />
                        </div>
                        </div>
                    </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials