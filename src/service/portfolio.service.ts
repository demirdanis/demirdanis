// src/service/portfolio.service.ts

const portfolioService = {
  getPortfolioData: () => ({
    personal: {
      name: "Demir Danış",
      firstName: "Demir",
      lastName: "Danış",
      title: "Software Engineering Manager",
      location: "İzmir, Turkey",
      age: "31 Years",
      phone: "+90 506 107 84 77",
      email: "danis.demir@gmail.com",
      linkedin: "https://www.linkedin.com/in/demir-danis/",
      github: "https://github.com/demirdanis",
      bio: "Seasoned software engineering manager with expertise in frontend and backend development, as well as team leadership. I have developed expertise in Progressive Web Apps and actively apply micro frontend methodologies.",
      longBio:
        "I strongly believe in fostering a culture of communication and collaboration both within teams and across departments. In my teams, I value not only technical proficiency but also communication skills and personal character. I aim to create an environment where technical and interpersonal skills are equally prioritized.",
      profileImage:
        "data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2364748b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)'/%3E%3Ctext x='200' y='230' font-family='Arial, sans-serif' font-size='120' font-weight='bold' text-anchor='middle' fill='white'%3EDD%3C/text%3E%3C/svg%3E",
    },
    navigation: ["Home", "About", "Resume", "Services", "Portfolio"],
    socialMedia: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/demir-danis/",
        icon: "linkedin" as const,
      },
      {
        name: "GitHub",
        url: "https://github.com/demirdanis",
        icon: "github" as const,
      },
      {
        name: "Email",
        url: "mailto:danis.demir@gmail.com",
        icon: "mail" as const,
      },
    ],
    skills: [
      { name: "Engineering Management & Team Leadership", percentage: 95 },
      { name: "Agile Methodologies", percentage: 90 },
      { name: "System Architecture", percentage: 90 },
      { name: "React & Next.js", percentage: 90 },
      { name: "Node.js & NestJS", percentage: 85 },
      { name: "Microservices", percentage: 85 },
      { name: "C# & .NET", percentage: 80 },
      { name: "Database Management (SQL & NoSQL(MongoDB))", percentage: 80 },
      { name: "Cloud Technologies (AWS, Azure)", percentage: 70 },
      { name: "WebRTC & Real-Time Communication", percentage: 75 },
      { name: "DevOps & CI/CD", percentage: 70 },
    ],
    services: [
      {
        icon: "users" as const,
        title: "Team Leadership",
        description:
          "Leading high-performing engineering teams, mentoring developers, and fostering collaborative environments.",
      },
      {
        icon: "code" as const,
        title: "Full-Stack Development",
        description:
          "Building scalable web applications using React, Node.js, and modern cloud technologies.",
      },
      {
        icon: "target" as const,
        title: "System Architecture",
        description:
          "Designing microservices architectures and implementing best practices for scalable systems.",
      },
      {
        icon: "briefcase" as const,
        title: "Project Management",
        description:
          "Managing complex projects using Agile methodologies and ensuring timely delivery.",
      },
    ],
    experience: [
      {
        id: 1,
        year: "2021 - Continuing",
        title: "Software Engineering Team Lead",
        company: "Brew Interactive",
        location: "İzmir - Remote",
        description:
          "Leading a high-performing team of 5–6 engineers, delivering scalable solutions for global-scale projects using Agile methodologies. Transitioned to full-stack leadership role managing both frontend and backend responsibilities.",
        technologies: [
          "React",
          "Next.js",
          "Angular",
          "Node.js",
          "NestJS",
          ".NET",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "AWS",
          "Azure",
          "Elasticsearch",
          "GraphQL",
          "Microservices",
          "CI/CD",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        id: 2,
        year: "2016 - 2021",
        title: "Senior FullStack Software Engineer",
        company: "Veriyaz Yazılım",
        location: "İzmir - Remote",
        description:
          "Contributed to end-to-end development of large-scale projects including B2B marketplace platforms, real-time communication systems, and location-based services.",
        technologies: [
          "Angular",
          "Go",
          "C#",
          ".NET",
          "Icelink",
          "WebRTC",
          "CouchBaseDB",
          "AWS",
          "Azure",
          "Redis",
          "Elasticsearch",
          "CI/CD",
          "Nginx",
          "Kubernetes",
        ],
      },
      {
        id: 3,
        year: "2015 - 2016",
        title: "Team Leader & FullStack Developer",
        company: "Alangoya Bilgi Teknolojileri",
        location: "Ankara",
        description:
          "Led end-to-end development of Turkish Sugar Corporation's comprehensive data tracking and analysis system serving over 1,000 companies.",
        technologies: ["C#", ".NET", "Angular", "MSSQL", "Redis"],
      },
      {
        id: 4,
        year: "2013 - 2015",
        title: "Software Developer",
        company: "Akıllı Sistemler Bilişim",
        location: "İzmir",
        description:
          "Worked on cutting-edge R&D projects funded by TÜBİTAK, focusing on audio/image processing, document crawling, and custom search engine development.",
        technologies: ["JQuery", "HTML", "CSS", ".NET", "C#", "NoSQL DBs"],
      },
      {
        id: 5,
        year: "2011 - 2013",
        title: "Software Developer",
        company: "İdeal Web Tasarım",
        location: "İzmir",
        description:
          "In this role, I was the sole developer in the company, responsible for building and maintaining dynamic, content-driven corporate websites and admin panels. My responsibilities spanned both the frontend and backend, and I also designed the UI/UX for each project myself.",
        technologies: [
          "JQuery",
          "JavaScript",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DBs",
        ],
      },
    ],
    education: [
      {
        year: "2011",
        degree: "Computer Engineering",
        school: "Ege University",
        location: "İzmir, Turkey",
        description:
          "Bachelor's degree in Computer Engineering with focus on software development and system design.",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Nesy (Aras Kargo)",
        category: "Enterprise Platform",
        description:
          "Enterprise logistics platform with microservices architecture serving millions of users.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/nesy.webp",
        technologies: [
          "Angular",
          "PrimeNG",
          "Ionic",
          ".NET",
          "Kafka",
          "MongoDB",
        ],
        link: null,
      },
      {
        id: 2,
        title: "villasepeti.com",
        category: "E-commerce",
        description:
          "Modern e-commerce platform with advanced search capabilities and real-time inventory management.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/villasepeti.webp",
        technologies: [
          "React",
          "Next.js",
          "MUI",
          "Hasura",
          "GraphQL",
          "NestJS",
        ],
        link: "https://villasepeti.com",
      },
      {
        id: 3,
        title: "TomorrowID",
        category: "AI/ML",
        description:
          "Advanced authentication system with facial recognition and biometric security features.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/tmrwme.webp",
        technologies: [
          "React",
          "Next.js",
          "Hasura",
          "GraphQL",
          "OpenCV",
          "TensorFlow",
        ],
        link: null,
      },
      {
        id: 4,
        title: "Enuygun Finans",
        category: "Fintech",
        description:
          "Credit and loan management system for Turkey's leading travel platform.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/enuygun.webp",
        technologies: ["React", "Next.js", "Strapi", "GraphQL"],
        link: "https://www.enuygunfinans.com/kredi",
      },
      {
        id: 5,
        title: "KocSistem Web Application",
        category: "Enterprise Web",
        description:
          "A web application for kocsistem.com.tr where dynamic pages can be created from the CMS using a custom component library.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/koc.webp",
        technologies: ["RemixJS", "Decap CMS", "PostgreSQL"],
        link: "https://www.kocsistem.com.tr/",
      },
      {
        id: 9,
        title: "DOD Component Library",
        category: "Component Library",
        description:
          "A component library for dod.com.tr developed with Vue.js and Ant Design, documented with Storybook.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/dod.webp",
        technologies: ["Vue.js", "Ant Design", "Storybook"],
        link: "https://dod.com.tr/",
      },
      {
        id: 10,
        title: "Sensat Component Library",
        category: "Component Library",
        description:
          "A component library for sensat.com developed with Vue.js and Ant Design, documented with Storybook.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sensat.webp",
        technologies: ["Vue.js", "Ant Design", "Storybook"],
        link: "https://sensat.com/",
      },
      {
        id: 11,
        title: "Tezmaksan Web Platform",
        category: "Corporate Website",
        description:
          "A corporate web platform for tezmaksan.com.tr developed using React, Next.js, MUI, and Squdex CMS.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/tezmaksan.webp",
        technologies: ["React", "Next.js", "MUI", "Sqdex CMS"],
        link: "https://tezmaksan.com/tr",
      },
      {
        id: 6,
        title: "Sestek Chatbot Component Library",
        category: "Component Library",
        description:
          "A React-based component library project for the Sestek chatbot. Customizable React components were developed for different chatbot interfaces.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sestek.webp",
        technologies: ["React", "Storybook"],
        link: null,
      },
      {
        id: 7,
        title: "Led Taxi Admin Panel",
        category: "Admin Panel",
        description:
          "A comprehensive admin panel for managing vehicles, devices, batteries, stations, clients, users, campaigns, and reservations. The main product enables the management of ads to be played on LED panels mounted on taxis.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/ledtaxi.webp",
        technologies: ["React", "Next.js", "MUI", "Storybook"],
        link: null,
      },
      {
        id: 8,
        title: "Merak Haritası",
        category: "Interactive Map",
        description:
          "A website where comments and information about locations entered from the CMS are displayed. While navigating to a point of interest, users can also see nearby charging stations along their route based on their location.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/merak.webp",
        technologies: ["React", "Next.js", "MUI", "Storybook", "Strapi"],
        link: null,
      },

      {
        id: 12,
        title: "PTTTrade B2B Platform",
        category: "B2B Platform",
        description:
          "A large-scale B2B project for ptttrade.com, similar to Alibaba.com. Developed as a comprehensive system for business-to-business commerce.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/ptttrade.webp",
        technologies: [
          "Angular",
          "Go",
          "Elasticsearch",
          "CouchbaseDB",
          "Redis",
          "Kubernetes",
          "WebRTC",
          "Nginx",
        ],
        link: null,
      },
      {
        id: 13,
        title: "SesliDünya Voice & Video Chat Rooms",
        category: "Real-Time Communication",
        description:
          "A system for voice and video chat rooms (web.seslidunya.com) with Android and iOS mobile apps named 'seslidunya'.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sesli.webp",
        technologies: ["Angular", "WebRTC", "Jitsi", "Redis", "MongoDB", "Go"],
        link: "https://web.seslidunya.com/",
      },
      {
        id: 14,
        title: "DIMAR (Tubitak R&D Project)",
        category: "Audio & Image Processing",
        description:
          "Fullstack project for audio and image processing as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 15,
        title: "HADIARA (Tubitak R&D Project)",
        category: "Search Engine & Crawler",
        description:
          "Fullstack project for document search engine and crawler (doc, pdf, txt...) as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 16,
        title: "HADIARA SOCIAL MEDIA (Tubitak R&D Project)",
        category: "Social Media Search Engine",
        description:
          "Fullstack project for social media search engine and crawler (tweets, facebook messages...) as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 17,
        title: "ASAR (Tubitak R&D Project)",
        category: "Search Engine",
        description:
          "Fullstack search engine project as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 18,
        title: "PIRAKS (Tubitak R&D Project)",
        category: "Address Quality Improvement",
        description:
          "Fullstack address quality improvement project as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 19,
        title: "Turkish Sugar Corporation Document & Analysis System",
        category: "Enterprise Data Platform",
        description:
          "In this role, I was responsible for the end-to-end development of the project, acting both as the team lead and a fullstack developer. Initially hired as a backend developer, I was offered full ownership of the project after demonstrating initiative and presenting technical solutions during early meetings. I accepted the leadership role and successfully delivered the project over the course of one year. The system is a comprehensive platform where daily, weekly, monthly, and annual data from Turkish Sugar Corporation factories, export unions, and around 1,000 companies involved in sugar import, export, production, and sales is entered. It generates dynamic reports based on this input, enabling efficient tracking and analysis.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/software-1.webp",
        technologies: [
          "IIS",
          "C# .NET Rest Service",
          "MSSQL",
          "Redis Cache",
          "Angular",
          "Cades Digital Signature",
          "Mobile Signature",
          "Integrations with Ministry Services",
        ],
        link: null,
      },
      {
        id: 20,
        title: "Corporate Websites & SaaS Order Management (Solo Developer)",
        category: "Web & SaaS Solutions",
        description:
          "As the sole developer, I built and maintained dynamic, content-driven corporate websites and admin panels, handling both frontend and backend as well as UI/UX design. Delivered performant, SEO-friendly, multilingual sites tailored to corporate clients. Also designed and launched a custom SaaS order management system for real-time order businesses (e.g., pizzerias, fast food). Features included live order tracking, real-time notifications, product catalog management, and an admin dashboard. All projects were delivered end-to-end, from design to deployment. Example sites: www.modaadresi.com, www.hcmdemiral.com.tr, www.realdogaltas.com, www.idealwebtasarim.com, www.numanpide.com, www.ozaydinpide.com, www.arzupidesalonlari.com, www.buketpastanesi.com.tr, www.savoybalik.com.tr.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/software-1.webp",
        technologies: [".NET", "HTML", "CSS", "JQuery", "MSSQL"],
        link: null,
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        position: "CTO at TechCorp",
        content:
          "Demir's leadership transformed our development team. His technical expertise combined with excellent communication skills made him invaluable to our organization.",
        rating: 5,
      },
      {
        id: 2,
        name: "Michael Chen",
        position: "Senior Developer",
        content:
          "Working under Demir's leadership was a game-changer for my career. He's not just a great manager but also a mentor who genuinely cares about team growth.",
        rating: 5,
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        position: "Product Manager",
        content:
          "Demir has an exceptional ability to bridge the gap between technical complexity and business requirements. His architectural decisions always consider scalability and maintainability.",
        rating: 5,
      },
    ],
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "7+", label: "Team Members Led" },
    ],
  }),
};

export default portfolioService;
