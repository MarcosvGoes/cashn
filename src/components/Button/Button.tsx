import Link from "next/link";

export default function Button({text, link, theme,}:{text: string; link: string; theme: string;}) {

    return (
        <button className={` ${theme === 'dark' ? 'border-white text-white' : theme === 'white' ? 'border-black text-black' : ''} font-semibold border px-4 rounded-3xl text-xl p-1 transition-all lg:text-2xl lg:hover:scale-[1.02] lg:hover:text-yellow lg:hover:border-yellow lg:hover:bg-[#222222] ease-in-out`}>
            <Link href={link}>
            {text}
            </Link>
        </button>
    )
}