"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import imageData from "../../interfaces/portofolio.interface";
import createDateFormatter from "../../component/dateFormater";

export const ImageSlider = ({ props }: { props: imageData[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.length) % props.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.length);
  };

  const handleClick = () => {
    const itemData = props[currentIndex];
    const itemString = JSON.stringify(itemData);
    const encodedItem = encodeURIComponent(itemString);
    router.push(`/portofolio?item=${encodedItem}`);
  };

  if (!props || props.length === 0) {
    return <p className="text-[#EEEEEE] mt-11">Loading ...</p>;
  }

  const item = props[currentIndex];
  const date = createDateFormatter(props[currentIndex].project_start_date).YYYY().build()

  return (
    <div className="relative w-full mx-auto mt-0 md:mt-8" key={item.id}>
      <div className="flex flex-col lg:flex-row ">
        <Image
          src={item.banner_url}
          alt={`Slider Image ${currentIndex + 1}`}
          className="rounded-lg transition-all duration-500 animate-jump-in animate-once object-contain"
          style={{ marginRight: 24, height: 400 }}
          width={600}
          height={400}
        />
        <div className="md:mt-8 lg:mt-0">
          <p className="text-[#EEEEEE] animate-fade-left animate-delay-500">
            <b className="text-xl">{item.project_title}</b> {item.description}
          </p>
          <p className="text-[#EEEEEE] font-semibold text-lg mt-6 animate-fade-left animate-delay-500">Created at: {date}</p>
          <button
            onClick={handleClick}
            className="text-[#D84040] underline animate-fade-up animate-thrice"
            style={{ marginTop: '24px' }}
          >
            View more
          </button>
          <div className="flex flex-row flex-wrap mt-16 items-start pl-0">
            {item.stack_list?.map((icon, i) => (
              <div
                key={i}
                className="flex flex-col mb-6 items-center basis-1/3 sm:basis-1/2 md:basis-1/4"
              >
                <div className="w-[60px] h-[60px] bg-[#fff] rounded-full p-2 flex items-center justify-center animate-pulse animate-infinite">
                  <Image
                    src={`/${icon}-icon.png`}
                    width={50}
                    height={50}
                    alt={`${icon} icon`}
                    className="object-contain animate-wiggle animate-infinite"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl mx-1 -translate-y-1/2 p-2 group"
        onClick={prevSlide}
      >
        <CircleChevronLeft className="text-[#D84040] animate-fade-left animate-infinite" size={42} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -translate-y-1/2 p-2 group"
        onClick={nextSlide}
      >
        <CircleChevronRight className="text-[#D84040] animate-fade-right animate-infinite" size={42} />
      </button>
    </div>
  );
};
