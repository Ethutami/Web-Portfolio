'use client';
import { ArrowDown, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";  
import { LuLinkedin, LuPhoneCall, } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { experience, portofolio, testimoni } from "@/db/datadummy";
import { OverflowComponent, } from "@/component/overflow.experience";
import { OverflowTestimoni } from "@/component/overflow.testimoni";
import { ImageSlider } from "@/component/slider";
import SkillSection from "./pages/skill/page";

export default function Home() {
  const scrollToBottom = () => {
    const bottomElement = document.getElementById('contact');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="">
      {/* general information */}
      <div className="grid grid-cols-3 px-32 pt-32 mb-40 bg-[#EEEEEE]">
        <div className="grid content-center relative">
          <p>I am a frontend engineer, specializing in website and mobile app optimization and accessibility. Experience in using UI component library, react, ES6, GIT and JavaScript supporting
              libraries.
          </p>
          <button 
            type="button" 
            className="text-[#D84040] hover:text-[#EEEEEE] border border-[#D84040] hover:bg-[#8E1616] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit absolute bottom-0 left-0"
            onClick={scrollToBottom}>
            Contact Me
          </button>
        </div>
        <div className="justify-self-center self-center ">
          <Image src={'/picture.jpg'} width={300} height={300} alt="picture" priority={false} className="rounded-full w-80 h-80 z-10"   />
        </div>
        <div className="self-end">
          <p className="font-bold text-4xl">Ethika Utami</p>
          <p className="font-semibold">Frontend Engineer</p>
        </div>
      </div>

      {/* about */}
      <div className="px-32 py-16 bg-[#1D1616] ">
        <p className="font-bold text-4xl text-[#EEEEEE]">About</p>
        <p className="text-[#EEEEEE] mt-11" >Bachelor&apos;s degree in Information Technology. 2 years of experience as a Programmer and have
          contributed to both large and small projects that have been registered in the Play Store and App
          Store. A year experience as Manual QA Tester. Have worked as part of teams ranging from 3 to 14
          members. Experience in using UI component library, react, ES6, GIT and JavaScript supporting
          libraries
        </p>
      </div>

      {/* portfolio */}
      <div className="px-32 py-16 bg-[#1D1616] ">
        <p className="font-bold text-4xl text-[#EEEEEE]">Portfolio</p>
        <ImageSlider props={portofolio}/>
      </div>

      {/* experience */}
      <div  className="px-32 py-16">
        <p className="font-bold text-4xl text-[#1D1616]">Experience</p>
        <OverflowComponent props={experience}/>
        <ArrowDown className="text-gray-400 relative bottom-0 left-1/2 animate-bounce" />
      </div>

      {/* skill */}
      <div  className="px-32 py-16">
        <SkillSection/>
      </div>

      {/* testimoni */}
      <div className="px-32 py-16 bg-[#1D1616] ">
        <p className="font-bold text-4xl text-[#EEEEEE]">Testimoni</p>
        <OverflowTestimoni props={testimoni}/>
      </div>

      {/* contact */}
      <div id="contact" className="px-32 py-16" >
        <div className="flex flex-row w-full justify-around " >
            <div style={{width: '20%', marginLeft:24}}  >
                <div style={{height:'4px',width: "100%",  backgroundColor: '#8E1616',}}></div>
            </div>
            <p className="font-bold text-4xl text-[#8E1616]">Contact</p>
            <div style={{width: '20%', marginRight:24 }}  >
                <div style={{height:'4px',width: "100%",  backgroundColor: '#8E1616',}}></div>
            </div>
        </div>
        <div className="flex flex-row w-full justify-around ">
          <Link href="https://www.linkedin.com/in/ethikautami/" className="flex items-end">
            <LuLinkedin size={36} color="#8E1616" className="mr-4"/>
            <p>Ethika Utami</p>
          </Link>
          <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ethikautamis@gmail.com" className="flex items-end">
            <MdOutlineEmail size={36} color="#8E1616" className="mr-4"/>
            <p>Ethikautamis@gmail.com</p>
          </Link>
          <Link href={`https://wa.me/6282231651307?text=Hi,%20I'm%20interesting%20with%20your%20portfolio, %20let's talk about it`} className="flex items-end">
            <LuPhoneCall size={36} color="#8E1616" className="mr-4"/>
            <p>082231651307</p>
          </Link>
          <div className="flex items-end">
            <MdOutlineLocationOn size={36} color="#8E1616" className="mr-4"/>
            <p>Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
