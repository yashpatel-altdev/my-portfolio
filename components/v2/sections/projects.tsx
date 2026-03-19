'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';

const StyledProjects = styled.section`
  padding: 120px 5%;

  h2 {
    font-size: clamp(24px, 3vw, 40px);
    font-weight: 500;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    margin: 0 0 80px 0;
    text-align: right;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const ProjectItem = styled(motion.div)`
  position: relative;
  padding: 60px 0;
  border-top: 1px solid var(--v2-border-subtle);

  &:last-child {
    border-bottom: 1px solid var(--v2-border-subtle);
  }

  .project-number {
    position: absolute;
    top: 48px;
    right: 0;
    font-size: clamp(80px, 10vw, 140px);
    font-weight: 700;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
    line-height: 1;
    opacity: 0.15;
    user-select: none;
    pointer-events: none;
  }

  .project-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &:nth-child(even) .project-inner {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }

  .project-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    z-index: 1;

    h3 {
      font-size: clamp(20px, 2.5vw, 28px);
      font-weight: 600;
      color: var(--v2-text-primary);
      font-family: var(--font-sans);
      margin: 0;
    }

    .tech-stack {
      font-size: 13px;
      color: var(--v2-text-secondary);
      font-family: var(--font-sans);
    }

    hr {
      border: none;
      border-top: 1px solid var(--v2-border-subtle);
      margin: 0;
    }

    .description {
      font-size: 15px;
      color: var(--v2-text-accent);
      font-family: var(--font-sans);
      line-height: 1.7;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .project-link {
      a {
        font-size: 14px;
        font-weight: 500;
        color: var(--v2-text-accent);
        text-decoration: none;
        border-bottom: 1px solid var(--v2-border-line);
        padding-bottom: 2px;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  .project-image {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: auto;
      display: block;
      filter: grayscale(100%);
      transition: filter 0.4s ease;
    }

    &:hover img {
      filter: grayscale(0%);
    }
  }
`;

const projects = [
  {
    id: 'bad',
    title: 'Business Analytical Dashboard',
    techStack: 'TypeScript, ReactJs, NodeJs, MySQL, Firebase, JEST, NoSQL, CRON',
    description: [
      'Led the Capstone Project to develop an analytics dashboard using the MERN stack deployed over Firebase creating a robust, visually appealing, and modular user interface.',
      "Recognized as the 'Best of Program' for innovative use of technology to visualize company performance data.",
    ],
    link: 'https://www.figma.com/design/F1t3BCpGlyDdVksOQhrQXI/Capstone-Presentation?node-id=29-29&t=aJ5gflohi2F3ymD0-1',
    linkLabel: 'Figma ↗',
    image: '/assets/images/projects/bad.png',
    imageAlt: 'Business Analytical Dashboard collage',
  },
  {
    id: 'wm',
    title: 'Wander Mission',
    techStack: 'MERN, JavaScript, NodeJs, Redux.js, AWS RDS, MySQL, Mongoose',
    description: [
      'Engineered a scalable travel platform with MongoDB and Amazon RDS, showcasing familiarity with AWS services and NoSQL databases.',
      'Utilized Redux for state management and Mongoose for MongoDB interaction, ensuring efficient data handling.',
    ],
    link: 'https://github.com/yashpatel024/WanderMission-Travel-beyond-your-imagination',
    linkLabel: 'GitHub ↗',
    image: '/assets/images/projects/WM.png',
    imageAlt: 'Wander Mission MERN Project collage',
  },
];

export default function V2Projects() {
  return (
    <StyledProjects id="project">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        A Collection of Work
      </motion.h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="project-inner">
              <div className="project-details">
                <h3>{project.title}</h3>
                <p className="tech-stack">{project.techStack}</p>
                <hr />
                <div className="description">
                  {project.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="project-link">
                  <a href={project.link} target="_blank" rel="noreferrer" data-magnetic>
                    {project.linkLabel}
                  </a>
                </div>
              </div>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </ProjectItem>
        ))}
      </div>
    </StyledProjects>
  );
}
