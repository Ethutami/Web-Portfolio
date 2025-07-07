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

    const startDate = createDateFormatter(data?.project_start_date || '').MMMYYY().build()
    const endDate = createDateFormatter(data?.project_end_date || '').MMMYYY().build()

    return (
        <div className="px-16 pt-16 lg:px-32 lg:pt-32 mb-40">
            <p className="font-bold text-4xl">{data?.project_title}</p>
            <div className="mt-11">
                <div className="flex flex-row items-center">
                    <div className="h-1 w-[80px] md:w-[200px] bg-[#8E1616] mr-6 md:mr-9"></div>
                    <p className="font-semibold text-xl text-[#8E1616]">{startDate == endDate ? startDate : `${startDate} - ${endDate}`}</p>
                </div>
                <p className="mt-6">{data?.detail_description}</p>
                <p className="mt-6">{data?.project_result}</p>
                <div className="mt-6">
                    <p className="font-semibold text-xl text-[#8E1616]">Fitur :</p>
                    {
                        data?.fitur.map((item: string, i: number) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </div>
                <div className="mt-6">
                    <p className="font-semibold text-xl text-[#8E1616]">Stack :</p>
                    <p >{data?.stack}</p>
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
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <p className="mt-4 italic">{data?.ui_source}</p>
            </div>
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