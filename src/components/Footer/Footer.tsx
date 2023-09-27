import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen pt-10 bg-[#0A0E10] border-t-2 border-black">
      <div className="grid grid-cols-3 max-w-[90%] mx-auto justify-center mb-6">
        <section>
          <ul className="text-white text-sm flex flex-col gap-y-1">
            <h1 className="text-2xl mb-2 font-bold">For You</h1>
            <li>Debit / Credit Card</li>
            <li>Crypto Exchange</li>
            <li>Digital Account</li>
            <li>PJ Account</li>
            <li>Insurance</li>
            <li>Financing</li>
            <li>Broker</li>
            <li>Loans</li>
          </ul>
        </section>
        <section>
          <ul className="text-white text-sm flex flex-col gap-y-1">
            <h1 className="text-2xl mb-2 font-bold">Need help?</h1>
            <li>Help center</li>
            <li>Service channels</li>
            <li>Internal affairs</li>
            <li>Negotiate your debt</li>
            <li>Contact us</li>
            <li>24 hour service</li>
          </ul>
        </section>        
        <section>
          <ul className="text-white text-sm flex flex-col gap-y-1">
            <h1 className="text-2xl mb-2 font-bold">Cashn</h1>
            <li>About us</li>
            <li>Work with us</li>
            <li>LGPD</li>
            <li>Security Policy</li>
            <li>Ethics and compliance</li>
            <li>Financial reports</li>
          </ul>
        </section>  
      </div>
      <div className="border-t border-white max-w-[90%] mx-auto">
        <section className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-white pt-5 pb-6">Developed by Marcos Goes</h1>
            <section className="gap-x-2 flex">
            <Link href="https://www.instagram.com/marccos_viniccios/" target="_blank"><i className="uil text-xl text-white uil-instagram"></i></Link>
            <Link href="https://www.linkedin.com/in/marccos-vinicios/" target="_blank"><i className="uil text-xl text-white uil-linkedin-alt"></i></Link>
            <Link href="https://github.com/MarcosvGoes" target="_blank"><i className="uil text-xl text-white uil-github-alt"></i></Link>
            </section>
        </section>
      </div>
    </div>
  );
}
