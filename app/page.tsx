'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import IUser from "@/interfaces/user.interface";
import imageData from "@/interfaces/portofolio.interface";
import idExperience from "@/interfaces/experience.interface";
import { fetchUserById } from "@/services/user.service";
import { getSortedPortfolio } from "@/services/portfolio.service";
import { fetchExperience } from "@/services/experience.service";
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
  const [user, setUser] = useState<IUser>()
  const [portfolio, setPortofolio] = useState<imageData[]>()
  const [experience, setExperience] = useState<idExperience[]>()

  useEffect(() => {
    const fetchuser = async () => {
      const dataUser = await fetchUserById(1);
      const dataPortfolios = await getSortedPortfolio()
      const dataExperiences = await fetchExperience()
      setUser(dataUser);
      setPortofolio(dataPortfolios)
      setExperience(dataExperiences)
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
    <div className="px-8 lg:px-16 md:px-16 lg:pt-26">
      <>{/* Hero section */}
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
            <Image src={user?.image_url || '/user.png'} width={300} height={300} alt="picture" priority={false} className="rounded-full -full h-full object-cover animate-jump" />
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
              <Image src={user?.image_url || '/user.png'} width={300} height={300} alt="picture" priority={false} className="rounded-full -full h-full object-cover animate-jump" />
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
          {portfolio ? <ImageSlider props={portfolio} /> : ''}
        </div>
      </>
      <>{/* experience */}
        <div className="py-16">
          <p className="font-bold text-4xl">Experience</p>
          {experience ? <OverflowComponent props={experience} /> : ''}
          <ArrowDown className="text-gray-400 relative bottom-0 left-1/2 animate-bounce" />
        </div>
      </>
      <>{/* skill */}
        <div className="py-16">
          <SkillSection />
        </div>
      </>
    </div>
  );
}
