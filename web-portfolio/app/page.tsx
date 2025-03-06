
import { OverflowComponent, } from "@/component/overflow";
import { ImageSlider } from "@/component/slider";
import { portofolio } from "@/db/datadummy";
import { ArrowDown, } from "lucide-react";
import Image from "next/image";  

export default function Home() {
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
            className="text-[#D84040] hover:text-[#EEEEEE] border border-[#D84040] hover:bg-[#8E1616] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit absolute bottom-0 left-0">
            Contact Me
          </button>
        </div>
        <div className="justify-self-center self-center">
          <Image src={'/picture.jpg'} width={300} height={400} alt="picture"/>
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
        <ImageSlider/>
      </div>

      {/* experience */}
      <div  className="px-32 py-16">
        <p className="font-bold text-4xl text-[#1D1616]">Portfolio</p>
        <OverflowComponent data={portofolio}/>
        <ArrowDown className="text-gray-400 relative bottom-0 left-1/2" />
      </div>

      {/* testimoni */}
      <div className="px-32 py-16 bg-[#1D1616] ">
        <p className="font-bold text-4xl text-[#EEEEEE]">Testimoni</p>
        
      </div>
    </div>
  );
}
