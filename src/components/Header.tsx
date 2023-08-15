import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="px-6  sm:px-20 font-montserrat ">
      <div className="flex items-center justify-between w-full h-20 ">
        <div className="flex items-center justify-center">
          <span className="text-lg sm:text-2xl font-black text-white ">
            BIFI
          </span>
        </div>
        <div className="flex items-center justify-end text-sm sm:text-xl gap-4 sm:gap-10">
          <div className="flex items-center justify-center  hover:text-gold  font-bold transition duration-200 cursor-pointer">
            <Link href="/">Home</Link>
          </div>
          <div className="flex items-center justify-center  hover:text-gold  font-bold transition duration-200 cursor-pointer">
            <Link href="/events">Events</Link>
          </div>
          <div className="flex items-center justify-center  hover:text-gold  font-bold transition duration-200 cursor-pointer">
            <Link href="/resources">Resources</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
