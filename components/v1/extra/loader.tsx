'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledLoader = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-div {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader-svg {
      position: absolute;
      width: 75px;
    }
  }
`;

const slideUp = {
  initial: { top: 0 },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: 'easeInOut' as const, delay: 0.2 },
  },
};

const svgCircleVariants = {
  animate: {
    opacity: 1,
    y: [0, 20, 0],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: 'easeInOut' as const,
    },
  },
};

export default function Loader() {
  return (
    <StyledLoader>
      <div className="loader-div">
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="loader-svg"
        >
          <motion.svg
            id="icon-logo"
            width="100%"
            height="100%"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <g id="Group 11">
              <motion.circle
                variants={svgCircleVariants}
                animate="animate"
                id="Ellipse 5"
                cx="8.39041"
                cy="8.39041"
                r="8.39041"
                fill="white"
              />
              <path
                id="Rectangle 18"
                d="M18.7808 3C18.7808 1.34314 20.1239 0 21.7808 0H35.5616V18.2192C35.5616 27.487 28.0486 35 18.7808 35V35V3Z"
                fill="white"
              />
            </g>
          </motion.svg>
        </motion.div>
      </div>
    </StyledLoader>
  );
}
