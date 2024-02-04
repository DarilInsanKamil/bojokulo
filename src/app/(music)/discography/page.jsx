"use client";
import Link from "next/link";
import EmbedSpotify from "@/components/embedSpotify";
import { useEffect, useRef } from "react";

const Page = () => {
  let videoRef = useRef();
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
      <section className="h-[80vh] flex justify-center items-center bg-white/25 rounded-br-[8%] rounded-bl-[8%]">
        <div className="py-3 relative group cursor-pointer mix-blend-difference">
          <Link
            href="https://youtu.be/JleoAppaxi0?si=SSSPShOXNoqVpUoz"
            target="_blank"
            className=""
          >
            <h1 className="font-bold lg:text-6xl text-5xl tracking-tighter text-white mb-1">
              Love wins all
            </h1>
            <div className="w-[60%] border-b border-white "></div>
            <p className="mt-1 tracking-tighter text-white">Love wins all</p>
            <div className="absolute -top-2 -right-8 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-8 -translate-x-8 duration-200 transition-all">
              <Arrow />
            </div>
          </Link>
        </div>
        <video
          loop
          autoPlay
          muted
          ref={videoRef}
          className="fixed right-0 top-0 min-w-[100%] h-[80vh] -z-10 object-cover bg-center mix-blend-multiply bg-blend-multiply rounded-br-[8%] rounded-bl-[8%]"
        >
          <source src="/loopedit.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="grid grid-cols-12 mt-10">
        <div className="col-start-1 col-span-12 text-center">
          <h1 className="text-2xl font-bold tracking-tighter">Discography</h1>
        </div>
      </section>
      {/* <EmbedSpotify /> */}
    </main>
  );
};

export default Page;

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
