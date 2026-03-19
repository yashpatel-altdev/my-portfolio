import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 500;

  span {
    padding: 0 2px;
  }
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
