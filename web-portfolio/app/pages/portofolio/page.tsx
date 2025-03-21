'use client';

import { Suspense, useEffect, useState } from "react";
import Image from "next/image"
import { useSearchParams } from 'next/navigation';
import imageData from "@/interfaces/portofolio.interface";

function Detail() {
    const searchParams = useSearchParams();
    const itemString = searchParams.get('item');  // Ambil parameter 'item' dari URL
  
    const [data, setData] = useState<imageData>();  // Untuk menyimpan data yang di-parse

    useEffect(() => {
        if (itemString) {
        try {
            // Decode URL dan parse JSON
            const decodedItemString = decodeURIComponent(itemString);
            const parsedItem = JSON.parse(decodedItemString);
            setData(parsedItem);  
        } catch (error) {
            console.error('Gagal parsing item:', error);
        }
        }
    }, [itemString])
    
    return(
        <div className="px-32 pt-32 mb-40">
            <p className="font-bold text-4xl text-[#1D1616]">{data?.title}</p>
            <div className="ml-14 mt-11">
                <div className="flex flex-row items-center">
                    <div style={{height:'4px',width: 200,  backgroundColor: '#8E1616', marginRight:36}}></div>
                    <p className="font-semibold text-xl text-[#8E1616]">{data?.projectDate}</p>
                </div>
                <p className="mt-6">{data?.detailDescription}</p>
                <p className="mt-6">{data?.projectResult}</p>
                <div className="mt-6">
                    <p className="font-semibold text-xl text-[#1D1616]">Fitur :</p>
                    {
                        data?.fitur.map((item:string, i:number)=>{
                            return(
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </div>
                <div className="mt-6 flex flex-row items-center">
                    <p className="text-[#1D1616] text-xl font-semibold ">Stack :</p>
                    <p className="text-[#1D1616] ml-3">{data?.stack}</p>
                </div>
                <div className="flex flex-row mt-16 justify-around">
                    {
                        data?.image.map((item: string, i: number)=>{
                            return(
                                <div key={i} >
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
                <p className="mt-4 italic">{data?.uiResource}</p>
            </div>
        </div>
    )
    
}


export default function Page(){
    return(
        <Suspense>
            <Detail/>
        </Suspense>
    )
}