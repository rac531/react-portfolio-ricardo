import project6 from "../assets/projects/project-6.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpeg";
import project7 from "../assets/projects/project-7.jpeg";

export const HERO_CONTENT = `I am a full time computer science student with a passion for machine
 learning and fullstack software development. In my 3 years of education and hands-on
  experience, I have become proficient in Python, C++, JavaScript and HTML. My goal is to expand my skillset
   and be able to use it to create innovative solutions that drive business growth and provide users
    great experiences.`;

export const ABOUT_TEXT = `I am a dedicated full-time student with a passion for learning new skills and creating
efficient web applications. I am currently a junior at the University of Nevada, Las Vegas where I am working
towards a Bachelor’s in Computer Science. Recently, I have found a passion for machine learning and AI and am
currently acquiring the skills needed to be a machine learning/AI engineer. My current experience consists of 
assignments and personal projects and I am ready to apply my knowledge in the workforce.
I thrive in collaborative environments and enjoy solving complex issues to deliver high-quality solutions.
 Outside of coding, I enjoy exploring new things, specifically technology, restaurants, and music artists.`;

export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "AI Trainer",
    company: "Handshake AI Fellowship",
    description:
      "Developed and evaluated prompts to assess the performance of large language models. Analyzed LLM outputs for scientific accuracy, clarity, and depth in specialized subfields. Conducted independent research to support prompt development and evaluation tasks",
  },
  {
    year: "2023 - Present",
    role: "Digital Team Associate / Delivery Driver",
    company: "Walmart",
    description: `Supported daily operations for a team of 15+ associates handling high-volume online orders, helping coordinate workflow and task assignments. Assisted in backroom management, prioritizing order fulfillment, monitoring performance metrics, and ensuring operational efficiency. Delivered merchandise outside/inside of customer’s homes within the expected timeframe while adhering to company standards and
    accommodating individual customer needs. Collaborated with team members and leadership to resolve issues, streamline processes, and maintain productivity during peak periods.`,
  },
  {
    year: "2022 - 2023",
    role: "Computer Help Desk Assistant",
    company: "University of Nevada, Las Vegas",
    description: `Provided Tier 1 technical support to students, faculty, and staff by diagnosing and troubleshooting Windows/Mac OS, printers, and personal
mobile devices in both onsite and remote environments. Supported users with audio/video recording and editing tools by diagnosing technical issues and improving functionality for academic and
media projects. Maintained a high level of customer service by translating technical concepts into clear, user-friendly guidance in a fast-paced campus
environment.`,
  },
  {
    year: "2021 - 2022",
    role: "Office of Technology Services Assistant",
    company: "College of Southern Nevada",
    description: `Performed hardware and software maintenance on campus computer systems, ensuring reliable operation across multiple locations. Collaborated with IT staff to troubleshoot and resolve technical problems, reducing downtime for students and faculty. Supported setup and configuration of technology for campus events, including AV equipment and network connectivity. Assisted with system diagnostics, equipment deployment, and technical issue resolution across multiple campuses.`,
  },
];
export const EDUCATION = [
  {
    year: "May 2025",
    degree: "Bachelors in Computer Science",
    school: "University of Nevada, Las Vegas",
    //description:
    highlights: ["Deans List", "3.5 GPA"],
  },
  {
    year: "May 2022",
    degree: "Associate of Science",
    school: "College of Southern Nevada",
    //description:
    highlights: ["Deans List", "3.6 GPA"],
  },
];
export const PROJECTS = [
  // {
  //   title: "Portfolio Website",
  //   link: "#",
  //   image: project3,
  //   description:
  //     "This is a website that acts as my portfolio. It contains my information, social media links, transcript downloads, and a link to send me an email. The website was constructed using the React library in JavaScript. Each element of the website was deconstructed in separate files to allow different functions and animations throughout the webpage. Each element has its own Javascript file and CSS file for formatting. The result is a multifunctional webpage that works across desktops and different mobile devices. It has many elements like images, external links and animations",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  {
    title: "Expense Tracker",
    link: "#",
    image: project4,
    description:
      "A multi-page website where a user can register and log into their account to upload and keep track of their expenses. Built using Python and Flask. Utilized Bootstrap for the frontend and PostgreSQL on AWS RDS for the database. Containerized the application using Docker and deployed it on AWS ECS.",
    technologies: ["Python", "Flask", "Bootstrap", "Docker", "AWS"],
  },
  {
    title: "Image Text Translator",
    link: "https://image-text-translator-eight.vercel.app",
    image: project6,
    description:
      "This is a website where a user uploads an image and selects a language. Using Microsoft Azure's OCR, any text detected in the image is extracted and using pythons translate library, the text is translated into the language specified by the user.",
    technologies: ["Python", "React", "Azure", "Render", "Vercel", "Flask"],
  },
  {
    title: "IoT Sensor Data Anomaly Detector",
    link: "#",
    image: project7,
    description:
      "Built a data pipeline using Kafka that consists of a producer python file that generates IoT sensor data (temperature and humidity) and sends it to a kafka topic. A consumer python file then reads the data from Kafka, processes it and then uses a trained machine model to detect and flag anomalies in real-time.",
    technologies: ["Python", "Kafka"],
  },
  // {
  //   title: "MeFest",
  //   link: "https://youtu.be/Eowd6ewhyyI",
  //   image: project1,
  //   description:
  //     "A website that redirects the user to the spotify website and prompts them to log into their account. It then redirects them back to the website where they will find an image displaying their top 40 artists in the form of a festival lineup. Utilized a Python file to navigate Spotify’s API and get the data it needs. Used the Flask library to create the webpage and HTML files to increase the App’s efficiency. Utilized the Pillow python library to create the image",
  //   technologies: ["Python", "HTML", "Flask", "Pillow"],
  // },
  {
    title: "Bank Database",
    link: "https://youtu.be/zIaoLRz4Rww",
    image: project4,
    description:
      "A database that reads and stores a csv file containing a bank's data. Users are then presented with multiple prompts and different data is updated and/or displayed depending on the user’s responses. Utilized a C++ file with a header file containing a custom made hashmap used to store the data. After the file is stored in a hashmap data structure, the user is given questions such as the branch name, account name and account pin in order to securely access the right data. The user then has the option to view the account, make a deposit, and make a withdrawal",
    technologies: ["C++"],
  },
];

export const CONTACT = {
  address: "Las Vegas, NV 89108",
  phoneNo: "702-272-5109",
  email: "cardenasr541@gmail.com",
};
