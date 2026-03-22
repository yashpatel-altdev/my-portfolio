'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const StyledAbout = styled.section`
  padding: 120px 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 80px 5%;
  }
`;

const PullQuote = styled.div`
  p {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 500;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    line-height: 1.2;
    margin: 0;
  }
`;

const BioColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 8px;

  p {
    font-size: 16px;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    line-height: 1.7;
    margin: 0;
  }

  .socials {
    display: flex;
    gap: 24px;
    align-items: center;

    a {
      color: var(--v2-text-secondary);
      font-size: 20px;
      transition: opacity 0.2s ease;
      text-decoration: none;

      &:hover {
        opacity: 0.6;
        color: var(--v2-text-primary);
      }
    }
  }
`;

export default function V2About() {
  return (
    <StyledAbout id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <PullQuote>
          <p>Engineering systems that scale. Thinking beyond the feature.</p>
        </PullQuote>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <BioColumn>
          <p>
            I&apos;m a software engineer drawn to the architecture layer — API design, system boundaries,
            scalability trade-offs, and the product thinking behind what gets built and why. I care
            less about individual features and more about the systems that make them possible.
          </p>
          <p>
            Currently at Plusgrade, I work on technical integrations for Loyalty Program partners —
            designing API contracts, configuring authentication flows (OAuth2, OIDC, SAML), and
            bridging the gap between partner engineering teams and internal systems. It&apos;s work
            that sits at the intersection of systems design, developer experience, and product.
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/yash-patel-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/yashpatel024"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:yashpatel.dev.ca@outlook.com"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faAt} />
            </a>
          </div>
        </BioColumn>
      </motion.div>
    </StyledAbout>
  );
}
