import Image from "next/image"
import { portofolio } from "@/db/datadummy"
import imageData from "@/interfaces/portofolio.interface"

export default function Page(){
    const data:imageData[] = portofolio
    return(
        <div className="px-32 pt-32 mb-40">
            <p className="font-bold text-4xl text-[#1D1616]">{data[2].title}</p>
            <div className="ml-14 mt-11">
                <div className="flex flex-row items-center">
                    <div style={{height:'4px',width: 200,  backgroundColor: '#8E1616', marginRight:36}}></div>
                    <p className="font-semibold text-xl text-[#8E1616]">{data[2].projectDate}</p>
                </div>
                <p className="mt-6">{data[2].detailDescription}</p>
                <p className="mt-6">{data[2].projectResult}</p>
                <div className="mt-6">
                    <p className="font-semibold text-xl text-[#1D1616]">Fitur :</p>
                    {
                        data[2].fitur.map((item:string, i:number)=>{
                            return(
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </div>
                <div className="mt-6 flex flex-row items-center">
                    <p className="text-[#1D1616] text-xl font-semibold ">Stack :</p>
                    <p className="text-[#1D1616] ml-3">{data[2].stack}</p>
                </div>
                <div className="flex flex-row mt-16 justify-around">
                    {
                        data[2].image.map((item: string, i: number)=>{
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
                <p className="mt-4 italic">{data[2].uiResource}</p>
            </div>
        </div>
    )
}