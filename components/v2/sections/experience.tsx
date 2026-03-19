'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { experiencesData } from '@/constants/data';

type ExperienceId = (typeof experiencesData)[number]['id'];

const StyledExperience = styled.section`
  padding: 120px 5%;

  h2 {
    font-size: clamp(24px, 3vw, 40px);
    font-weight: 500;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    margin: 0 0 80px 0;
  }

  .desktop-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 80px;
    align-items: start;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-layout {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const TimelineNode = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  position: relative;

  .node-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 4px;
    background-color: ${({ $active }) =>
      $active ? '#e8e8e8' : 'rgba(255, 255, 255, 0.2)'};
    border: 1px solid ${({ $active }) =>
      $active ? '#e8e8e8' : 'rgba(255, 255, 255, 0.3)'};
    transition: all 0.25s ease;
    position: relative;
    z-index: 1;
  }

  .node-text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .node-title {
      font-size: 14px;
      font-weight: 500;
      color: ${({ $active }) => ($active ? '#e8e8e8' : '#404040')};
      font-family: var(--font-sans);
      transition: color 0.25s ease;
    }

    .node-company {
      font-size: 12px;
      color: ${({ $active }) => ($active ? '#c8c8c8' : '#404040')};
      font-family: var(--font-sans);
      transition: color 0.25s ease;
    }

    .node-date {
      font-size: 11px;
      color: #404040;
      font-family: var(--font-sans);
    }
  }

  &:hover .node-dot {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:hover .node-title {
    color: #c8c8c8;
  }
`;

const DetailPanel = styled.div`
  min-height: 400px;
  position: relative;
`;

const DetailContent = styled(motion.div)`
  .company-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;

    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      filter: grayscale(100%);
      opacity: 0.7;
    }

    .company-info {
      h3 {
        font-size: 22px;
        font-weight: 600;
        color: var(--v2-text-primary);
        font-family: var(--font-sans);
        margin: 0 0 4px 0;
      }

      a {
        font-size: 14px;
        color: var(--v2-text-secondary);
        font-family: var(--font-sans);
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .meta {
    font-size: 13px;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
    margin-bottom: 24px;
    display: flex;
    gap: 16px;
  }

  .description {
    font-size: 15px;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      font-size: 12px;
      color: var(--v2-text-secondary);
      font-family: var(--font-sans);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      padding: 4px 12px;
    }
  }
`;

const MobileAccordionItem = styled.div`
  border-top: 1px solid var(--v2-border-subtle);

  .accordion-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      flex-shrink: 0;
    }

    .header-text {
      flex: 1;

      .title {
        font-size: 15px;
        font-weight: 500;
        color: var(--v2-text-primary);
        font-family: var(--font-sans);
        margin-bottom: 2px;
      }

      .meta {
        font-size: 12px;
        color: var(--v2-text-secondary);
        font-family: var(--font-sans);
      }
    }

    .chevron {
      font-size: 18px;
      color: var(--v2-text-secondary);
      transition: transform 0.25s ease;
    }
  }

  .accordion-body {
    overflow: hidden;

    .body-inner {
      padding: 0 0 28px 24px;

      .description {
        font-size: 14px;
        color: var(--v2-text-accent);
        font-family: var(--font-sans);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;

        span {
          font-size: 11px;
          color: var(--v2-text-secondary);
          font-family: var(--font-sans);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          padding: 3px 10px;
        }
      }
    }
  }
`;

export default function V2Experience() {
  const realExperiences = experiencesData.filter((e) => e.id !== 'More');
  const [activeId, setActiveId] = useState<ExperienceId>(realExperiences[0].id);
  const [openMobileId, setOpenMobileId] = useState<ExperienceId | null>(null);

  const activeExp = experiencesData.find((e) => e.id === activeId)!;

  return (
    <StyledExperience id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Where I&apos;ve Worked
      </motion.h2>

      {/* Desktop two-column layout */}
      <div className="desktop-layout">
        <Timeline>
          {realExperiences.map((exp) => (
            <TimelineNode
              key={exp.id}
              $active={activeId === exp.id}
              onClick={() => setActiveId(exp.id)}
              data-magnetic
            >
              <div className="node-dot" />
              <div className="node-text">
                <span className="node-title">{exp.title}</span>
                <span className="node-company">{exp.company}</span>
                <span className="node-date">{exp.date}</span>
              </div>
            </TimelineNode>
          ))}
        </Timeline>

        <DetailPanel>
          <AnimatePresence mode="wait">
            <DetailContent
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="company-header">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={activeExp.icon} alt={`${activeExp.company} logo`} />
                <div className="company-info">
                  <h3>{activeExp.title}</h3>
                  <a href={activeExp.companyUrl} target="_blank" rel="noreferrer">
                    {activeExp.company} ↗
                  </a>
                </div>
              </div>
              <div className="meta">
                <span>{activeExp.date}</span>
                <span>·</span>
                <span>{activeExp.location}</span>
              </div>
              <p className="description">{activeExp.description}</p>
              {activeExp.skills.length > 0 && (
                <div className="skills">
                  {activeExp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              )}
            </DetailContent>
          </AnimatePresence>
        </DetailPanel>
      </div>

      {/* Mobile accordion layout */}
      <div className="mobile-layout">
        {realExperiences.map((exp) => {
          const isOpen = openMobileId === exp.id;
          return (
            <MobileAccordionItem key={exp.id}>
              <div
                className="accordion-header"
                onClick={() => setOpenMobileId(isOpen ? null : exp.id)}
              >
                <div className="dot" />
                <div className="header-text">
                  <div className="title">{exp.title}</div>
                  <div className="meta">
                    {exp.company} · {exp.date}
                  </div>
                </div>
                <span className="chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                  ↓
                </span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="accordion-body"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="body-inner">
                      <p className="description">{exp.description}</p>
                      {exp.skills.length > 0 && (
                        <div className="skills">
                          {exp.skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </MobileAccordionItem>
          );
        })}
      </div>
    </StyledExperience>
  );
}
