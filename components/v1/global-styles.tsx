'use client';

import { createGlobalStyle } from 'styled-components';

export const V1GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--background-black);
    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--fs-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fs-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #v1-home {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  main {
    width: 100%;
    min-height: 100vh;
    padding: 200px 15% 0 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    @media (max-width: 1080px) {
      padding: 150px 10% 0 10%;
    }

    @media (max-width: 768px) {
      padding: 150px 8% 0 8%;
    }

    @media (max-width: 480px) {
      padding: 100px 6% 0 6%;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 100vw;

    @media (max-width: 768px) {
      padding: 2rem 0;
      max-width: 100vw;
    }

    @media (max-width: 480px) {
      padding: 2rem 0;
      max-width: 100vw;
    }
  }
`;
