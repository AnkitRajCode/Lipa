import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async (context) => {
    const {locales} =  context;
    const {locale} =  context;
  
    const initialRes = await fetch(`https://lipa-backend.herokuapp.com/lipawallet-details`);
    const data = await initialRes.json();
  
    let translated =  undefined;
  
    if(locale=="de"){
      const localiData =  await fetch(`https://lipa-backend.herokuapp.com/lipawallet-details?_locale=de`)
      translated =  await localiData.json();
    }
  
    return {
        props: {
            data:translated?translated:data,
        },
    };
};

const WalletEveryone = ({data}) => {
  console.log(data);
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:px-40 px-5 py-20">
          <div className="lg:w-1/2">
            <div className=" text-5xl lg:text-6xl font-semibold mt-10 lg:mt-0 mb-10 text-cyan-600">{data.heading}</div>
            <div className="text-2xl lg:text-3xl text-gray-400 max-w-lg">
              {data.description}
            </div>
            <div className="flex flex-col space-y-2 mt-5 text-xl lg:text-2xl">
              {data.points.map((item, index) => {
                return (
                  <div key={index + 1}>
                    <div className="font-semibold text-gray-600 flex items-center"><i className="fa-solid fa-circle text-xs mr-5"></i> {item.points}</div>
                    {/* <div className="text-gray-400 ml-8">payments</div> */}
                  </div>
                );
              })}
              {/* <div className="">
                <div className="font-semibold text-gray-600 flex items-center"><i className="fa-solid fa-circle text-xs mr-5"></i> 0.98% transparent fee</div>
                <div className="text-gray-400 ml-8">for each transaction</div>
              </div>
              <div className="">
                <div className="font-semibold text-gray-600 flex items-center"><i className="fa-solid fa-circle text-xs mr-5"></i> Employee management</div>
                <div className="text-gray-400 ml-8">and app</div>
              </div>
              <div className="">
                <div className="font-semibold text-gray-600 flex items-center"><i className="fa-solid fa-circle text-xs mr-5"></i> BTC book keeping</div>
                <div className="text-gray-400 ml-8">support and eduction</div>
              </div> */}
              <div className="p-5 cursor-pointer">
                <Image
                  src="/Images/store.png"
                  alt="store"
                  width={"300px"}
                  height={"140px"}
                />
              </div>
            </div>

          </div>
          <div className="lg:w-1/2 flex flex-col items-center justify-center -mt-80 lg:mt-0">
            <Image
              src={data.image.url}
              alt={data.image.name}
              width={data.image.width}
              height={data.image.height}
            />
            <div className="max-w-xs text-xl mt-10 text-center font-semibold lg:font-medium text-gray-600">Click <Link href="/"><a className="font-semibold">here</a></Link> and send us a request to create your lipa Wallet for Business instead</div>
          </div>
        </div>
  )
}

export default WalletEveryone