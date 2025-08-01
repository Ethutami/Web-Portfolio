"use client";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { RootState } from "@/store";

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  const { portfolio, loading: portfolioLoading, error: portfolioError } = useSelector(
    (state: RootState) => state.portfolio
  );

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolio.length) % portfolio.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolio.length);
  };

  const handleClick = () => {
    const itemData = portfolio[currentIndex];
    const itemString = JSON.stringify(itemData);
    const encodedItem = encodeURIComponent(itemString);
    router.push(`/portofolio?item=${encodedItem}`);
  };

  if (!portfolio || portfolio.length === 0) {
    return <p className="text-[#EEEEEE] mt-11">Loading ...</p>;
  }

  const item = portfolio[currentIndex]

  return (
    <div className="relative w-full mx-auto mt-8" key={item.id}>
      {portfolioLoading && <p>Loading...</p>}
      {portfolioError && <p>Error: {portfolioError}</p>}
      <div className="flex flex-col lg:flex-row ">
        <Image
          src={item.banner_url}
          alt={`Slider Image ${currentIndex + 1}`}
          className="h-auto w-screen lg:w-auto lg:mr-24 transition-all duration-500 animate-jump-in animate-once object-contain"
          width={600}
          height={400}
        />
        <div className="mt-8 lg:mt-0">
          <p className="animate-fade-left animate-delay-500">
            <b className="highlight-section-title">{item.project_title}</b> {item.description}
          </p>
          <div className="flex items-center mt-6">
            <button
              onClick={handleClick}
              className="action_btn mr-2"
            >
              See Details
            </button>
            <p className="text-[#91C8E4] dark:text-[#EBD3F8] animate-fade-right animate-infinite">&rarr;</p>    {/* arrow right */}
          </div>
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
        <CircleChevronLeft className="icon animate-fade-left animate-infinite" size={42} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -translate-y-1/2 p-2 group"
        onClick={nextSlide}
      >
        <CircleChevronRight className="icon animate-fade-right animate-infinite" size={42} />
      </button>
    </div>
  );
};
