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
        des: "is a culinary recipe application developed as a personal project aimed at enhancing skills in mobile application development. The app offers a diverse collection of comprehensive and easily accessible recipes, supplemented by practical features to assist users throughout the cooking process.",
        projectDate: "2021",
        detailDescription:"Utilizing React Native to build a responsive and intuitive user interface, Cooksy is an application designed to assist users in the cooking process by providing a variety of recipes, along with features such as a timer and cooking assistant. The application aims to enhance the cooking experience, making it more enjoyable and efficient.",
        fitur: [
            'Recipe List: Offers a diverse selection of recipes that users can choose from based on their preferences.',
            'Cooking Timer: A feature that automatically sets cooking times according to the steps outlined in the recipes.',
            'Cooking Assistant: An interactive guide that helps users follow recipes step by step.',
        ],
        projectResult: `Cooksy offers a highly functional and user-friendly application that empowers users to effortlessly discover recipes, configure cooking timers, and receive real-time guidance during the cooking process. The application is designed to enhance users' culinary skills and provide a more organized and efficient cooking experience.`,
        stack: 'React Native Framework, Redux State Management, Axios API Public, Figma.',
        image:[
            "/cooksy1.png", 
            "/cooksy2.png", 
            "/cooksy3.png",
            ],
        uiResource: '*ui resource : Public UI design'
    },
    {
        title: 'E-Commerce',
        src: '/ecommerce.png',
        des: 'app is an online shopping application developed as a personal project to enhance skills in mobile application development. Inspired by leading platforms such as Zalora, this app is designed to provide users worldwide with an intuitive, engaging, and efficient shopping experience.',
        projectDate: "2021",
        detailDescription:"Utilizing React Native to build a responsive and engaging interface, the eCommerce app is developed as a practice project to provide an online platform for buying and selling fashion products. The application aims to simplify the process for users to explore, select, and purchase fashion items in a straightforward and efficient manner.",
        fitur: [
            'Product Catalog: Displays a variety of fashion items, complete with images, descriptions, and prices.',
            'Shopping Cart: Allows users to save products they wish to purchase before proceeding to checkout.',
            'Online Payment: Integration of payment methods for secure and convenient transactions.',
            'User Profile: A feature for managing account information and purchase history.',
        ],
        projectResult: 'The eCommerce application creates an intuitive and engaging platform for users, enabling them to easily discover and purchase fashion products online. It provides a convenient and enjoyable shopping experience.',
        stack: 'React Native Framework, Redux State Management, Axios, API Public, Figma.',
        image:[
            "/e-commerce1.png", 
            "/e-commerce2.png", 
            "/e-commerce3.png",
            "/e-commerce4.png",
            ],
        uiResource: '*ui resource : Public UI design'
    },
    {
        title: 'Travelook',
        src: '/travelook.png',
        des: 'is an innovative application designed to simplify the process of searching for and booking villas at various tourist destinations. With a user-friendly interface and efficient search features, Travelook enables users to find villas that meet their needs and preferences, whether for vacations or short getaways.',
        projectDate: "2021",
        detailDescription:"Travelook was developed as a final project in a bootcamp program, aiming to provide an online platform for booking hotels and villas. The application is designed to facilitate users in quickly and efficiently searching, comparing, and reserving accommodations.",
        fitur: [
            'Accommodation Search: Enables users to search for hotels and villas based on location, dates, and number of guests.',
            'Property Details: Displays comprehensive information about each accommodation, including images, descriptions, and amenities.',
            'Online Booking: A feature that allows for direct processing of reservations with secure payment options.',
            'User Reviews: Allows users to provide reviews and ratings for accommodations they have visited.',
        ],
        projectResult: 'Travelook delivers a functional and user-friendly application that enables users to easily search for and book hotels and villas. With a comprehensive set of features, the app provides a comfortable and practical experience for planning trips.',
        stack: 'React Native framework, Redux State Management, Axios, Postman, Figma.',
        image:[
            "/travelook1.png", 
            "/travelook2.png", 
            "/travelook3.png",
            "/travelook4.png", 
            "/travelook5.png",
            ],
        uiResource: '*ui resource : Internal design'
      },
 
];
