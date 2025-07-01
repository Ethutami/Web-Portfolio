'use client';
import { useEffect, useState } from "react";
import IUser from "@/interfaces/user.interface";
import { fetchUserById } from "@/services/user.service";
import Image from "next/image";

export default function Home() {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    const fetchuser = async () => {
      const dataUser = await fetchUserById(1);
      setUser(dataUser);
    };

    fetchuser();
  }, [])

  const scrollToBottom = () => {
    const bottomElement = document.getElementById('contact');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-16 pt-32">
      <>{/* Hero section */}
        <div className="hidden lg:flex lg:flex-row justify-between mb-40 md:hidden">
          <div className="max-w-[30%] content-center relative">
            <p>{user?.overview}
            </p>
            <button
              type="button"
              className="text-[#F7374F] hover:text-[#fff] border border-[#F7374F] hover:border-none hover:bg-[#F7374F] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit absolute bottom-0 left-0"
              onClick={scrollToBottom}>
              Contact Me
            </button>
          </div>
          <div className="justify-self-center self-center ">
            <Image src={user?.image_url || '/picture.jpg'} width={300} height={300} alt="picture" priority={false} className="rounded-full -full h-full object-cover" />
          </div>
          <div className="self-end w-[30%]">
            <p className="font-bold text-4xl ">{user?.name}</p>
            <p className="font-semibold ">{user?.job_title}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen lg:hidden">
          <div className="flex-1 text-center md:text-start mb-10 md:mr-20">
            <h1 className="text-4xl font-bold ">Hello.</h1>
            <p className="text-5xl font-bold  mb-8">I am Utami</p>
            <p className="leading-relaxed mb-12">{user?.overview} </p>
            <button
              type="button"
              className="inline-block text-[#F7374F] hover:text-[#fff] border border-[#F7374F] hover:border-none hover:bg-[#F7374F] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit"
              onClick={scrollToBottom}>
              Contact Me
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="justify-self-center self-center ">
              <Image src={user?.image_url || '/picture.jpg'} width={300} height={300} alt="picture" priority={false} className="rounded-full -full h-full object-cover" />
            </div>
          </div>
        </div>
      </>
      <>{/* about */}
      </>
    </div>
  );
}
