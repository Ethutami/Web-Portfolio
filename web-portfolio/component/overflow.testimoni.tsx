"use client";
import idTestimoni from "@/interfaces/testimoni.interface";
// import idTestimoni from "@/interfaces/testimoni.interface"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const OverflowTestimoni  = ({props}: {props:idTestimoni[]})=>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
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
        {
            props[currentIndex].desc &&
                (<div className="flex flex-row w-full" style={{marginBottom: 42,}}>
                    <div style={{width: '15%', }}  >
                        <div style={{height:'4px',width: 150,  backgroundColor: '#8E1616',}}></div>
                    </div>
                    <div  style={{width: '80%', }}>
                        <p className="text-[#EEEEEE]">{props[currentIndex].desc}</p>
                        <div style={{marginTop:36}}>
                            <p className="font-bold text-2xl text-[#EEEEEE]">{props[currentIndex].name}</p>
                            <p className="text-base text-[#EEEEEE]">{props[currentIndex].job}</p>
                            <div style={{height:'4px',width: 100,  backgroundColor: '#8E1616',}}></div>
                        </div>
                    </div>
                </div>)
        }
       
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