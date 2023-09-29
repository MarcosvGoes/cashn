import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen pt-10 bg-[#0A0E10] border-t-2 border-black">
      <div className="grid grid-cols-3 max-w-[90%] mx-auto justify-center mb-6">
        <section>
          <ul className="text-white text-sm lg:text-lg flex flex-col gap-y-1">
            <h1 className="text-2xl lg:text-3xl mb-2 font-bold">For You</h1>
            <li className="w-max cursor-pointer">Debit / Credit Card</li>
            <li className="w-max cursor-pointer">Crypto Exchange</li>
            <li className="w-max cursor-pointer">Digital Account</li>
            <li className="w-max cursor-pointer">PJ Account</li>
            <li className="w-max cursor-pointer">Insurance</li>
            <li className="w-max cursor-pointer">Financing</li>
            <li className="w-max cursor-pointer">Broker</li>
            <li className="w-max cursor-pointer">Loans</li>
          </ul>
        </section>
        <section>
          <ul className="text-white text-sm lg:text-lg flex flex-col gap-y-1">
            <h1 className="text-2xl lg:text-3xl mb-2 font-bold">Need help?</h1>
            <li className="w-max cursor-pointer">Help center</li>
            <li className="w-max cursor-pointer">Service channels</li>
            <li className="w-max cursor-pointer">Internal affairs</li>
            <li className="w-max cursor-pointer">Negotiate your debt</li>
            <li className="w-max cursor-pointer">Contact us</li>
            <li className="w-max cursor-pointer">24 hour service</li>
          </ul>
        </section>        
        <section>
          <ul className="text-white text-sm lg:text-lg flex flex-col gap-y-1">
            <h1 className="text-2xl lg:text-3xl mb-2 font-bold">Cashn</h1>
            <li className="w-max cursor-pointer">About us</li>
            <li className="w-max cursor-pointer">Work with us</li>
            <li className="w-max cursor-pointer">LGPD</li>
            <li className="w-max cursor-pointer">Security Policy</li>
            <li className="w-max cursor-pointer">Ethics and compliance</li>
            <li className="w-max cursor-pointer">Financial reports</li>
          </ul>
        </section>  
      </div>
      <div className="border-t border-white max-w-[90%] mx-auto">
        <section className="flex items-center justify-between">
            <h1 className="text-lg lg:text-2xl font-bold text-white pt-5 pb-6">Developed by Marcos Goes</h1>
            <section className="gap-x-2 lg:gap-x-4 flex">
            <Link href="https://www.instagram.com/marccos_viniccios/" target="_blank"><i className="uil text-xl lg:text-3xl text-white uil-instagram"></i></Link>
            <Link href="https://www.linkedin.com/in/marccos-vinicios/" target="_blank"><i className="uil text-xl lg:text-3xl text-white uil-linkedin-alt"></i></Link>
            <Link href="https://github.com/MarcosvGoes" target="_blank"><i className="uil text-xl lg:text-3xl text-white uil-github-alt"></i></Link>
            </section>
        </section>
      </div>
    </div>
  );
}
