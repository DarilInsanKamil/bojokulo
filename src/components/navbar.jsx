"use client";
import { useState } from "react";
import Navigation from "./navigation";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2 flex justify-between fixed w-full lg:px-10 px-5 top-0 z-10 ">
      {/* <img
        src="https://i.scdn.co/image/ab6761610000f178d93190413b4f40fcc2c3d81c"
        className="lg:w-[60px] w-[42px] h-auto object-contain rounded-full z-50"
      /> */}
      <h3
        className={`text-[32px] font-semibold tracking-tighter text-black z-50 ${
          !isOpen ? "text-white" : "text-black"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(!open)}>
          IU
        </Link>
      </h3>
      <button
        className="z-50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            className={!isOpen ? "text-white" : "text-black"}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </button>
      <div
        className={`absolute -top-5 right-0 left-0 pw-full bg-white flex justify-center items-center  ${
          isOpen && "translate-y-5 "
        } h-screen -translate-y-full transition-all duration-500`}
      >
        <Navigation onClick={() => setIsOpen(!open)} />
      </div>
    </nav>
  );
};

export default Navbar;
