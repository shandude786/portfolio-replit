export const personalInfo = {
  name: "Shanti Lal",
  title: "Senior React.js / Next.js Developer",
  email: "shantilal173@gmail.com",
  phone: "+91 8875875662",
  location: "Jaipur, Rajasthan, India",
  linkedin: "https://linkedin.com/in/shantilal173",
  github: "https://github.com/shantilal173",
  summary: "Dynamic React.js/ NextJs Developer with 4 plus years of specialized experience building responsive web applications that enhance user engagement and drive business success. Backed by 6 years of diverse professional expertise, including 2 years in non-technical roles, I excel in fast-paced, innovative environments. Skilled in leveraging cutting-edge web technologies, I deliver accessible, maintainable, and scalable solutions."
};

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Celebal Technologies",
    location: "Jaipur",
    period: "Jan 2025 – July 2025",
    description: "Architected and implemented scalable React.js & NextJs architectures using TypeScript and best practices.",
    achievements: [
      "Architected and implemented scalable React.js & NextJs architectures using TypeScript and best practices",
      "Containerized applications with Docker to ensure consistency across development, testing, and production environments",
      "Built RESTful APIs with Node.js, managed cron jobs for scheduled tasks, and integrated event hubs for real-time data processing",
      "Designed and optimized SQL stored procedures, table schemas, and views to enhance database efficiency and reliability"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Docker", "Node.js", "SQL"],
    icon: "code"
  },
  {
    id: 2,
    title: "Associate Consultant",
    company: "Celebal Technologies",
    location: "Jaipur",
    period: "April 2024 – Dec 2024",
    description: "Led a team of 5 frontend developers, overseeing project execution, code reviews, and timely delivery of scalable web applications.",
    achievements: [
      "Led a team of 5 frontend developers, overseeing project execution, code reviews, and timely delivery of scalable web applications",
      "Developed responsive web components as a core React.js developer, focusing on performance optimization and UI/UX excellence",
      "Collaborated with clients to gather requirements and translate them into actionable technical strategies",
      "Coordinated with cross-functional teams including designers, QA, and business analysts to streamline the software development lifecycle"
    ],
    technologies: ["React.js", "Redux", "TypeScript", "Team Leadership", "Node.js"],
    icon: "users"
  },
  {
    id: 3,
    title: "Associate React Developer",
    company: "Celebal Technologies",
    location: "Jaipur",
    period: "April 2021 – March 2024",
    description: "Developed a range of web applications including chatbots, Microsoft Teams modules, and Progressive Web Apps.",
    achievements: [
      "Developed a range of web applications as a React.js developer—including chatbots, Microsoft Teams modules, and Progressive Web Apps",
      "Collaborated with UI/UX designers to transform design concepts into seamless, visually appealing interfaces",
      "Worked with backend teams to define API contracts, streamline data integration, and troubleshoot application errors",
      "Facilitated cross-functional coordination with QA, business analysts, and project managers"
    ],
    technologies: ["React.js", "PWA", "Material-UI", "Fluent UI", "Redux", "Context API"],
    icon: "react"
  },
  {
    id: 4,
    title: "Quality Analyst",
    company: "Teleperformance",
    location: "Mansarovar Jaipur",
    period: "August 2018 – May 2020",
    description: "Prepared detailed quality reports and analyses, providing actionable insights for team leaders and management.",
    achievements: [
      "Prepared detailed quality reports and analyses, providing actionable insights for team leaders and management",
      "Conducted regular calibration sessions with QA analysts, team leaders, and agents",
      "Identified process gaps and recommended solutions, which streamlined workflows",
      "Collaborated with cross-functional teams to align quality assurance practices with organizational goals"
    ],
    technologies: ["Quality Assurance", "Process Improvement", "Team Coordination", "Analytics"],
    icon: "chart-line"
  }
];

