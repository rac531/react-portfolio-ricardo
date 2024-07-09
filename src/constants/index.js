import project1 from "../assets/projects/project-1.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a full time computer science student with a passion for full stack
 software development which I am working towards a career in. In my 3 years of education and hands-on
  experience, I have become proficient in Python, C++, JavaScript and HTML. My goal is to expand my skillset
   and be able to use it to create innovative solutions that drive business growth and provide users
    great experiences.`;

export const ABOUT_TEXT = `I am a dedicated full-time student with a passion for learning new skills and creating
efficient web applications. I am currently a junior at the University of Nevada, Las Vegas where I am working
towards a Bachelor’s in Computer Science. I have experience programming in Python, C++, JavaScript and HTML
and I am working on learning more languages as well as technologies within those languages. My current
experience consists of assignments and personal projects and I am ready to apply my knowledge in the workforce.
I thrive in collaborative environments and enjoy solving complex issues to deliver high-quality solutions.
 Outside of coding, I enjoy exploring new things, specifically technology, restaurants, and music artists.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Digital Personal Shopper",
    company: "Walmart",
    description: `Served customers with knowledgeable and friendly support by answering questions regarding products and price checks.
    Operated digital devices to pick items ordered by customers, stage orders in the storage area, and perform quality checks.
    Dispensed an average of 80 orders a day to customers in a timely fashion, reviewing substitutions for customer approval, and loading groceries into customer vehicle
    `,
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
  }
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
  }
];
export const PROJECTS = [
  {
    title: "Portfolio Website",
    link: "#",
    image: project3,
    description:
      "This is a website that acts as my portfolio. It contains my information, social media links, transcript downloads, and a link to send me an email. The website was constructed using the React library in JavaScript. Each element of the website was deconstructed in separate files to allow different functions and animations throughout the webpage. Each element has its own Javascript file and CSS file for formatting. The result is a multifunctional webpage that works across desktops and different mobile devices. It has many elements like images, external links and animations",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
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
