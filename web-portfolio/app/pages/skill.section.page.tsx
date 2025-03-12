import Image from "next/image";

export function SkillSection() {
    return(
      <div>
        <div className="flex flex-row justify-around mb-20" >
          <div className="flex flex-col items-center">
            <Image src="/js-icon.png" width={100} height={100} alt="icon"/>
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/ts-icon.png" width={150} height={150} alt="icon"/>
            <p>Typescript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/html-icon.png" width={150} height={150} alt="icon"/>
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/git-icon.png" width={100} height={100} alt="icon"/>
            <p>Git Source Control</p>
          </div>
        </div>
        <div className="flex flex-row justify-around mb-20" >
          <div className="flex flex-col items-center">
            <Image src="/next-js-icon.png" width={100} height={100} alt="icon"/>
            <p>Nextjs Framework</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/react-icon.png" width={150} height={150} alt="icon"/>
            <p>React Framework</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/redux-icon.png" width={100} height={100} alt="icon"/>
            <p>Redux State Management</p>
          </div>
        </div>
        <div className="flex flex-row justify-around" >
          <div className="flex flex-col items-center">
            <Image src="/mui-icon.png" width={100} height={100} alt="icon"/>
            <p>MUI</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/tailwind-icon.png" width={100} height={100} alt="icon"/>
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/flowbite-icon.png" width={100} height={100} alt="icon"/>
            <p>Flowbite</p>
          </div>
        </div>
      </div>
    )
}