"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageData from "@/interfaces/portofolio.interface";


export const ImageSlider = ({props}: {props:imageData[]}) =>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const router = useRouter()

    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + props.length) % props.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.length);
    };

  return(
    <div className="relative w-full mx-auto mt-4">
      <div
        className="flex flex-row bg-slate-50"
      >
        <Image
          src={props[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="rounded-lg transition-all duration-500"
          style={{marginRight: 24, height: 400}}
          width={600}
          height={400} 
        />
        {
          props[currentIndex].des &&
            (<div>
              <p className="text-[#EEEEEE]">
                <b className="text-3xl">{props[currentIndex].title}</b> {props[currentIndex].des}
              </p>
              <button 
                onClick={() => router.push('/pages/portfolio.detail.page')}
                className="text-[#D84040] underline" 
                style={{marginTop:'24px'}}
                >View more
              </button>
            </div>)
        }
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2 p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 " />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 " />
      </button>
    </div>
  )
}