'use client';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MagneticCursor from './magnetic-cursor';
import V2Nav from './nav';
import V2Footer from './footer';

const V2GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--v2-background);
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
  }
`;

const StyledV2Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    padding-top: 72px;
  }
`;

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <V2GlobalStyle />
      <MagneticCursor />
      <StyledV2Wrapper className="v2-page">
        <V2Nav />
        <main>{children}</main>
        <V2Footer />
      </StyledV2Wrapper>
    </>
  );
}
