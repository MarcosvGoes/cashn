import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className='w-screen fixed border-black top-0 bottom-0 items-center left-0 right-0 h-16 mx-auto flex justify-between rounded-full max-w-[75%] px-10 py-4 my-10 bg-[#222222]'>
        <Link href="/" className="flex gap-x-3 transition-all hover:scale-105">
        <Image src="/assets/logo.png" width={20} height={20} alt="logo"/>
        <Image src="/assets/cashn.png" width={85} height={20} alt="logo"/>
        </Link>
        <i className="uil uil-bars text-4xl"></i>
      </div>
    )
}