import idExperience from "@/interfaces/experience.interface";
import imageData from "@/interfaces/portofolio.interface";
import idTestimoni from "@/interfaces/testimoni.interface";

export const experience: idExperience[] = [ 
    {
        title : "QA Manual Tester",
        location: "Jakarta, Indonesia",
        date: "2023-2024",
        desc:"Managed and addressed the requirements of 2 banking clients through detailed analysis and prompt response to inquiries.Created comprehensive scenario tests, meticulously documented results, and prepared detailed reports.",
    },
    {
        title : "Technical Consultant Analyst",
        location: "Jakarta , Indonesia",
        date: "2021-2023",
        desc: " Collaborated in working on 4 web projects and 5 mobile projects using React and react native with high-quality UI components using Material-UI (MUI). Optimized UI component to achieve 90% alignment with Figma design standards, resulting in a seamless user experience and improved visual consistency across the platform",
    },
    {
        title : "Freelance Web Developer",
        location: "Remote, Indonesia",
        date: "2001",
        desc: "Prepare, organize, and implement web interface design with NextJs and Material-UI. Execute and realize UI/UX design into code that can interact with the user.",
    },
]

export const testimoni: idTestimoni[] = [
    {
        name : "Robert",
        job: "CEO, Quantum",
        date: "2001",
        desc: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun",
    },
    {
        name : "Josef",
        job: "CEO, Quantum",
        date: "2001",
        desc: "ut labore et dolore magna aliqua. Ut enimamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name : "Aseft",
        job: "CEO, Quantum",
        date: "2001",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name : "John",
        job: "CEO, Quantum",
        date: "2001",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name : "SIB",
        job: "CEO, Quantum",
        date: "2001",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]

export const portofolio: imageData[] =[
    {
        title: "Cooksy",
        src: "/cooksy.jpg",
        des: "Adalah aplikasi resep masakan yang dirancang sebagai proyek pribadi untuk mengasah keterampilan dalam pengembangan aplikasi mobile. Aplikasi ini menyediakan berbagai resep masakan yang lengkap dan mudah diakses, serta dilengkapi dengan fitur-fitur praktis untuk membantu pengguna dalam proses memasak.",
        projectDate: "",
        detailDescription:"",
        image:[
            "image1", 
            "image2", 
            "image3"
            ],
      
    },
    {
        title: 'E-Commerce',
        src: '/ecommerce.png',
        des: 'App adalah aplikasi belanja online yang dikembangkan sebagai proyek pribadi untuk meningkatkan keterampilan dalam pengembangan aplikasi mobile. Terinspirasi oleh platform terkemuka seperti Zalora, aplikasi ini dirancang untuk memberikan pengalaman berbelanja yang intuitif, menarik, dan efisien bagi pengguna di seluruh dunia.',
        projectDate: "",
        detailDescription:"",
        image:[
            "image1", 
            "image2", 
            "image3"
            ],
        
    },
    {
        title: 'Travelook',
        src: '/travelook.png',
        des: 'Adalah aplikasi inovatif yang dirancang untuk memudahkan pengguna dalam mencari dan memesan villa di berbagai tempat wisata. Dengan antarmuka yang ramah pengguna dan fitur pencarian yang efisien, Travelook memungkinkan pengguna untuk menemukan villa yang sesuai dengan kebutuhan dan preferensi mereka, baik untuk liburan maupun perjalanan singkat.',
        projectDate: "",
        detailDescription:"",
        image:[
          "image1", 
          "image2", 
          "image3"
          ],
      },
 
];
