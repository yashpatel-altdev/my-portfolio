'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { navLinks } from '@/constants/data';

const StyledNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  height: 72px;
  border-bottom: 1px solid var(--v2-border-subtle);
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const Logo = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: var(--v2-text-primary);
  text-decoration: none;
  letter-spacing: 0.02em;
  font-family: var(--font-sans);
`;

const DesktopLinks = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;

  a {
    display: block;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 400;
    color: var(--v2-text-accent);
    text-decoration: none;
    font-family: var(--font-sans);
    transition: color 0.2s ease;

    &:hover {
      color: var(--v2-text-primary);
    }

    .underline {
      position: absolute;
      bottom: 2px;
      left: 20px;
      right: 20px;
      height: 1px;
      background-color: var(--v2-text-primary);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.25s ease;
    }

    &:hover .underline {
      transform: scaleX(1);
    }
  }
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 1px;
    background-color: var(--v2-text-primary);
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform-origin: top left;
    }
    &:nth-child(3) {
      transform-origin: bottom left;
    }
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(2px, -2px);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(2px, 2px);
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }

  li a {
    font-size: 32px;
    font-weight: 500;
    color: var(--v2-text-primary);
    text-decoration: none;
    font-family: var(--font-sans);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export default function V2Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <Logo href="/" >
          YP
        </Logo>
        <DesktopLinks>
          {navLinks.map(({ name, hash }) => (
            <NavItem key={hash}>
              <a href={hash} >
                {name}
                <span className="underline" />
              </a>
            </NavItem>
          ))}
        </DesktopLinks>
        <BurgerButton
          className={mobileOpen ? 'open' : ''}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </StyledNav>
      <AnimatePresence>
        {mobileOpen && (
          <MobileOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ol>
              {navLinks.map(({ name, hash }) => (
                <li key={hash}>
                  <a href={hash} onClick={() => setMobileOpen(false)}>
                    {name}
                  </a>
                </li>
              ))}
            </ol>
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
