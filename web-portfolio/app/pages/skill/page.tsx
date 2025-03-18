import Image from "next/image";

export default function SkillSection() {
    return(
      <div>
        <div className="flex flex-row justify-around mb-20" >
          <div className="flex flex-col items-center">
            <Image src="/js-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-5">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/ts-icon.png" width={150} height={150} alt="icon"/>
            <p className="font-semibold mt-3">Typescript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/html-icon.png" width={150} height={150} alt="icon"/>
            <p className="font-semibold mt-4">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/git-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-6">Git Source Control</p>
          </div>
        </div>
        <div className="flex flex-row justify-around mb-20" >
          <div className="flex flex-col items-center">
            <Image src="/next-js-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-6">Nextjs Framework</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/react-icon.png" width={150} height={150} alt="icon"/>
            <p className="font-semibold">React Framework</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/redux-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-6">Redux State Management</p>
          </div>
        </div>
        <div className="flex flex-row justify-around" >
          <div className="flex flex-col items-center">
            <Image src="/mui-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-6">MUI</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/tailwind-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-6">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/flowbite-icon.png" width={100} height={100} alt="icon"/>
            <p className="font-semibold mt-4">Flowbite</p>
          </div>
        </div>
      </div>
    )
}