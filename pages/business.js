import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

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

      {/* <Footer /> */}
    </>
  )
}

export default business