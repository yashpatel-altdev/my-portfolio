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
      'Drove technical integrations for Loyalty Program partners — analyzing requirements, authoring API contracts and integration guides, and participating in partner engineering discussions to refine error handling and end-to-end test scenarios. Configured OAuth2, OIDC, and SAML authentication flows, reducing auth issues through improved validation logic. Provided L3 support via Splunk, performed UI updates via GitLab CI/CD, and leveraged AI tools (Gemini, Glean) to accelerate configuration and pattern research.',
    icon: '/assets/images/plusgrade.jpeg',
    date: 'Nov, 2024 - Present',
    skills: ['System Design', 'REST', 'SOAP', 'GraphQL', 'OAuth2', 'OIDC', 'SAML', 'Python', 'JavaScript', 'Splunk'],
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
      content: 'Agentic systems, MCP, context engineering, and the broader implications of AI on system architecture — how the primitives of software are being fundamentally redesigned.',
    },
    {
      id: 'not-engineering',
      label: "When I'm Not Engineering",
      content: 'Working out, hiking, playing or watching sports, reading, and hunting down hidden gems — places most people walk right past.',
    },
    {
      id: 'believe-in',
      label: 'I Believe In',
      content: 'Consistency and hard work above all. That good things happen to good people. And that you can believe in the larger scheme of things without needing a religion to frame it.',
    },
    {
      id: 'fun-fact',
      label: 'Fun Fact',
      content: "I'm a committed generalist — city skylines and quiet mountains, stadiums and living rooms, all cuisines and all genres. I'll go hiking with a group of ten or spend the weekend on the couch with my partner. The only common thread: I'm genuinely curious about all of it.",
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
