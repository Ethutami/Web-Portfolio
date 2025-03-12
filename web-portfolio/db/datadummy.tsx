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
        des: "adalah aplikasi resep masakan yang dirancang sebagai proyek pribadi untuk mengasah keterampilan dalam pengembangan aplikasi mobile. Aplikasi ini menyediakan berbagai resep masakan yang lengkap dan mudah diakses, serta dilengkapi dengan fitur-fitur praktis untuk membantu pengguna dalam proses memasak.",
        projectDate: "2021",
        detailDescription:"Menggunakan React Native untuk membangun antarmuka pengguna yang responsif dan intuitif. Cooksy adalah aplikasi yang dirancang untuk membantu pengguna dalam proses memasak dengan menyediakan berbagai resep masakan serta fitur timer dan asisten memasak. Aplikasi ini bertujuan untuk membuat pengalaman memasak lebih menyenangkan dan efisien.",
        fitur: [
            'Daftar Resep: Menyediakan berbagai resep yang dapat dipilih sesuai selera pengguna.',
            'Timer Memasak: Fitur untuk mengatur waktu memasak secara otomatis sesuai dengan langkah-langkah resep.',
            'Asisten Memasak: Panduan interaktif yang membantu pengguna mengikuti resep langkah demi langkah.',
        ],
        projectResult: 'Cooksy menghasilkan aplikasi yang fungsional dan user-friendly, memungkinkan pengguna untuk menemukan resep dengan mudah, mengatur waktu memasak, dan mendapatkan bimbingan langsung saat memasak. Aplikasi ini bertujuan untuk meningkatkan keterampilan memasak pengguna dan membuat pengalaman memasak lebih terorganisir.',
        stack: 'React Native Framework, Redux State Management, Axios API Public, Figma.',
        image:[
            "/cooksy1.png", 
            "/cooksy2.png", 
            "/cooksy3.png",
            ],
        uiResource: '*ui resource : free figma design'
    },
    {
        title: 'E-Commerce',
        src: '/ecommerce.png',
        des: 'app adalah aplikasi belanja online yang dikembangkan sebagai proyek pribadi untuk meningkatkan keterampilan dalam pengembangan aplikasi mobile. Terinspirasi oleh platform terkemuka seperti Zalora, aplikasi ini dirancang untuk memberikan pengalaman berbelanja yang intuitif, menarik, dan efisien bagi pengguna di seluruh dunia.',
        projectDate: "2021",
        detailDescription:"Menggunakan React Native untuk membangun antarmuka yang responsif dan menarik. Aplikasi E-commerce dikembangkan sebagai proyek latihan untuk menyediakan platform jual beli produk fashion secara online. Aplikasi ini bertujuan untuk mempermudah pengguna dalam menjelajahi, memilih, dan membeli produk fashion dengan cara yang sederhana dan efisien.",
        fitur: [
            'Katalog Produk: Menampilkan berbagai item fashion dengan gambar, deskripsi, dan harga.',
            'Keranjang Belanja: Memungkinkan pengguna untuk menyimpan produk yang ingin dibeli sebelum melakukan checkout.',
            'Pembayaran Online: Integrasi metode pembayaran untuk transaksi yang aman dan mudah.',
            'Profil Pengguna: Fitur untuk mengelola informasi akun dan riwayat pembelian.',
        ],
        projectResult: 'Aplikasi E-commerce menghasilkan platform yang intuitif dan menarik bagi pengguna, memungkinkan mereka untuk dengan mudah menemukan dan membeli produk fashion secara online. Aplikasi ini memberikan pengalaman belanja yang nyaman dan menyenangkan.',
        stack: 'React Native Framework, Redux State Management, Axios, API Public, Figma.',
        image:[
            "/e-commerce1.png", 
            "/e-commerce2.png", 
            "/e-commerce3.png",
            "/e-commerce4.png",
            ],
        uiResource: '*ui resource : free figma design'
    },
    {
        title: 'Travelook',
        src: '/travelook.png',
        des: 'adalah aplikasi inovatif yang dirancang untuk memudahkan pengguna dalam mencari dan memesan villa di berbagai tempat wisata. Dengan antarmuka yang ramah pengguna dan fitur pencarian yang efisien, Travelook memungkinkan pengguna untuk menemukan villa yang sesuai dengan kebutuhan dan preferensi mereka, baik untuk liburan maupun perjalanan singkat.',
        projectDate: "2021",
        detailDescription:"Travelook dikembangkan sebagai tugas akhir dalam program bootcamp, dengan tujuan untuk menyediakan platform pemesanan hotel dan villa secara online. Aplikasi ini bertujuan untuk memudahkan pengguna dalam mencari, membandingkan, dan memesan akomodasi dengan cepat dan efisien.",
        fitur: [
            'Pencarian Akomodasi: Memungkinkan pengguna untuk mencari hotel dan villa berdasarkan lokasi, tanggal, dan jumlah tamu.',
            'Detail Properti: Menampilkan informasi lengkap tentang setiap akomodasi, termasuk gambar, deskripsi, dan fasilitas.',
            'Pemesanan Online: Fitur untuk memproses pemesanan secara langsung dengan pilihan metode pembayaran yang aman.',
            'Ulasan Pengguna: Memungkinkan pengguna memberikan ulasan dan rating terhadap akomodasi yang telah mereka kunjungi.',
        ],
        projectResult: 'Travelook menghasilkan aplikasi yang fungsional dan user-friendly, memungkinkan pengguna untuk dengan mudah mencari dan memesan hotel dan villa. Dengan fitur-fitur yang lengkap, aplikasi ini memberikan pengalaman yang nyaman dan praktis dalam merencanakan perjalanan.',
        stack: 'React Native framework, Redux State Management, Axios, Postman, Figma.',
        image:[
            "/travelook1.png", 
            "/travelook2.png", 
            "/travelook3.png",
            "/travelook4.png", 
            "/travelook5.png",
            ],
        uiResource: '*ui resource : internal design'
      },
 
];
