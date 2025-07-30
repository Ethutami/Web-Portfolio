'use client';

import { Suspense, useEffect, useState } from "react";
import Image from "next/image"
import { useSearchParams } from 'next/navigation';
import imageData from "../../interfaces/portofolio.interface";
import createDateFormatter from "../../component/dateFormater";

function Detail() {
    const searchParams = useSearchParams();
    const itemString = searchParams.get('item');

    const [data, setData] = useState<imageData>();
    const [activeTab, setActiveTab] = useState("About");

    useEffect(() => {
        if (itemString) {
            try {
                const decodedItemString = decodeURIComponent(itemString);
                const parsedItem = JSON.parse(decodedItemString);
                setData(parsedItem);
            } catch (error) {
                console.error('Gagal parsing item:', error);
            }
        }
    }, [itemString])

    const tabs = ["About", "Feature", "Stack"];
    const startDate = createDateFormatter(data?.project_start_date || '').MMMYYY().build()
    const endDate = createDateFormatter(data?.project_end_date || '').MMMYYY().build()


    return (
        <div className="px-8 pt-16 lg:px-24 lg:pt-24 mb-40">
            <section className="hero_section flex gap-4">
                <div className="w-1/3 flex flex-col justify-center">
                    <p className="font-bold text-3xl">{data?.project_title}</p>
                    <p className="muted mt-2">UI Design</p>
                    <div className="mt-16 ">
                        <a href={data?.ui_source} target="_blank" className="default_button inline-flex items-center justify-center">
                            <svg aria-hidden="true" className="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                            <span className="w-full">Open with Figma</span>
                        </a>
                    </div>
                </div>
                <div className="w-2/3 bg-[#AD49E1] ml-20">
                    {
                        data?.banner_url &&
                        <Image
                            src={data.banner_url}
                            alt="Banner"
                            className="w-full h-auto object-contain"
                            width={600}
                            height={400}
                        />
                    }
                </div>
            </section>
            <section className="mt-24">
                <div className="flex space-x-6 border-b border-[#9AA6B2]">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                const targetId = tab.toLowerCase();
                                const element = document.getElementById(targetId);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className={`pb-2 text-lg font-medium ${activeTab === tab
                                ? "border-b-2 border-[#AD49E1]"
                                : "text-[#9AA6B2] hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <p className="mt-6 font-normal">{data?.detail_description}</p>
                <p className="mt-6">{data?.project_result}</p>
                <p className="font-semibold mt-6">App Development Period : <span className="font-normal">{startDate == endDate ? startDate : `${startDate} - ${endDate}`}</span></p>
                <div className="mt-10">
                    <a href={data?.repository_url} target="_blank" className="secound_button inline-flex items-center justify-center">
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.5C6.20156 1.5 1.5 6.31875 1.5 12.2672C1.5 17.025 4.50937 21.0563 8.68125 22.4813C9.20625 22.5797 9.39844 22.2469 9.39844 21.9609C9.39844 21.7031 9.38906 21.0281 9.38437 20.1281C6.46406 20.7797 5.84531 18.6844 5.84531 18.6844C5.36719 17.4422 4.67813 17.1094 4.67813 17.1094C3.72656 16.4391 4.74844 16.4531 4.74844 16.4531C5.80313 16.5281 6.35625 17.5641 6.35625 17.5641C7.29375 19.2094 8.8125 18.7359 9.4125 18.4594C9.50625 17.7656 9.77812 17.2875 10.0781 17.0203C7.74844 16.7484 5.29688 15.825 5.29688 11.7C5.29688 10.5234 5.70469 9.5625 6.375 8.8125C6.26719 8.54062 5.90625 7.44375 6.47812 5.9625C6.47812 5.9625 7.35938 5.67187 9.36563 7.06406C10.2047 6.825 11.1 6.70781 11.9953 6.70312C12.8859 6.70781 13.7859 6.825 14.625 7.06406C16.6312 5.67187 17.5078 5.9625 17.5078 5.9625C18.0797 7.44375 17.7188 8.54062 17.6109 8.8125C18.2813 9.56719 18.6891 10.5281 18.6891 11.7C18.6891 15.8344 16.2328 16.7437 13.8937 17.0109C14.2687 17.3437 14.6063 18 14.6063 19.0031C14.6063 20.4422 14.5922 21.6047 14.5922 21.9562C14.5922 22.2422 14.7797 22.5797 15.3141 22.4719C19.4953 21.0516 22.5 17.0203 22.5 12.2672C22.5 6.31875 17.7984 1.5 12 1.5Z" fill="white" />
                        </svg>
                        <span className="ml-4">Open with GitHub</span>
                    </a>

                </div>
                <div className="flex flex-col md:flex-row mt-16 items-center md:justify-around">
                    {
                        data?.image_preview.map((item: string, i: number) => {
                            return (
                                <div key={i} className="mt-10">
                                    <Image
                                        src={item}
                                        alt={'image'}
                                        width={200}
                                        height={500}
                                        className="h-[500px] w-[200px] object-contain"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id="feature" className="mt-24">
                <p className="sub_title mb-6 mt-16">What We Offer</p>
                {
                    data?.fitur.map((item: string, i: number) => {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </section>
            <section id="stack" className="mt-24">
                <p className="sub_title mb-6">What We Used :</p>
                <p >{data?.stack}</p>
            </section>
        </div >
    )

}


export default function Page() {
    return (
        <Suspense>
            <Detail />
        </Suspense>
    )
}