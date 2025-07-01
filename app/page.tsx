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
    <div className="">
      {/* general information */}
      <div className="grid grid-cols-3 px-32 pt-32 mb-40 bg-[#EEEEEE]">
        <div className="grid content-center relative text-[#090040]">
          <p>{user?.overview}
          </p>
          <button
            type="button"
            className="text-[#FFCC00] hover:text-[#FFCC00] border border-[#FFCC00] hover:border-none hover:bg-[#090040] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit absolute bottom-0 left-0"
            onClick={scrollToBottom}>
            Contact Me
          </button>
        </div>
        <div className="justify-self-center self-center ">
          <Image src={user?.image_url || '/picture.jpg'} width={300} height={300} alt="picture" priority={false} className="rounded-full w-80 h-80 z-10" />
        </div>
        <div className="self-end">
          <p className="font-bold text-4xl text-[#090040]">{user?.name}</p>
          <p className="font-semibold text-[#090040]">{user?.job_title}</p>
        </div>
      </div>
    </div>
  );
}
