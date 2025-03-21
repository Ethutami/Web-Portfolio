import idExperience from "@/interfaces/experience.interface"

export const OverflowComponent = ({props}: {props:idExperience[]}) => {
    return(
        <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{height: 350, backgroundColor: '#EEEEEE', marginTop: 24}}>
            {
                props.length != 0 && (props?.map((item: idExperience, index: number)=>{
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