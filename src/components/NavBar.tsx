"use client";
import { merriweather } from "../lib/fontExports";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavBarProps } from "@/lib/types";
import Image from "next/image";
import moon from "../lib/images/moon.png";
import sun from "../lib/images/sun.png";

function NavBar({ dark, setDark }: NavBarProps) {
  const pathname = usePathname();

  return (
    <div
      className={`dark:bg-gray-800 sticky top-0 bg-white w-full flex justify-between uppercase tracking-wide px-3 md:px-8 lg:px-12 md:py-6 py-2 text-[0.9rem] md:text-base ${merriweather.className}`}
    >
      <div className="">my blog</div>

      <div onClick={() => setDark(!dark)} className="h-6 w-6 cursor-pointer">
        <Image src={dark ? moon : sun} alt="toggle icon" className="w-full h-full" />
      </div>

      <div className="flex gap-2">
        {/* Check for current page URL and apply active link style as needed. */}
        <Link href="/" className={`${pathname === "/" ? "active-link" : ""}`}>
          home
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "active-link" : ""}`}
        >
          about
        </Link>
      </div>
      
    </div>
  );
}

export default NavBar;
