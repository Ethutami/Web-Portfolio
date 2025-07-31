import iExperience from "@/interfaces/experience.interface"
import createDateFormatter from "@/component/dateFormater"

export const OverflowComponent = ({ props }: { props: iExperience[] }) => {
    return (
        <div
            className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ height: 600, marginTop: 24 }}>
            {
                props.length != 0 && (props?.map((item: iExperience, index: number) => {
                    const startDate = createDateFormatter(item?.start_date).MMMYYY().build()
                    const endDate = createDateFormatter(item?.end_date).MMMYYY().build()
                    return (
                        <div className="flex flex-col lg:flex-row" style={{ marginBottom: 42 }} key={index}>
                            <div className="w-full mb-2 lg:w-[15%]">
                                <p>{startDate} - {endDate}</p>
                            </div>
                            <div className="flex flex-row w-full lg:w-[85%]">
                                <div className="relative top-4 bg-[#4F98CA] dark:bg-[#AD49E1] h-18 w-1 mr-6" ></div>
                                <div className="w-[85%]">
                                    <p className="highlight_section_title">{item?.position_name}</p>
                                    <p className="section-title">{item?.company_name}</p>
                                    <p className="muted">{item?.company_address}</p>
                                    <p className="mt-4">{item?.job_description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}