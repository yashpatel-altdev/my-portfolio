'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  position: relative;

  .label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
    margin-bottom: 24px;
  }

  h1 {
    font-size: clamp(56px, 8vw, 96px);
    font-weight: 700;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    line-height: 1;
    margin: 0 0 20px 0;
  }

  h2 {
    font-size: clamp(18px, 2.5vw, 28px);
    font-weight: 300;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    margin: 0 0 20px 0;
  }

  .bio {
    font-size: 16px;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
    max-width: 480px;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .cta-links {
    display: flex;
    gap: 32px;

    a {
      font-size: 14px;
      font-weight: 500;
      color: var(--v2-text-accent);
      text-decoration: none;
      font-family: var(--font-sans);
      border-bottom: 1px solid var(--v2-border-line);
      padding-bottom: 2px;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 48px;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    span {
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--v2-text-secondary);
      font-family: var(--font-sans);
    }

    .line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, var(--v2-text-secondary), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function V2Hero() {
  return (
    <StyledHero id="home">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p className="label" variants={item}>
          Software Engineer
        </motion.p>
        <motion.h1 variants={item}>Yash Patel</motion.h1>
        <motion.h2 variants={item}>Systems Thinker & Product Builder</motion.h2>
        <motion.p className="bio" variants={item}>
          Engineering products from architecture to deployment — with an eye on the larger picture:
          system design, scalability, and the product decisions that actually matter.
        </motion.p>
        <motion.div className="cta-links" variants={item}>
          <a href="#about">
            About me ↓
          </a>
          <a
            href="https://drive.google.com/file/d/1DK6NxO7E3IFn5dZper-9Z2wD09vDTkQN/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </motion.div>
      </motion.div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="line" />
      </div>
    </StyledHero>
  );
}
