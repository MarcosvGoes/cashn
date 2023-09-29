import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

export default function Navbar() {

  return (
    <nav>
      <div className={`w-screen fixed border top-0 bottom-0 left-0 right-0 items-center transition-all duration-1000 h-20 mx-auto flex justify-between rounded-full max-w-[75%] md:max-w-[65%] lg:max-w-[60%] xl:max-w-[50%] px-10 my-10 bg-[#222222]`}>
        <Link href="/" className="flex gap-x-3 transition-all hover:scale-105">
          <Image src="/assets/logo.png" width={20} height={20} alt="logo" />
          <Image src="/assets/cashn.png" width={85} height={20} alt="logo" />
        </Link>
        <div className="flex text-sm md:gap-x-10 gap-x-3 md:text-xl font-semibold">
          <ul>
            <p className="text-white cursor-pointer">For You</p>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <p className="text-white cursor-pointer">Help</p>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <p className="text-white cursor-pointer">Cashn</p>
            <li></li>
            <li></li>
          </ul>
          </div>
      
      </div>
    </nav>
  )
}
