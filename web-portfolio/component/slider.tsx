"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
    src: string;
    des: string;
    title: string;
  }

// Image data array
const images: ImageData[] = [
    {
      title: 'Cooksy',
      src: "/cooksy.jpg",
      des: "adalah aplikasi resep masakan yang dirancang sebagai proyek pribadi untuk mengasah keterampilan dalam pengembangan aplikasi mobile. Aplikasi ini menyediakan berbagai resep masakan yang lengkap dan mudah diakses, serta dilengkapi dengan fitur-fitur praktis untuk membantu pengguna dalam proses memasak."
      
    },
    {
      title: 'E-Commerce',
      src: '/ecommerce.png',
      des: 'App adalah aplikasi belanja online yang dikembangkan sebagai proyek pribadi untuk meningkatkan keterampilan dalam pengembangan aplikasi mobile. Terinspirasi oleh platform terkemuka seperti Zalora, aplikasi ini dirancang untuk memberikan pengalaman berbelanja yang intuitif, menarik, dan efisien bagi pengguna di seluruh dunia.'
    },
    {
      title: 'Travelook',
      src: '/travelook.png',
      des: 'adalah aplikasi inovatif yang dirancang untuk memudahkan pengguna dalam mencari dan memesan villa di berbagai tempat wisata. Dengan antarmuka yang ramah pengguna dan fitur pencarian yang efisien, Travelook memungkinkan pengguna untuk menemukan villa yang sesuai dengan kebutuhan dan preferensi mereka, baik untuk liburan maupun perjalanan singkat.   '
    },
  ];

export const ImageSlider = () =>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  return(
    <div className="relative w-full mx-auto mt-4">
      <div
        className="flex flex-row bg-slate-50"
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="rounded-lg transition-all duration-500"
          style={{marginRight: 24, height: 400}}
          width={600}
          height={400}

        />
        {
          images[currentIndex].des &&
            (<div>
              <p className="text-[#EEEEEE]">
                <b className="text-3xl">{images[currentIndex].title}</b> {images[currentIndex].des}
              </p>
              <p 
                className="text-[#D84040] underline"
                style={{marginTop:'24px'}}
                >View more</p>
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
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          >
          </div>
        ))}
      </div>
    </div>
  )
}