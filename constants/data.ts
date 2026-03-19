export const navLinks = [
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Beyond',
    hash: '#beyond',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#project',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
  {
    name: 'Blog',
    hash: 'https://blog.yashpatel.dev/',
  },
] as const;

export const experiencesData = [
  {
    id: 'plgrd-experience',
    title: 'API Specialist / API Integration Developer',
    company: 'Plusgrade',
    companyUrl: 'https://www.plusgrade.com/',
    location: 'Toronto, Canada',
    description:
      '• Spearheaded the development and maintenance of the company\'s website, initially using WordPress for static hosting on AWS and later transitioning to Next.js deployed over Azure for improved performance and scalability. Implemented AppWrite as a Backend-as-a-Service (BaaS) solution, reducing backend development time by 60% and improving overall system scalability. Engineered a cross-platform mobile application using React Native, enabling the company to reach both iOS and Android users with a single codebase, resulting in a 50% reduction in development costs.',
    icon: '/assets/images/mmr-logo.png',
    date: 'May, 2024 - Present',
    skills: ['Next.js', 'React Native', 'Azure', 'Git', 'BaaS', 'TailwindCSS'],
  },
  {
    id: 'mmr-experience',
    title: 'Software Developer',
    company: 'Match My Roomie',
    companyUrl: 'https://matchmyroomie.com/',
    location: 'Canada',
    description:
      '• Spearheaded the development and maintenance of the company\'s website, initially using WordPress for static hosting on AWS and later transitioning to Next.js deployed over Azure for improved performance and scalability. Implemented AppWrite as a Backend-as-a-Service (BaaS) solution, reducing backend development time by 60% and improving overall system scalability. Engineered a cross-platform mobile application using React Native, enabling the company to reach both iOS and Android users with a single codebase, resulting in a 50% reduction in development costs.',
    icon: '/assets/images/mmr-logo.png',
    date: 'May, 2024 - Present',
    skills: ['Next.js', 'React Native', 'Azure', 'Git', 'BaaS', 'TailwindCSS'],
  },
  {
    id: 'agfa-experience',
    title: 'Software Developer - (CO-OP)',
    company: 'Agfa Healthcare',
    companyUrl: 'https://www.agfa.com/',
    location: 'Waterloo, Canada',
    description:
      'Improved software reliability by 30% through resolving automated test issues and achieved 100% compliance with healthcare standards. Utilized Mockito, JUnit, and Bitbucket for efficient testing and version control. Actively participated in Agile ceremonies and leveraged DevOps tools to streamline development and deployment, ensuring adherence to industry regulations like DICOM, HL7, and FHIR.',
    icon: '/assets/images/agfa-logo.png',
    date: 'Jan, 2023 - May, 2023',
    skills: ['Java', 'Junit', 'Automated tests', 'Git', 'Mockito', 'Jenkins'],
  },
  {
    id: 'tcs-experience',
    title: 'System Engineer / Developer',
    company: 'Tata Consultancy Services Ltd',
    companyUrl: 'https://www.tcs.com/',
    location: 'Mumbai, India',
    description:
      'Led backend development with Java EE, focusing on scalable architectures and secure MySQL databases. Directed Jakarta XML Web Services implementation, integrated Hazelcast Caching for 25% faster load times, and utilized Apache POI for big data management. Developed RESTful APIs, enhanced version control with SVN, and authored comprehensive documentation, ensuring data integrity and seamless user experiences.',
    icon: '/assets/images/tcs-logo.png',
    date: 'Jun, 2020 - Jun, 2022',
    skills: ['Java', 'React', 'MySQL', 'REST APIs', 'Git', 'Back-end'],
  },
  {
    id: 'evosys-experience',
    title: 'BI Developer',
    company: 'Evosys',
    companyUrl: 'https://www.evosysglobal.com/',
    location: 'Ahmedabad, India',
    description:
      'As a Business Intelligence Developer Intern at Evolutionary Systems in 2019, collaboratively developed a Digital Assistant deployed on Google Assistant, leveraging Oracle\'s infrastructure. Utilizing DialogFlow\'s popularity, integrated Google services like translation and digital assistants into a chatbot solution, identifying new service offerings the company could provide to potential customers.',
    icon: '/assets/images/evosys-logo.png',
    date: 'May, 2019 - Jul, 2019',
    skills: ['JavaScript', 'Python', 'SaaS', 'Node.js', 'Chatbot', 'Oracle'],
  },
  {
    id: 'More',
    title: 'Next Adventure?',
    company: '',
    companyUrl: 'https://www.linkedin.com/in/yash-patel-dev/',
    location: 'Anywhere',
    description:
      "I'm always looking for new challenges and opportunities to grow my skills and knowledge. If you're interested in working with me, feel free to reach out to me.",
    icon: '/assets/images/personal-brand-logo.png',
    date: 'Present - Future',
    skills: [],
  },
] as const;

export const projects = [
  {
    id: 'bad',
    number: '01',
    title: 'Business Analytical Dashboard',
    description:
      "Led the Capstone Project to develop an analytics dashboard using the MERN stack deployed over Firebase — recognized as 'Best of Program' for innovative use of technology to visualize company performance data.",
    techStack: ['TypeScript', 'React', 'Node.js', 'MySQL', 'Firebase', 'JEST'],
    link: 'https://www.figma.com/design/F1t3BCpGlyDdVksOQhrQXI/Capstone-Presentation?node-id=29-29&t=aJ5gflohi2F3ymD0-1',
    linkLabel: 'View on Figma ↗',
    category: 'Dashboard',
  },
  {
    id: 'wm',
    number: '02',
    title: 'Wander Mission',
    description:
      'Engineered a scalable travel platform with MongoDB and Amazon RDS, showcasing familiarity with AWS services. Utilized Redux for state management and Mongoose for MongoDB interaction, ensuring efficient data handling.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'AWS RDS'],
    link: 'https://github.com/yashpatel024/WanderMission-Travel-beyond-your-imagination',
    linkLabel: 'View on GitHub ↗',
    category: 'Web App',
  },
  {
    id: 'placeholder',
    number: '03',
    title: 'Coming Soon',
    description:
      'A new project currently in the works — an exploration of system design and product thinking put into code. Stay tuned.',
    techStack: ['TBD'],
    link: '#',
    linkLabel: 'In Progress',
    category: 'TBD',
  },
] as const;

export const personalData = {
  currentlyReading: {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    note: "On finding purpose through suffering — a perspective that reshapes how I think about meaningful work and what's worth building.",
  },
  cards: [
    {
      id: 'obsessing',
      label: 'Currently Obsessing Over',
      content: '[Placeholder — e.g. system design trade-offs, distributed systems, AI-native products]',
    },
    {
      id: 'not-engineering',
      label: "When I'm Not Engineering",
      content: '[Placeholder — hobbies, interests outside of tech]',
    },
    {
      id: 'believe-in',
      label: 'I Believe In',
      content: '[Placeholder — values, principles, e.g. "Systems thinking over quick fixes"]',
    },
    {
      id: 'fun-fact',
      label: 'Fun Fact',
      content: '[Placeholder — something surprising or memorable about you]',
    },
  ],
  interests: [
    'System Design',
    'Software Architecture',
    'Product Strategy',
    'Distributed Systems',
    'Developer Experience',
    'API Design',
  ],
} as const;
