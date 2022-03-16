import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

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

const faq = ({ data }) => {
    const [faqs, setfaqs] = useState([
        {
          question: 'How can i get a Refund',
          answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          open: false
        },
        {
          question: 'Can i use this Design Set on Client sites?',
          answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
          open: false
        },
        {
          question: 'How long is the license valid?',
          answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          open: false
        }
    ]);
  
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
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
                    <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>

            <div className="text-center text-4xl font-semibold text-teal-300 pt-20 pb-10 border-b-2 border-gray-200">{data.faq2Heading}</div>
            <div className="faqs">
                {data.faq2.map((faq, i) => (
                    <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>

            <div className="text-center text-4xl font-semibold text-teal-300 pt-20 pb-10 border-b-2 border-gray-200">{data.faq3Heading}</div>
            <div className="faqs">
                {data.faq3.map((faq, i) => (
                    <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>


        {/* Right Answer */}
        <div className="flex justify-center my-20">
            <div className='max-w-4xl font-poppins bg-gray-100 rounded-3xl p-14'>
                <div className="text-4xl text-center font-medium">You didn't find the right answer?</div>
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

export default faq