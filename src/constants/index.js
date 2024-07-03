import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a full time computer science student with a passion for full stack
 software development which I am working towards a career in. In my 3 years of education and hands-on
  experience, I have become proficient in Python, C++, JavaScript and HTML. My goal is to expand my skillset
   and be able to use it to create innovative solutions that drive business growth and provide users
    great experiences.`;

export const ABOUT_TEXT = `I am dedicated full-time student with a passion for learning new skills and creating
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
    title: "MeFest - work on title",
    image: project1,
    description:
      "A website that displays your top artists on Spotify in an image in the form of a festival lineup.",
    technologies: ["Python", "HTML", "Flask", "Pillow"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Bank Database",
    image: project4,
    description:
      "A bank database that stores data from a txt file and can be updated and accessed with various user commands.",
    technologies: ["C++"],
  },
];

export const CONTACT = {
  address: "6324 Barkstone Ave, Las Vegas, NV 89108",
  phoneNo: "702-272-5109",
  email: "cardenasr541@gmail.com",
};
