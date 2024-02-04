"use client";
import Link from "next/link";
import Sosmed from "@/components/sosmed";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef();
  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      if (isMounted && videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    return () => {
      isMounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <main>
      <section className="bg-black/50">
        <video
          loop
          autoPlay
          muted
          ref={videoRef}
          className="fixed right-0 bottom-0 min-w-[100%] min-h-[100%] -z-10 object-cover mix-blend-multiply bg-blend-multiply"
        >
          <source src="/loopedit.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </section>
      <section className=" min-h-screen flex justify-start lg:items-center items-end lg:px-10 px-5">
        <div className="py-3 relative group cursor-pointer ">
          <Link
            href="https://youtu.be/JleoAppaxi0?si=SSSPShOXNoqVpUoz"
            target="_blank"
            className="mix-blend-difference"
          >
            <h1 className="font-bold lg:text-6xl text-5xl tracking-tighter text-white mb-1">
              Love wins all
            </h1>
            <div className="w-[70%] border-b border-white"></div>
            <p className="mt-1 tracking-tighter text-white">Love wins all</p>
            <div className="absolute -top-2 -right-8 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-8 -translate-x-8 duration-200 transition-all">
              <Arrow />
            </div>
          </Link>
        </div>
      </section>
      <section className="absolute bottom-3 left-0 right-0 w-full text-white lg:flex hidden justify-between items-center px-10">
        <Sosmed />
        <p className="font-semibold tracking-tight text-xs">
          Copyright © EDAM ENTERTAINMENT Co., Ltd. All rights reserved.
        </p>
      </section>
    </main>
  );
}

const Arrow = () => {
  return (
    <div className=" text-white rounded-full border-2 border-white w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0px"
        height="0px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right group-hover:w-[18px] group-hover:h-[18px]"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  );
};
