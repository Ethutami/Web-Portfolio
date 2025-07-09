'use client';
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { LuLinkedin, LuPhoneCall } from "react-icons/lu";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { getExperiences } from "@/store/experience.action";
import { getUser } from "@/store/user.action";
import { getPortfolios } from "@/store/portofolio.action";

import { OverflowComponent } from "./experiences/overflow.experience";
import { ImageSlider } from "./portofolio/slider";
import SkillSection from "./skill/page";

const icons = [{
  icon: '/mobile-icon.png',
  width: '60px',
  height: '70px',
  title: 'Mobile Development'
},
{
  icon: '/web-icon.png',
  width: '65px',
  height: '50px',
  title: 'Web Development',
},
{
  icon: '/be-icon.png',
  width: '60px',
  height: '50px',
  title: 'Backend Development'
}
]

export default function Home() {
  const dispatch = useAppDispatch();
  const { experience, loading: experienceLoading, error: experienceError } = useSelector(
    (state: RootState) => state.experience
  );
  const { user, loading: userLoading, error: userError } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    try {
      dispatch(getExperiences());
      dispatch(getUser());
      dispatch(getPortfolios())
    } catch (error) {
      console.log(error);
    }
  }, [dispatch,]);

  const scrollToBottom = () => {
    const bottomElement = document.getElementById('contact');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-8 lg:px-16 md:px-16 lg:pt-26">
      <>{/* Hero section */}
        {userLoading && <p>Loading...</p>}
        {userError && <p>Error: {userError}</p>}
        <div className="hidden lg:flex lg:flex-row justify-between mb-40 md:hidden">
          <div className="max-w-[30%] content-center relative">
            <p>{user?.overview}
            </p>
            <button
              type="button"
              className="animate-fade-right animate-thrice text-[#F7374F] hover:text-[#fff] border border-[#F7374F] hover:border-none hover:bg-[#F7374F] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit absolute bottom-0 left-0"
              onClick={scrollToBottom}>
              Contact Me
            </button>
          </div>
          <div className="justify-self-center self-center ">
            <Image src={user?.image_url || '/user.png'} width={300} height={300} alt="picture" priority={true} className="rounded-full -full h-full object-cover animate-jump" />
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
              className="animate-fade-right animate-thrice inline-block text-[#F7374F] hover:text-[#fff] border border-[#F7374F] hover:border-none hover:bg-[#F7374F] rounded-lg px-5 py-2.5 text-center me-2 mb-2 w-fit"
              onClick={scrollToBottom}>
              Contact Me
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="justify-self-center self-center ">
              <Image src={user?.image_url || '/user.png'} width={300} height={300} alt="picture" priority={true} className="rounded-full -full h-full object-cover animate-jump" />
            </div>
          </div>
        </div>
      </>
      <>{/* about */}
        <div className="flex mt-16 md:mt-0 lg:flex-row lg:py-20 flex-col-reverse ">
          <div className="lg:w-1/3 mr-26 w-full">
            <div className="flex lg:flex-col md:flex-row justify-center ">
              {icons.map((item, i) => {
                return (
                  <div className="flex flex-col md:flex-row md:items-center lg:flex-row lg:items-center mb-8 md:mr-8 w-full" key={i}>
                    <div style={{ height: 70, width: '4px', backgroundColor: '#8E1616', marginRight: 42, }} className="hidden lg:block"></div>
                    <div className="md:w-[60px] lg:w-[20%] lg:mr-10 md:mr-4 mb-4 animate-pulse animate-once animate-delay-500">
                      <Image src={item.icon} alt="icon"
                        width={100}
                        height={100}
                        priority={false}
                        style={{ width: `${item.width}`, height: `${item.height}` }}
                        className="object-contain" />
                    </div>
                    <h3 className="lg:text-lg md:text-sm text-xs font-semibold animate-fade-left animate-delay-500">{item.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="lg:w-3/5 mb-20">
            <p className="font-bold text-4xl text-[#EEEEEE] animate-fade-left animate-delay-500">About</p>
            <p className="text-[#EEEEEE] mt-11 animate-fade-left animate-delay-2000" >{user?.about}</p>
          </div>
        </div>
      </>
      <>{/* portfolio */}
        <div className="py-16">
          <p className="font-bold text-4xl text-[#EEEEEE] animate-fade-left">Portfolio</p>
          <ImageSlider />
        </div>
      </>
      <>{/* experience */}
        <div className="py-16">
          <p className="font-bold text-4xl">Experience</p>
          {experienceLoading && <p>Loading...</p>}
          {experienceError && <p>Error: {experienceError}</p>}
          <OverflowComponent props={experience} />
          <ArrowDown className="text-gray-400 relative bottom-0 left-1/2 animate-bounce" />
        </div>
      </>
      <>{/* skill */}
        <div className="py-16">
          <SkillSection />
        </div>
      </>
      <> {/* contact */}
        <div id="contact" className="py-16 w-full">
          <div className="flex justify-center items-center mb-10 w-full">
            <div className="hidden sm:block w-[20%] mx-6">
              <div className="h-1 bg-[#8E1616] w-full"></div>
            </div>
            <p className="font-bold text-4xl text-center">Contact</p>
            <div className="hidden sm:block w-[20%] mx-6">
              <div className="h-1 bg-[#8E1616] w-full"></div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 max-w-[320px] sm:max-w-[600px] lg:max-w-[1200px] mx-auto px-4"
          >
            {[{
              href: "https://www.linkedin.com/in/ethikautami/",
              icon: <LuLinkedin size={36} color="#8E1616" />,
              text: "Ethika Utami"
            }, {
              href: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ethikautamis@gmail.com",
              icon: <MdOutlineEmail size={36} color="#8E1616" />,
              text: "Ethikautamis@gmail.com"
            }, {
              href: "https://wa.me/6282231651307?text=Hi,%20I'm%20interesting%20with%20your%20portfolio,%20let's%20talk%20about%20it",
              icon: <LuPhoneCall size={36} color="#8E1616" />,
              text: "082231651307"
            }].map(({ href, icon, text }) => (
              <Link key={text} href={href} className="w-full max-w-[280px] mx-auto">
                <div className="grid grid-cols-[40px_1fr] items-center gap-x-4">
                  <div className="flex justify-center">{icon}</div>
                  <p className="text-left">{text}</p>
                </div>
              </Link>
            ))}
            <div className="w-full max-w-[280px] mx-auto">
              <div className="grid grid-cols-[40px_1fr] items-center gap-x-4">
                <div className="flex justify-center">
                  <MdOutlineLocationOn size={36} color="#8E1616" />
                </div>
                <p className="text-left">Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
