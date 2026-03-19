'use client';

import React from 'react';
import { styled } from 'styled-components';
import { navLinks } from '@/constants/data';
import IconLogo from '../icons/logo';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '../extra/mobile-menu';
import ContactButton from '../icons/ContactButton';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 30px 15%;
  width: 100vw;
  height: 100px;
  background-color: var(--background-black);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--light-black);

  @media (max-width: 1080px) {
    padding: 2rem 10%;
    height: 90px;
  }

  @media (max-width: 768px) {
    padding: 2rem 8%;
    height: 85px;
  }

  @media (max-width: 420px) {
    padding: 2rem;
    height: 70px;
    background-color: transparent;
    border-bottom: 0.5px solid var(--light-black);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 12;
`;

const StyledLinks = styled.div`
  ol {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 0px 35px;
      position: relative;
      font-size: var(--fs-md);

      a {
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        text-align: center;
      }
    }

    @media (max-width: 1080px) {
      li {
        padding: 0px 25px;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    height: 36px;
    width: 35px;
  }

  @media (max-width: 768px) {
    svg {
      height: 35px;
    }
  }

  @media (max-width: 480px) {
    svg {
      height: 28px;
    }
  }
`;

const HeaderLogo = () => {
  return (
    <StyledLogo>
      <a href="#home">
        <IconLogo />
      </a>
    </StyledLogo>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <HeaderLogo />
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ name, hash }) => (
                <li key={hash}>
                  <a href={hash}>{name}</a>
                </li>
              ))}
          </ol>
        </StyledLinks>
        <ContactButton
          text="Resume"
          url="https://drive.google.com/file/d/1DK6NxO7E3IFn5dZper-9Z2wD09vDTkQN/view?usp=drive_link"
          icon={faPaperPlane}
        />
        <MobileMenu />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
