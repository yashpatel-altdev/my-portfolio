'use client';

import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Header from './sections/header';
import Footer from './sections/footer';
import Loader from './extra/loader';
import { AnimatePresence } from 'framer-motion';
import { V1GlobalStyle } from './global-styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const V1Layout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <V1GlobalStyle />
      <StyledContent id="v1-home">
        <AnimatePresence mode="wait">
          {isLoading && <Loader />}
        </AnimatePresence>
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </StyledContent>
    </>
  );
};

export default V1Layout;
