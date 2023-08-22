import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    innovaciones,
    univalle,
    hospital_manage,
    lets_code,
    denise,
    threejs,
    fiverr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile App Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
  ];
  
  const experiences = [
    {
      title: "3D model designer",
      company_name: "Innovaciones Chamorro",
      icon: innovaciones,
      iconBg: "#383E56",
      date: "March 2020 - Present",
      points: [
        "Designed 3D machinery models achieving a 20% of reduction in manufacturing time.",
        "Built inventory system saving 9% money in material loss.",
        "Researched and implemented salesforce monitoring according to results using statistical tools.",
      ],
    },
    {
      title: "Java Software Developer",
      company_name: "Universidad del Valle",
      icon: univalle,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Built AM signal modulation Desktop application.",
        "Developed and Assembled a GoalKeeper robot using C language.",
        "Headed Java investigation group to calculate student dropout rate.",
        "Collaborated closely with the Analysis And Compensation Of Linear Systems team work for the design and assembled of the PID control of a robotic leg.",
      ],
    },
    {
      title: "Freelancer Web Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "May 2022 - Present",
      points: [
        "Website designing for the Fiverr community",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hospital Management",
      description:
        "Web-based platform that allows users to make create a profile, manage appointments with specialist doctors and cancel them as well. This program allows 3 different kind of users, patients, doctors and admin which have the entire control of the web.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: hospital_manage,
      source_code_link: "https://github.com/sebastian5460/Hospital_management",
    },
    {
      name: "Let's code",
      description:
        "It's a web blog where users can talk about programming and technology, the admin has must part of the control but identified users can make their own contributions.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: lets_code,
      source_code_link: "https://github.com/sebastian5460/lets_code/",
    },
    {
      name: "Denise e-commerce",
      description:
        "Denise e-commerce it's an e-commerce focused in the fashion clothe sells, it's design is comfortable and nice to look at.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient", //blue-text-gradien
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
      ],
      image: denise,
      source_code_link: "https://github.com/sebastian5460/fashion-ecommerce/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };