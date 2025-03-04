/* eslint-disable react/no-danger-with-children */

interface data {
    title : string,
    location: string,
    date: string,
    desc: string
}
const data: data[] =[ 
    {
        title : 'QA Manual Tester',
        location: 'Jakarta, Indonesia',
        date: '2023-2024',
        desc:'Managed and addressed the requirements of 2 banking clients through detailed analysis and prompt response to inquiries.Created comprehensive scenario tests, meticulously documented results, and prepared detailed reports.',
    },
    {
        title : 'Technical Consultant Analyst',
        location: 'Jakarta , Indonesia',
        date: '2021-2023',
        desc: ' Collaborated in working on 4 web projects and 5 mobile projects using React and react native with high-quality UI components using Material-UI (MUI). Optimized UI component to achieve 90% alignment with Figma design standards, resulting in a seamless user experience and improved visual consistency across the platform',
    },
    {
        title : 'Freelance Web Developer',
        location: 'Remote, Indonesia',
        date: '2001',
        desc: 'Prepare, organize, and implement web interface design with NextJs and Material-UI. Execute and realize UI/UX design into code that can interact with the user.',
    },
]

export const OverflowComponent = () => {
    return(
        <div className="overflow-y-auto px-32 py-16" style={{height: 350, backgroundColor: '#EEEEEE'}}>
            {
                data?.map((item, index)=>{
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
                })
            }
        </div>
    )
}