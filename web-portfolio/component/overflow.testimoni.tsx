import idTestimoni from "@/interfaces/testimoni.interface"

export const OverflowTestimoni  = ({props}: {props:idTestimoni[]})=>{
    return(
        <div className="flex space-x-3 overflow-x-auto p-3" style={{ marginTop:24, height: 350,  }}>
            {
                props.length != 0 && (props?.map((item:idTestimoni, index: number)=>{
                    return(
                        <div className="flex flex-row" style={{marginBottom: 42,}} key={index}>
                            <div style={{width: '30%', marginRight: 24}}  >
                                <div style={{height:'4px',width: '100%',  backgroundColor: '#8E1616', marginRight: 42,}}></div>
                            </div>
                            <div>
                                <p className="text-[#EEEEEE]">{item?.desc}</p>
                                <div style={{marginTop:36}}>
                                    <p className="font-bold text-2xl text-[#EEEEEE]">{item?.name}</p>
                                    <p className="text-base text-[#EEEEEE]">{item?.job}</p>
                                    <div style={{height:'4px',width: 100,  backgroundColor: '#8E1616', marginRight: 42,}}></div>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}