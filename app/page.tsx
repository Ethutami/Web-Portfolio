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

const icons = [
  {
    icon: (
      <svg
        width="60"
        height="70"
        viewBox="0 0 120 133"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black dark:text-white"
      >
        <rect x="2" y="2" width="73" height="129" rx="6" stroke="currentColor" strokeWidth="4" />
        <rect x="12" y="14" width="52" height="97" stroke="currentColor" strokeWidth="2" />
        <line x1="28" y1="8.5" x2="49" y2="8.5" stroke="currentColor" />
        <rect x="25" y="119" width="26" height="5" rx="2.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M22.8679 65.2486V63.2031L32.5838 58.7145V61.2358L25.6804 64.1974L25.7585 64.0625V64.3892L25.6804 64.2543L32.5838 67.2159V69.7372L22.8679 65.2486ZM41.7156 54.7727L37.0281 72.1875H34.7766L39.4641 54.7727H41.7156ZM53.619 65.2486L43.9031 69.7372V67.2159L50.8065 64.2543L50.7283 64.3892V64.0625L50.8065 64.1974L43.9031 61.2358V58.7145L53.619 63.2031V65.2486Z"
          fill="currentColor"
        />
      </svg>

    ),
    title: 'Mobile Development'
  },
  {
    icon: (
      <svg width="65" height="50" viewBox="0 0 133 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1_1_65" maskUnits="userSpaceOnUse" x="40" y="24" width="53" height="31" fill="black">
          <rect fill="white" x="40" y="24" width="53" height="31" />
          <path d="M41.9886 42.3977V39.125L57.5341 31.9432V35.9773L46.4886 40.7159L46.6136 40.5V41.0227L46.4886 40.8068L57.5341 45.5455V49.5795L41.9886 42.3977ZM72.1449 25.6364L64.6449 53.5H61.0426L68.5426 25.6364H72.1449ZM91.1903 42.3977L75.6449 49.5795V45.5455L86.6903 40.8068L86.5653 41.0227V40.5L86.6903 40.7159L75.6449 35.9773V31.9432L91.1903 39.125V42.3977Z" />
        </mask>
        <path d="M41.9886 42.3977V39.125L57.5341 31.9432V35.9773L46.4886 40.7159L46.6136 40.5V41.0227L46.4886 40.8068L57.5341 45.5455V49.5795L41.9886 42.3977ZM72.1449 25.6364L64.6449 53.5H61.0426L68.5426 25.6364H72.1449ZM91.1903 42.3977L75.6449 49.5795V45.5455L86.6903 40.8068L86.5653 41.0227V40.5L86.6903 40.7159L75.6449 35.9773V31.9432L91.1903 39.125V42.3977Z" fill="currentColor" />
        <path d="M15 2H118C121.314 2 124 4.68629 124 8V75H9V8C9 4.68629 11.6863 2 15 2Z" stroke="currentColor" strokeWidth="4" />
        <path d="M131.5 75.5V80C131.5 83.5899 128.59 86.5 125 86.5H8C4.41015 86.5 1.5 83.5898 1.5 80V75.5H131.5Z" stroke="currentColor" strokeWidth="3" />
        <path d="M86.4131 78.5C86.207 79.0823 85.6529 79.5 85 79.5H48C47.3471 79.5 46.793 79.0823 46.5869 78.5H86.4131Z" fill="white" stroke="currentColor" />
      </svg>


    ),
    title: 'Web Development',
  },
  {
    icon: (
      <svg width="60" height="50" viewBox="0 0 133 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="129" height="84" rx="6" stroke="currentColor" strokeWidth="4" />
        <line y1="69" x2="133" y2="69" stroke="currentColor" strokeWidth="4" />
        <path d="M122 40.625C122 42.489 117.971 44 113 44C108.029 44 104 42.489 104 40.625M122 40.625C122 38.761 117.971 37.25 113 37.25C108.029 37.25 104 38.761 104 40.625M122 40.625V56.375C122 58.2425 118 59.75 113 59.75C108 59.75 104 58.2425 104 56.375V40.625M122 48.5C122 50.3675 118 51.875 113 51.875C108 51.875 104 50.3675 104 48.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <g clipPath="url(#clip0_1_70)">
          <path d="M27.5 25.25C29.364 25.25 30.875 23.7949 30.875 22C30.875 20.2051 29.364 18.75 27.5 18.75C25.636 18.75 24.125 20.2051 24.125 22C24.125 23.7949 25.636 25.25 27.5 25.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="... (path panjang di sini tetap sama) ..." stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <mask id="path-5-outside-1_1_70" maskUnits="userSpaceOnUse" x="66" y="42" width="26" height="16" fill="black">
          <rect fill="white" x="66" y="42" width="26" height="16" />
          <path d="..." />
        </mask>
        <path d="..." fill="currentColor" />
        <path d="..." fill="currentColor" mask="url(#path-5-outside-1_1_70)" />
        <line x1="9" y1="43.5" x2="57" y2="43.5" stroke="currentColor" />
        <line x1="9" y1="48.5" x2="57" y2="48.5" stroke="currentColor" />
        <line x1="9" y1="58.5" x2="57" y2="58.5" stroke="currentColor" />
        <line x1="9" y1="53.5" x2="57" y2="53.5" stroke="currentColor" />
        <line x1="66" y1="8.5" x2="123" y2="8.5" stroke="currentColor" />
        <line x1="66" y1="13.5" x2="123" y2="13.5" stroke="currentColor" />
        <line x1="66" y1="23.5" x2="123" y2="23.5" stroke="currentColor" />
        <line x1="66" y1="28.5" x2="123" y2="28.5" stroke="currentColor" />
        <line x1="66" y1="18.5" x2="123" y2="18.5" stroke="currentColor" />
        <path d="M51 95H81C84.3137 95 87 97.6863 87 101V104H45V101C45 97.7898 47.5211 95.1684 50.6914 95.0078L51 95Z" stroke="currentColor" strokeWidth="4" />
        <defs>
          <clipPath id="clip0_1_70">
            <rect width="27" height="26" fill="white" transform="translate(14 9)" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Backend Development'
  }
];

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
    <div className="px-6 lg:px-16 md:px-16 lg:pt-26">
      <>{/* Hero section */}
        {userLoading && <p>Loading...</p>}
        {userError && <p>Error: {userError}</p>}
        <div className="hidden lg:flex lg:flex-row justify-between mb-40 md:hidden">
          <div className="max-w-[30%] content-center relative">
            <p>{user?.overview}</p>
            <button
              type="button"
              className="default_btn animate-fade-right animate-thrice text-center  w-fit absolute bottom-0 left-0"
              onClick={scrollToBottom}>
              Contact Me
            </button>
          </div>
          <div className="justify-self-center self-center ">
            <Image src={user?.image_url || '/user.png'} width={300} height={300} alt="picture" priority={true} className="rounded-full -full h-full object-cover animate-jump" />
          </div>
          <div className="self-end w-[30%]">
            <p className="title ">{user?.name}</p>
            <p className="section-title">{user?.job_title}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen lg:hidden">
          <div className="flex-1 text-center md:text-start mb-10 md:mr-20">
            <h1 className="text-4xl font-bold ">Hello.</h1>
            <p className="text-5xl font-bold  mb-8">I am Utami</p>
            <p className="leading-relaxed mb-12">{user?.overview} </p>
            <button
              type="button"
              className="default_btn animate-fade-right animate-thrice inline-block text-center mb-2 w-fit"
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
        <div className="flex flex-col-reverse mt-16 md:mt-0 lg:flex-row lg:py-20  ">
          <div className="lg:w-1/3 mr-26 w-full">
            <div className="flex flex-col justify-center ">
              {icons.map((item, i) => (
                <div
                  // className="flex flex-col md:flex-row md:items-center lg:flex-row lg:items-center mb-8 md:mr-8 w-full"
                  className="flex flex-row w-full mb-2 items-center-safe "
                  key={i}
                >
                  <div className="hidden md:block lg:block h-20 w-1 mr-8 bg-[#4F98CA] dark:bg-[#AD49E1]"></div>
                  <div
                    className="mr-8 md:mr-0 w-1/5 lg:w-1/3 animate-pulse animate-once animate-delay-500"
                  >
                    {item.icon}
                  </div>

                  <h3 className="animate-fade-left animate-delay-500">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-3/5 mb-20">
            <p className="section-title animate-fade-left animate-delay-500">About</p>
            <p className="mt-6 animate-fade-left animate-delay-2000" >{user?.about}</p>
          </div>
        </div>
      </>
      <>{/* portfolio */}
        <div className="mt-16 md:py-16 ">
          <p className="section-title animate-fade-left">Portfolio</p>
          <ImageSlider />
        </div>
      </>
      <>{/* experience */}
        <div className="py-16">
          <p className="section-title">Experience</p>
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
              icon: <LuLinkedin size={36} className="icon" />,
              text: "Ethika Utami"
            }, {
              href: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ethikautamis@gmail.com",
              icon: <MdOutlineEmail size={36} className="icon" />,
              text: "Ethikautamis@gmail.com"
            }, {
              href: "https://wa.me/6282231651307?text=Hi,%20I'm%20interesting%20with%20your%20portfolio,%20let's%20talk%20about%20it",
              icon: <LuPhoneCall size={36} className="icon" />,
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
                  <MdOutlineLocationOn size={36} className="icon" />
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