export const projects = [
  {
    id: 1,
    title: "FinTech Application Dashboard",
    description: "Comprehensive fintech dashboard using Next.js for a US-based financial services platform that serves tax advisors and equity advisors managing portfolios for individual clients.",
    features: [
      "Next.js for server-side rendering and optimal performance",
      "Carbon Design System (@carbon/react) for consistent enterprise-grade UI components",
      "AG Grid for handling large datasets in tabular format with advanced features",
      "Implemented efficient state management like redux for handling complex financial data flows",
      "Used cypress testing for end-to-end testing of app to ensure different workflow"
    ],
    technologies: ["Next.js", "Carbon Design", "AG Grid", "Redux", "Cypress", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "FinTech",
    status: "Completed"
  },
  {
    id: 2,
    title: "PWA (Progressive Web App)",
    description: "Progressive Web Application using React and TypeScript tailored for marine crews, enabling seamless installation on any device and enhancing accessibility for job management tasks.",
    features: [
      "Implemented push notification functionality to keep users informed of updates and changes",
      "Leveraged service worker and cache storage API to provide offline capability",
      "Engineered a one-time login functionality utilizing API authentication",
      "Designed a user-friendly interface with responsive design",
      "Implemented intuitive navigation and organization of data, presenting craft details in both list and card views"
    ],
    technologies: ["React", "TypeScript", "PWA", "Service Workers", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Mobile",
    status: "Completed"
  },
  {
    id: 3,
    title: "Web Chat Bot Application",
    description: "Visually appealing web chat application utilizing Bot Framework Web Chat and Direct Line, featuring customized UI elements tailored to client specifications.",
    features: [
      "Implemented extensive customization within the chatbot interface to display responses in various formats",
      "Integrated Azure Bot Framework and Azure OpenAI to leverage client data stored in CSV files",
      "Ensured secure access to the chatbot application through Azure AD authentication",
      "Provided a repository of frequently asked questions to streamline user interactions"
    ],
    technologies: ["Azure Bot Framework", "Azure OpenAI", "React MSAL", "Direct Line", "Azure AD"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "AI/ML",
    status: "Completed"
  },
  {
    id: 4,
    title: "EDPMS (Export Data Processing & Monitoring System)",
    description: "Comprehensive React web application for vendor management in the EDPMS system, facilitating multi-layered invoice approval processes.",
    features: [
      "Developed a dynamic dashboard for real-time visualization of request data using pie charts",
      "Implemented a robust request management system featuring a detailed tabular view",
      "Advanced user and role management features to tailor access and functionalities",
      "Integrated secure Azure AD authentication using the React MSAL library"
    ],
    technologies: ["React.js", "TypeScript", "Redux Saga", "Material UI", "Azure AD"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Enterprise",
    status: "Completed"
  }
];

export const skills = {
  frontend: [
    { name: "React.js & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Redux / Redux Toolkit", level: 88 },
    { name: "Material UI / Fluent UI", level: 85 },
    { name: "HTML5 & CSS3", level: 92 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "SQL & Database Design", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Azure DevOps", level: 82 },
    { name: "Testing (Cypress, Jest)", level: 78 }
  ],
  technologies: [
    { name: "React", icon: "react", color: "blue" },
    { name: "TypeScript", icon: "typescript", color: "blue" },
    { name: "Node.js", icon: "nodejs", color: "green" },
    { name: "Next.js", icon: "nextjs", color: "gray" },
    { name: "Docker", icon: "docker", color: "blue" },
    { name: "Git", icon: "git", color: "orange" },
    { name: "SQL", icon: "database", color: "blue" },
    { name: "Azure", icon: "cloud", color: "blue" }
  ]
};

export const accomplishments = [
  "Acknowledged for outstanding mentorship, receiving certification for training and guiding React.js interns",
  "Received the Captain Consistent Award in 2024 for outstanding in-office presence, logging 214 days and 1,749 hours of work",
  "Led successful migration of legacy applications to modern React architecture",
  "Contributed to open-source projects and community knowledge sharing"
];

export const education = {
  degree: "B. Tech Computer Science",
  percentage: "73%",
  period: "2013-2017",
  institution: "Laxmi Devi Institute of Engineering and Technology, Alwar",
  university: "Rajasthan Technical University Kota",
  location: "Rajasthan, India"
};
