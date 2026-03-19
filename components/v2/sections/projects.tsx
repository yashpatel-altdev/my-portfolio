'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { projects } from '@/constants/data';

const StyledProjects = styled.section`
  padding: 120px 5%;

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 72px;

    .section-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--v2-accent-beige);
      font-family: var(--font-sans);
    }

    h2 {
      font-size: clamp(24px, 3vw, 40px);
      font-weight: 500;
      color: var(--v2-text-primary);
      font-family: var(--font-sans);
      margin: 0;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    border: 1px solid var(--v2-border-subtle);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ProjectCard = styled(motion.article)`
  position: relative;
  padding: 40px 36px;
  border-right: 1px solid var(--v2-border-subtle);
  border-bottom: 1px solid var(--v2-border-subtle);
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--v2-background);
  transition: background-color 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: var(--v2-accent-green-muted);
  }

  &:hover .card-number {
    color: var(--v2-accent-green-light);
  }

  &:hover .card-link a {
    color: var(--v2-accent-green-light);
    border-bottom-color: var(--v2-accent-green-light);
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-number {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    color: var(--v2-text-secondary);
    font-family: var(--font-mono);
    transition: color 0.3s ease;
  }

  .card-category {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--v2-accent-beige);
    font-family: var(--font-sans);
    background-color: var(--v2-accent-beige-muted);
    padding: 3px 8px;
    border-radius: 2px;
  }

  .card-title {
    font-size: clamp(18px, 1.8vw, 22px);
    font-weight: 600;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    line-height: 1.3;
    margin: 0;
  }

  .card-description {
    font-size: 14px;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    line-height: 1.7;
    flex: 1;
  }

  .card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
      font-size: 11px;
      font-family: var(--font-mono);
      color: var(--v2-text-secondary);
      border: 1px solid var(--v2-border-subtle);
      padding: 3px 8px;
      border-radius: 2px;
    }
  }

  .card-link {
    margin-top: auto;
    padding-top: 8px;

    a {
      font-size: 13px;
      font-weight: 500;
      color: var(--v2-text-accent);
      text-decoration: none;
      border-bottom: 1px solid var(--v2-border-line);
      padding-bottom: 2px;
      transition: color 0.2s ease, border-bottom-color 0.2s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function V2Projects() {
  return (
    <StyledProjects id="project">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">03 / Projects</span>
        <h2>A Collection of Work</h2>
      </motion.div>
      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} variants={cardItem}>
            <div className="card-top">
              <span className="card-number">{project.number}</span>
              <span className="card-category">{project.category}</span>
            </div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <div className="card-tech">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="card-link">
              <a
                href={project.link}
                target={project.link === '#' ? undefined : '_blank'}
                rel={project.link === '#' ? undefined : 'noreferrer'}
              >
                {project.linkLabel}
              </a>
            </div>
          </ProjectCard>
        ))}
      </motion.div>
    </StyledProjects>
  );
}
