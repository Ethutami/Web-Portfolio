import idPortofolio from "@/interfaces/portofolio.interface"

/* eslint-disable react/no-danger-with-children */
export const OverflowComponent = (props:[]) => {
    const data = props?.data || []
    return(
        <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-32 py-16" style={{height: 350, backgroundColor: '#EEEEEE'}}>
            {
                data.length != 0 && (data?.map((item: idPortofolio[], index: number)=>{
                    console.log(typeof index)
                    return(
                        <div className="flex flex-row" style={{marginBottom: 42}} key={index}>
                            <div style={{width: '10%',}}  >
                                <p>{item?.date}</p>
                            </div>
                            <div style={{height: 100, width: '4px', backgroundColor: '#8E1616', marginLeft: 32, marginRight: 42, position: "relative", top: 15}}></div>
                            <div style={{width:'85%'}}>
                                <p className="font-semibold text-xl">{item?.title}</p>
                                <p>{item?.location}</p>
                                <p style={{marginTop: 10}} >{item?.desc}</p>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}