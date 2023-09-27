import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/bgImg/handsoncardbg.png')] h-screen w-screen bg-center bg-cover bg-no-repeat">
        <section className="max-w-[80%] mx-auto pt-36">
          <h1 className="text-white text-center font-extrabold mt-24 text-6xl">
            Everything you need, in <strong>one</strong>
          </h1>
          <p className="text-white text-center font-extrabold mt-5 text-2xl">
            Join over 50M users
          </p>
        </section>
        <section className="mx-auto text-center mt-32">
          <button className="text-white font-bold border px-4 rounded-2xl border-white text-xl p-1 mx-3"><Link href="/">Open your account</Link></button>
          <button className="text-white font-bold border px-4 rounded-2xl border-white text-xl p-1 mx-3"><Link href="/">Discover our products</Link></button>
        </section>
        <section className="text-center max-w-[85%] mx-auto">
          <ul className="gap-4 grid grid-cols-4 mt-32 text-center">
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil text-3xl uil-university"></i>Digital Account</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil text-3xl uil-credit-card"></i>Credit & Debit Card</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil text-3xl uil-store"></i>PJ<br/>Account</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil mt-1 text-3xl uil-arrow-growth"></i>Broker</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil text-3xl uil-bitcoin-circle"></i>Crypto Exchange</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil mt-1 text-3xl uil-globe"></i>Loans</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil mt-1 text-3xl uil-shield-plus"></i>Insurance</li>
            <li className="grid p-1 text-white h-28 border-[#FFD600] border-2 rounded-lg font-bold text-lg"><i className="uil text-3xl uil-home"></i>Real Estate Financing</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
