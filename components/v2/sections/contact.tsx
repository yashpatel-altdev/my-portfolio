'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Toast from '@/components/ui/toast';

const StyledContact = styled.section`
  padding: 120px 5%;
  max-width: 640px;

  h2 {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 500;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    margin: 0 0 16px 0;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 16px;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
    margin-bottom: 56px;
  }

  .email-row {
    display: flex;
    align-items: center;
    gap: 0;
    border-bottom: 1px solid var(--v2-border-line);
    margin-bottom: 40px;
    transition: border-bottom-color 0.2s ease;

    &:focus-within {
      border-bottom-color: var(--v2-accent-green-light);
    }

    input {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      font-size: 16px;
      font-family: var(--font-sans);
      color: var(--v2-text-primary);
      padding: 14px 0;

      &::placeholder {
        color: var(--v2-text-secondary);
      }
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--v2-text-secondary);
      font-size: 18px;
      padding: 8px;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;

      &:hover {
        color: var(--v2-accent-green-light);
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  }

  .socials {
    display: flex;
    gap: 24px;
    align-items: center;

    a {
      color: var(--v2-text-secondary);
      font-size: 20px;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: var(--v2-accent-green-light);
      }
    }
  }
`;

export default function V2Contact() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string, clearEmail = true) => {
    if (clearEmail) setEmail('');
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email.', false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { success: boolean; message: string };
      showToast(data.message, data.success);
    } catch {
      showToast('Something went wrong. Please try again.', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContact id="contact">
      <Toast message={toastMessage} open={toastOpen} onClose={() => setToastOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let&apos;s work together.</h2>
        <p className="subtitle">Drop your email and I&apos;ll get in touch.</p>
        <form onSubmit={handleSubmit}>
          <div className="email-row">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button type="submit" aria-label="Submit" disabled={loading}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
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
          <a href="mailto:yashpatel.dev.ca@outlook.com" aria-label="Email">
            <FontAwesomeIcon icon={faAt} />
          </a>
        </div>
      </motion.div>
    </StyledContact>
  );
}
