import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Menu, X, ChevronRight, Download } from 'lucide-react';

export const DATA = {
  name: "Dinesh Muthukrishnan",
  role: "Software Developer",
  specialization: "MERN Stack, AWS & Salesforce",
  location: "Tirupur, Tamil Nadu, India",
  email: "dineshmuthu521@gmail.com",
  phone: "+91 87542 54269",
  linkedin: "https://linkedin.com/in/dineshmuthukrishnan", // Assuming standard URL
  summary: "Software Developer with 2+ years of experience building scalable applications using the MERN stack. I specialize in developing REST APIs, optimizing backend performance, and crafting responsive user interfaces. Strong background in Agile development, database optimization, and integrating third-party services across distributed systems.",
  education: {
    degree: "B.E. Electronics & Communication Engineering",
    school: "KPR Institute of Engineering and Technology, Anna University",
    period: "2015 - 2019",
    cgpa: "7.0 / 10"
  },
  skills: {
    frontend: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS", "MUI", "Vite.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "Sequelize ORM", "MVC Architecture"],
    databases: ["MySQL", "MongoDB"],
    devops: ["AWS EC2", "AWS S3", "Azure", "Docker", "Git", "Bitbucket"],
    languages: ["JavaScript (ES6+)", "TypeScript", "C", "C++", "Java"],
    tools: ["JIRA", "Postman", "Jest", "Selenium", "JMeter"]
  },
  experience: [
    {
      company: "Jeev AI Private Limited (turned to Doxor)",
      role: "Frontend Developer",
      period: "Sep 2024 - Nov 2024",
      location: "Mysuru, Karnataka",
      url: "https://www.doxor.in/",
      logo: "/assets/doxor_logo.jpg",
      points: [
        "Built reusable React components improving caching and persistence across modules.",
        "Structured responsive authentication and dashboard interfaces, improving load time by 40%.",
        "Enhanced UI performance and engagement by 30% via optimized rendering and state management."
      ]
    },
    {
      company: "PF Digital Private Limited",
      role: "Software Developer",
      period: "May 2022 - May 2024",
      location: "Erode, Tamil Nadu",
      url: "https://pfdigital.in/",
      logo: "/assets/pf_digital_logo.png",
      points: [
        "Engineered scalable applications using Express.js and React, improving API response times by 30%.",
        "Integrated MuleSoft and Salesforce LWC components, increasing workflow efficiency by 20%.",
        "Implemented a custom email service using Node mailer, reducing delivery costs by 45%.",
        "Automated file-handling processes saving over 6 hours of manual work per week.",
        "Deployed applications on AWS EC2 reducing hosting expenses by 13%.",
        "Optimized MySQL queries using Sequelize ORM reducing execution time by 300ms."
      ]
    }
  ],
  projects: [
    {
      title: "EROCRM",
      subtitle: "Custom Featured CRM",
      description: "Pioneered a CRM system with admin dashboards, feedback module, and email automation.",
      tech: ["React v.19", "Node.js", "MySQL", "AWS EC2/S3", "Postman", "Selenium"],
      points: [
        "Integrated JWT authentication, Node Mailer, and AWS EC2 hosting.",
        "Improved API performance by 25% via lazy loading and query optimization."
      ]
    },
    {
      title: "FSB",
      subtitle: "Banking Platform",
      description: "Built 7 Lightning Web Components improving lead processing speed by 15%.",
      tech: ["Salesforce Cloud", "Lightning Web Components", "MuleSoft APIs"],
      url: "https://www.firststate.bank/",
      points: [
        "Automated data synchronization via MuleSoft APIs reducing manual effort by 50%."
      ],
      logo: "/assets/fsb_logo.png"
    },
    {
      title: "DOXOR",
      subtitle: "Healthcare Support System",
      description: "Structured dashboard, charts, reports, and calendar with TypeScript.",
      tech: ["React", "TypeScript", ".NET", "MS SQL Server", "Azure", "Jest"],
      url: "https://www.doxor.in/",
      points: [
        "Integrated authorization and MS microservice for authentication.",
        "Boosted loading performance by 30% with Vite."
      ],
      logo: "/assets/doxor_logo.jpg"
    },
    {
      title: "GN1917",
      subtitle: "Order Management System",
      description: "Engineered 8 Node components with VS Code Copilot, reducing dev time by 25%.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3/Lambda", "Jest", "Postman"],
      url: "https://www.gn1917.com/?srsltid=AfmBOopY9A-5i5pgxOfR4iXwODkpGmvJSIA1nVYWxKi2PdFwQOIxUFQ7",
      points: [
        "Build database with MongoDB boosted querying performance up to 15%.",
        "Utilized MUI components in UI and dev Operations monitored in AWS S3."
      ],
      logo: "/assets/gn_logo.png"
    },
    {
      title: "Portfolio v2",
      subtitle: "Personal Branding",
      description: "Designed and developed a modern portfolio using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      points: [
        "Implemented smooth animations and responsive design.",
        "Optimized for performance and SEO."
      ],
      logo: "/assets/pf_digital_logo.png"
    }
  ],
  certifications: [
    "Salesforce Development (Trailhead) & MuleSoft Workshop",
    "Node.JS and React.JS (Self-paced online Training)",
    "BEC Preliminary Certification - Grade A (Cambridge University)"
  ],
  languages: ["Tamil (Native)", "English (Proficient)", "Kannada (Conversational)"]
};
