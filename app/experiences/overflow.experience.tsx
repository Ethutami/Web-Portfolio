import idExperience from "@/interfaces/experience.interface"
import createDateFormatter from "@/component/dateFormater"

export const OverflowComponent = ({ props }: { props: idExperience[] }) => {
    return (
        <div
            className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ height: 600, marginTop: 24 }}>
            {
                props.length != 0 && (props?.map((item: idExperience, index: number) => {
                    const startDate = createDateFormatter(item?.start_date).MMMYYY().build()
                    const endDate = createDateFormatter(item?.end_date).MMMYYY().build()
                    return (
                        <div className="flex flex-col lg:flex-row" style={{ marginBottom: 42 }} key={index}>
                            <div className="w-full lg:w-[15%]">
                                <p>{startDate} - {endDate}</p>
                            </div>
                            <div className="flex flex-row w-full lg:w-[85%]">
                                <div style={{ height: 100, width: '4px', backgroundColor: '#8E1616', marginRight: 42, position: "relative", top: 15 }}></div>
                                <div style={{ width: '85%' }}>
                                    <p className="font-semibold text-xl">{item?.position_name}</p>
                                    <p className="font-semibold text-lg text-[#8E1616]">{item?.company_name}</p>
                                    <p className="text-[#8E1616]">{item?.company_address}</p>
                                    <p style={{ marginTop: 10 }} >{item?.job_description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}