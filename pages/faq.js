import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Head from 'next/head';

export const getStaticProps = async (context) => {
    const {locales} =  context;
    const {locale} =  context;
  
    const initialRes = await fetch(`https://lipa-backend.herokuapp.com/faq-page`);
    const data = await initialRes.json();
  
    let translated =  undefined;
  
    if(locale=="de"){
      const localiData =  await fetch(`https://lipa-backend.herokuapp.com/faq-page?_locale=de`)
      translated =  await localiData.json();
    }
  
    return {
        props: {
            data:translated?translated:data,
        },
    };
};

const Faq = ({ data }) => {  
    const [active, setActive] = useState('open');
    
    const toggleFAQ = index => {
        setActive(data.faq1.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
          return faq;
        }))
      }
    const toggle2FAQ = index => {
        setActive(data.faq2.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
    const toggle3FAQ = index => {
        setActive(data.faq3.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }

  return (
    <>
        <Head>
            <title>LIPA - FAQs</title>
        </Head>
        <Navbar />
        {/* Header */}
        <div
          className="h-screen w-full flex flex-col justify-center bg-center bg-cover px-60 text-white"
          style={{ backgroundImage: `url(/Faq/header.jpg)` }}
        >
            {/* Header Text */}
            <div className="text-4xl ">{data.banner_text1}</div>
            <div className="text-7xl mt-10">{data.banner_text2}</div>

            {/* Header search */}
            <div className="mt-20">
                <input type="search" placeholder='Search' name="" id="" className='w-[28rem] border-2 py-1 px-5 focus:outline-none border-white bg-transparent rounded-full' />
            </div>
        </div>

        {/* filter */}
        <div className="px-60 py-14 bg-gray-100">
            <div className="flex mb-10">
                <div className="text-2xl mr-10">Filter</div>
                <div className="w-96 border-2 rounded-full px-5 border-gray-200 ">
                    <select className='w-full focus:outline-none bg-transparent py-1'>
                        <option value="this">Choose a filter</option>
                        <option value="this">Choose a filter</option>
                        <option value="this">Choose a filter</option>
                    </select>
                </div>
            </div>
            <div className="flex space-x-10">
                <div className="w-60 py-1 bg-white rounded-full shadow-3xl font-semibold">
                    <span className='px-20'>Filter 1</span>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="w-60 py-1 bg-white rounded-full shadow-3xl font-semibold">
                    <span className='px-20'>Filter 1</span>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="w-60 py-1 bg-white rounded-full shadow-3xl font-semibold">
                    <span className='px-20'>Filter 1</span>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>

        {/* FAQ */}
        <div className="px-60 py-14">
            <div className="text-center text-4xl font-semibold text-teal-300 py-10 border-b-2 border-gray-200">{data.faq1Heading}</div>
            <div className="faqs">
                {data.faq1.map((faq, i) => (
                    <div
                    key={i}
                    className={"border-b border-gray-200 pb-2 px-2 faq " + (faq.open ? 'open' : '')}
                    onClick={() => toggleFAQ(i)}
                >
                    <div className="faq-question text-xl font-semibold flex justify-between mt-5">
                        {faq.question}
                    </div>
                    <div className="faq-answer text-lg text-justify">
                        {faq.answer}
                    </div>
                </div>
                ))}
            </div>

            <div className="text-center text-4xl font-semibold text-teal-300 pt-20 pb-10 border-b-2 border-gray-200">{data.faq2Heading}</div>
            <div className="faqs">
                {data.faq2.map((faq, i) => (
                    <div
                    key={i}
                    className={"border-b border-gray-200 pb-2 px-2 faq " + (faq.open ? 'open' : '')}
                    onClick={() => toggle2FAQ(i)}
                >
                    <div className="faq-question text-xl font-semibold flex justify-between mt-5">
                        {faq.question}
                    </div>
                    <div className="faq-answer text-lg text-justify">
                        {faq.answer}
                    </div>
                </div>
                ))}
            </div>

            <div className="text-center text-4xl font-semibold text-teal-300 pt-20 pb-10 border-b-2 border-gray-200">{data.faq3Heading}</div>
            <div className="faqs">
                {data.faq3.map((faq, i) => (
                    <div
                    key={i}
                    className={"border-b border-gray-200 pb-2 px-2 faq " + (faq.open ? 'open' : '')}
                    onClick={() => toggle3FAQ(i)}
                >
                    <div className="faq-question text-xl font-semibold flex justify-between mt-5">
                        {faq.question}
                    </div>
                    <div className="faq-answer text-lg text-justify">
                        {faq.answer}
                    </div>
                </div>
                ))}
            </div>
        </div>


        {/* Right Answer */}
        <div className="flex justify-center my-20">
            <div className='max-w-4xl font-poppins bg-gray-100 rounded-3xl p-14'>
                <div className="text-4xl text-center font-medium">You didnt find the right answer?</div>
                <div className="text-center my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. maiores dolorum ratione ipsa obcaecati? Odio natus dolorum repudiandae eligendi voluptate.
                </div>
                <input type="text" name="" id="" className='w-full border-b border-b-gray-500 focus:outline-none bg-transparent ' placeholder='Question' />
                <form className='mt-5'>
                    <input type="email" placeholder='E-mail address' name="" id="" className='border-b border-b-gray-500 focus:outline-none bg-transparent w-4/5' />
                    <input type="button" value="Submit" className='px-8 py-1 shadow-lg text-white  rounded-full bg-sky-600 cursor-pointer' />
                </form>
                <div className='text-sm text-center mt-2'>By submitting this form I agree to lipa privacy policy</div>
            </div>
        </div>

        {/* footer */}
        <Footer/>
    </>
  )
}

export default Faq