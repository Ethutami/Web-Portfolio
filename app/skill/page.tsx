import Image from "next/image";

export default function SkillSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 place-items-center">
      <div className="flex flex-col items-center">
        <Image src="/js-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-5">JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/ts-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-3">TypeScript</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/html-icon.png" width={100} height={100} alt="icon" className="w-[100px] h-[100px] object-contain" />
        <p className="font-semibold mt-4">HTML</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/nodeJS-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">NodeJS</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/expressJs-icon.png" width={60} height={60} alt="icon" />
        <p className="font-semibold">ExpressJS</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/react-icon.png" width={75} height={75} alt="icon" />
        <p className="font-semibold">React</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/nextJs-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/mui-icon.png" width={50} height={50} alt="icon" className="w-[50px] h-[50px] object-contain" />
        <p className="font-semibold mt-6">MUI</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/tailwind-icon.png" width={50} height={50} alt="icon" className="w-[50px] h-[50px] object-contain" />
        <p className="font-semibold mt-6">Tailwind</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/flowbite-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-4">Flowbite</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/git-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">Git</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/github-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">GitHub</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/gitlab-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">GitLab</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/vercel-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">Vercel</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/postman-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">Postman</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/postgreSQL-icon.png" width={50} height={50} alt="icon" />
        <p className="font-semibold mt-6">PostgreSQL</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/redux-icon.png" width={50} height={50} alt="icon" className="w-[50px] h-[50px] object-contain" />
        <p className="font-semibold mt-6">Redux</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/axios-icon.png" width={50} height={50} alt="icon" className="w-[50px] h-[50px] object-contain" />
        <p className="font-semibold mt-6">Axios</p>
      </div>
    </div>
  )
}