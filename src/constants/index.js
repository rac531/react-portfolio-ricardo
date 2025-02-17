import project1 from "../assets/projects/project-1.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-6.jpeg";
import expenseproject from "../assets/projects/expense-project.png";
import iotImage from "../assets/projects/IoTImage.jpeg";

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
    year: "2023 - Present",
    role: "Digital Team Associate",
    company: "Walmart",
    description: `Responsible for leading the team in charge of online orders when the manager was not present. Managed the backroom and assigned tasks accordingly as well as reviewed performance metrics, planned for the day ahead, and addressed
    customer concerns. Dispense an average of 80 orders a day to customers in a timely fashion, reviewing substitutions for customer approval.`,
  },
  {
    year: "2022 - 2023",
    role: "Computer Help Desk Assistant",
    company: "University of Nevada, Las Vegas",
    description: `Guided users with navigating software such as Microsoft Office. 
    Provided guidance in audio and video recording and editing technologies.
    Answered informational and directional questions by phone or in person`,
  },
  {
    year: "2021 - 2022",
    role: "Office of Technology Services Assistant",
    company: "College of Southern Nevada",
    description: `Software and hardware maintenance of computer equipment.
    Communicated with other colleagues to identify and resolve technical problems as well as set up technology needs at events throughout all CSN campuses.
    Responded to an average of 15 help tickets relating to issues with campus software or hardware.
    `,
  },
];
export const EDUCATION = [
  {
    year: "Expected Graduation Date, May 2025",
    degree: "Bachelor of Arts in Computer Science",
    school: "University of Nevada, Las Vegas",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    highlights: ["Deans List", "3.8 GPA"],
  },
  {
    year: "May 2022",
    degree: "Associate of Science",
    school: "College of Southern Nevada",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    highlights: ["Deans List", "3.6 GPA"],
  },
];
export const PROJECTS = [
  {
    title: "Expense Tracker",
    link: "#",
    image: project4,
    description:
      "A multi-page website where a user can register and log into their account to upload and keep track of their expenses. Built using Python and Flask. Utilized Bootstrap for the frontend and PostgreSQL on AWS RDS for the database. Containerized the application using Docker and deployed it on AWS ECS.",
    technologies: ["Python", "Flask", "Bootstrap", "Docker", "AWS"],
  },
  {
    title: "Portfolio Website",
    link: "#",
    image: expenseproject,
    description:
      "This is a website that acts as my portfolio. It contains my information, social media links, transcript downloads, and a link to send me an email. The website was constructed using the React library in JavaScript. Each element of the website was deconstructed in separate files to allow different functions and animations throughout the webpage. Each element has its own Javascript file and CSS file for formatting. The result is a multifunctional webpage that works across desktops and different mobile devices. It has many elements like images, external links and animations",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "IoT Sensor Data Anomaly Detector",
    link: "#",
    image: iotImage,
    description:
      "Built a data pipeline using Kafka that consists of a producer python file that generates IoT sensor data (temperature and humidity) and sends it to a kafka topic. A consumer python file then reads the data from Kafka, processes it and then uses a trained machine model to detect and flag anomalies in real-time.",
    technologies: ["Python", "Kafka"],
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
    title: "MeFest",
    link: "https://youtu.be/Eowd6ewhyyI",
    image: project1,
    description:
      "A website that redirects the user to the spotify website and prompts them to log into their account. It then redirects them back to the website where they will find an image displaying their top 40 artists in the form of a festival lineup. Utilized a Python file to navigate Spotify’s API and get the data it needs. Used the Flask library to create the webpage and HTML files to increase the App’s efficiency. Utilized the Pillow python library to create the image",
    technologies: ["Python", "HTML", "Flask", "Pillow"],
  },
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
  address: "6324 Barkstone Ave, Las Vegas, NV 89108",
  phoneNo: "702-272-5109",
  email: "cardenasr541@gmail.com",
};
