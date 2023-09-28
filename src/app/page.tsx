import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/bgImg/handsoncardbg.png')] h-screen w-screen bg-center bg-cover bg-no-repeat">
        <div className="max-w-[80%] mx-auto pt-40 md:pt-52 xl:pt-72">
          <h1 className="text-white text-center font-extrabold mt-24 text-6xl">
            Everything you need, in <strong>one</strong>
          </h1>
          <p className="text-white text-center font-extrabold mt-5 text-2xl">
            Join over 50M users
          </p>
        </div>
        <div className="mx-auto justify-center flex gap-x-10 mt-32">
          <Button link={'/'} text={'Open your account'} theme={'dark'}  />
          <Button link={'/'} text={'Discover our products'} theme={'dark'}  />

        </div>
        <div className="text-center max-w-[85%] mx-auto">
          <ul className="gap-4 grid text-white font-bold text-lg grid-cols-4 mt-32 md:mt-48 lg:mt-80 text-center md:text-xl lg:grid-cols-8">
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-university"></i>Digital Account</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-credit-card"></i>Credit & Debit Card</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-bitcoin-circle"></i>Crypto Exchange</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-home"></i>Real Estate Financing</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-arrow-growth"></i>Broker</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-store"></i>PJ Account</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-globe"></i>Loans</li>
            <li className="flex flex-col justify-around gap-y-2 h-28 lg:h-40 bg-yellow/5 border-[#FFD600] border-2 rounded-lg md:px-3 transition-all lg:hover:scale-[1.02]"><i className="uil text-3xl md:text-4xl uil-shield-plus"></i>Insurance</li>
          </ul>
        </div>
      </section>
      <section className="bg-[url('/bgImg/handsonsmartphone.png')] h-screen w-screen bg-center bg-cover bg-no-repeat lg:flex lg:flex-col justify-center pt-20">
        <div className="max-w-[80%] mx-auto lg:flex gap-x-96 text-white font-semibold text-3xl lg:text-4xl ">
          <div className="flex flex-col items-center justify-center gap-y-10">
            <Image width={586} height={325} alt="bank-image" src="/bgImg/digitalaccountsmartphone.png" />
            <p className="flex flex-col items-center">Experience the future of banking with our cutting-edge digital account. Seamlessly manage your finances, make transactions, and access exclusive perks, all from the palm of your hand. Join Cashn bank today for a smarter, hassle-free banking experience</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-10">
            <Image width={400} height={400} alt="bank-image" src="/bgImg/cards.png" />
            <p className="">Elevate your spending power with our state-of-the-art credit and debit card. Enjoy unparalleled convenience, security, and rewards. Take control of your finances with our Cashn bank card and experience a new level of financial freedom.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
