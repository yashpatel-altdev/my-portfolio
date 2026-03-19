'use client';

import { cn } from '@/lib/utils';
import { handleURLButtonClick } from '@/lib/utils';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledContactMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 48px;
  background-color: var(--light-blue);
  font-size: var(--fs-md);
  font-family: var(--font-sans);
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;

  .contact-me-button {
    color: var(--white);
    transition: var(--transition);
  }

  .fa-icon {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactButton = ({
  text,
  url,
  icon,
}: {
  text: string;
  url: string;
  icon?: IconDefinition;
}) => {
  return (
    <StyledContactMeButton className="contact-me-button" onClick={handleURLButtonClick(url, true)}>
      <span>{text}</span>
      {icon && <FontAwesomeIcon icon={icon} className="fa-icon" />}
    </StyledContactMeButton>
  );
};

export default ContactButton;
