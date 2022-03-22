import Image from 'next/image';
import Link from 'next/link';

const WalletBusiness = ({databusiness}) => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:px-40 px-5 py-20">
        <div className="lg:w-1/2">
            <div className=" text-5xl lg:text-6xl font-semibold mt-10 lg:mt-0 mb-10 text-teal-400">{databusiness[0].heading}</div>
            <div className="text-2xl text-gray-400 max-w-lg">
              {databusiness[0].description}
            </div>
            <div className="flex flex-col space-y-2 mt-5 text-xl lg:text-2xl">
              {databusiness[0].points.map((item, index) => {
                return (
                  <div key={index + 1}>
                    <div className="font-semibold text-gray-600 flex items-center"><i className="fa-solid fa-circle text-xs mr-5"></i> {item.point1}</div>
                    <div className="text-gray-400 ml-8"> {item.point2}</div>
                  </div>
                );
              })}
              <div className=" pt-5 cursor-pointer">
                <Image
                  src="/Images/store.svg"
                  alt="store"
                  width={"300px"}
                  height={"140px"}
                />
              </div>
            </div>

          </div>
          <div className="hidden md:block">
            <Image src="/Images/soon.png" alt="soon" width="150px" height="150px" />
          </div>

          <div className="lg:w-1/2 flex flex-col items-center justify-center -mt-80 lg:mt-0">
            <Image
              src={databusiness[0].Image.url}
              alt={databusiness[0].Image.name}
              width={databusiness[0].Image.width}
              height={databusiness[0].Image.height}
            />
            <div className="max-w-xs text-xl mt-10 text-center font-semibold lg:font-medium text-gray-600">Click <Link href="/"><a className="font-semibold">here</a></Link> and send us a request to create your lipa Wallet for Business instead</div>
          </div>
        </div>
  )
}

export default WalletBusiness