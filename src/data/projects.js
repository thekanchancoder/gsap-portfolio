const projects = [
  {
    id: 1,
    slug: "modern-portfolio",
    number: "01",
    title: "Modern Portfolio",
    subtitle: "Creative Developer Showcase",
    category: "Web Design",
    year: "2026",
    role: "Frontend Developer",
    description: "A modern animated portfolio built with Next.js, GSAP, and Tailwind CSS.",
    longDescription: "A fully responsive personal portfolio with smooth scrolling, advanced animations, and project showcase sections.",
    coverImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fDB8fHww",
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fDB8fHww",
    gallery: ["https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fDB8fHww"
    ],
    tags: ["Next.js", "GSAP", "Tailwind", "Lenis"]
  },

  {
    id: 2,
    slug: "pharma-job-portal",
    number: "02",
    title: "Pharma Job Portal",
    subtitle: "Job Search Platform",
    category: "Full Stack",
    year: "2026",
    role: "MERN Developer",
    description: "A portal for pharma job seekers and recruiters.",
    longDescription: "A complete recruitment platform with resume upload, job alerts, and admin dashboard.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },

  {
    id: 3,
    slug: "rewardhub",
    number: "03",
    title: "RewardHub",
    subtitle: "Smart Rewards Tracker",
    category: "FinTech",
    year: "2026",
    role: "Full Stack Developer",
    description: "Optimize credit card rewards and cashback.",
    longDescription: "Tracks spending and suggests the best card to maximize rewards.",
    coverImage: "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    heroImage: "https://images.unsplash.com/photo-1581878611345-3fe425a0f833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    gallery: ["https://images.unsplash.com/photo-1577638104555-83af2d50b5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1682125748265-d362c809ba04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1663127721165-f29d5bbd3da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1593814681464-eef5af2b0628?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D"
    ],
    tags: ["Next.js", "MongoDB", "NextAuth", "Tailwind"]
  },

  {
    id: 4,
    slug: "mac-os-ui",
    number: "04",
    title: "Mac OS Portfolio",
    subtitle: "Interactive Desktop UI",
    category: "Frontend",
    year: "2026",
    role: "React Developer",
    description: "A MacOS-inspired portfolio interface.",
    longDescription: "A draggable window-based portfolio inspired by macOS UI using React and GSAP.",
    coverImage: "https://images.unsplash.com/photo-1582535757556-7b9f511020e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fDB8fHww",
    heroImage: "https://plus.unsplash.com/premium_photo-1675824592772-4d0f0daa067e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8fDA%3D",
    gallery: ["https://plus.unsplash.com/premium_vector-1739361428237-0c2a5944fdb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_vector-1715786847762-e4f0299602bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1531804159968-24716780d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    tags: ["React", "GSAP", "Tailwind", "Framer Motion"]
  },

  {
    id: 5,
    slug: "3d-product-showcase",
    number: "05",
    title: "3D Product Showcase",
    subtitle: "Interactive Product Experience",
    category: "3D Web",
    year: "2026",
    role: "Creative Developer",
    description: "A 3D immersive product landing page.",
    longDescription: "Built with React Three Fiber and GSAP for product storytelling with smooth transitions.",
    coverImage: "https://plus.unsplash.com/premium_vector-1739403889016-bd454fc77c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    heroImage: "https://images.unsplash.com/photo-1611316185995-9624c94487d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHx8MHx8fDA%3D",
    gallery: ["https://plus.unsplash.com/premium_vector-1773229900493-709a37ca76a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_vector-1744204734991-135d82bbcd2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_vector-1744103652283-52511c8a6912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    tags: ["Three.js", "R3F", "GSAP", "Shaders"]
  },

  {
    id: 6,
    slug: "productivity-dashboard",
    number: "06",
    title: "Productivity Dashboard",
    subtitle: "Task & Focus Manager",
    category: "Web App",
    year: "2026",
    role: "Frontend Developer",
    description: "A dashboard for tasks, pomodoro, and weather updates.",
    longDescription: "Includes to-do management, timer system, quotes API, and weather integration.",
    coverImage: "https://plus.unsplash.com/premium_vector-1739403889016-bd454fc77c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    heroImage: "https://images.unsplash.com/photo-1763345181042-87ade714d7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    gallery: ["https://plus.unsplash.com/premium_vector-1773229900493-709a37ca76a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_vector-1744204734991-135d82bbcd2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_vector-1744103652283-52511c8a6912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    tags: ["JavaScript", "CSS", "API", "LocalStorage"]
  },

  {
    id: 7,
    slug: "ai-resume-builder",
    number: "07",
    title: "AI Resume Builder",
    subtitle: "Smart Resume Generator",
    category: "AI Tool",
    year: "2026",
    role: "Full Stack Developer",
    description: "Generate professional resumes with AI.",
    longDescription: "An AI-powered resume builder that creates ATS-friendly resumes and cover letters.",
    coverImage: "https://plus.unsplash.com/premium_vector-1769359486417-b42acb0adef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    heroImage: "https://plus.unsplash.com/premium_photo-1695405363183-e55554168063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGltYWdlfGVufDB8fDB8fHww",
    gallery: ["https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYXBoaWN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1611316185995-9624c94487d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_vector-1711987763353-9beb6f5d3907?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    ],
    tags: ["Next.js", "OpenAI", "MongoDB", "Tailwind"]
  },

  {
    id: 8,
    slug: "agriculture-landing-page",
    number: "08",
    title: "Agriculture Landing Page",
    subtitle: "Organic Farming Website",
    category: "UI Design",
    year: "2026",
    role: "Frontend Developer",
    description: "A modern landing page for agriculture products.",
    longDescription: "Designed with animations, product cards, and responsive UI for farming businesses.",
    coverImage: "https://plus.unsplash.com/premium_vector-1712615037179-c6d4caa22fd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    heroImage: "https://plus.unsplash.com/premium_vector-1711987702116-581c963109fe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://plus.unsplash.com/premium_vector-1720833276480-ef1db642beb2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1627933540891-1fb6a397c89b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1745610507830-d6219ba37354?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"],
    tags: ["Next.js", "Tailwind", "GSAP", "UI/UX"]
  }
];

export default projects;