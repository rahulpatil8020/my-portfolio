import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      id="home"
      className="h-[85vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">RAHUL!!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
            I am currently pursuing Masters in Computer Science in Cal State
            East Bay in California. I am fullstack developer with expertise in
            React, Typescript, Node, Express, MongoDB and React Native. I am
            currently looking for a fulltime opportunity to work as a software
            developer
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a
              href="https://drive.google.com/drive/folders/1BzBSfJED6OcfxEBVcN4mMSMPa74VpCoI?usp=sharing"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Download Cv</p>{" "}
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />{" "}
              </button>
            </a>
            <a
              href="https://www.youtube.com/channel/UCUmadAgf1xf2qnIVi9up2cQ"
              target="_blank"
            >
              <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                <p className="text-[20px] font-semibold text-white">
                  Watch the Video
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
