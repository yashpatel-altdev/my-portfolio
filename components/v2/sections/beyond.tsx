'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { personalData } from '@/constants/data';

const StyledBeyond = styled.section`
  padding: 120px 5%;

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 72px;

    .section-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--v2-accent-beige);
      font-family: var(--font-sans);
    }

    h2 {
      font-size: clamp(24px, 3vw, 40px);
      font-weight: 500;
      color: var(--v2-text-primary);
      font-family: var(--font-sans);
      margin: 0;
    }
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 12px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 580px) {
      grid-template-columns: 1fr;
    }
  }

  .interests-row {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;

    .interests-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--v2-text-secondary);
      font-family: var(--font-sans);
      margin-right: 4px;
    }

    .interest-pill {
      font-size: 13px;
      font-family: var(--font-sans);
      color: var(--v2-accent-green-light);
      border: 1px solid var(--v2-accent-green);
      background-color: var(--v2-accent-green-muted);
      padding: 5px 14px;
      border-radius: 100px;
    }
  }
`;

const BentoCard = styled(motion.div)<{ $featured?: boolean }>`
  background-color: var(--v2-background);
  border: 1px solid var(--v2-border-subtle);
  padding: 32px 28px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  grid-column: ${({ $featured }) => ($featured ? 'span 2' : 'span 1')};

  @media (max-width: 900px) {
    grid-column: span 1;
  }

  &:hover {
    border-color: var(--v2-accent-green);
    background-color: var(--v2-accent-green-muted);
  }

  &.reading-card {
    border-color: var(--v2-accent-beige-muted);
    background-color: var(--v2-accent-beige-muted);

    &:hover {
      border-color: var(--v2-accent-beige);
    }
  }

  .card-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--v2-text-secondary);
    font-family: var(--font-sans);
  }

  .card-content {
    font-size: 15px;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    line-height: 1.65;
  }

  .book-title {
    font-size: clamp(17px, 1.6vw, 20px);
    font-weight: 600;
    color: var(--v2-text-primary);
    font-family: var(--font-sans);
    line-height: 1.3;
  }

  .book-author {
    font-size: 13px;
    color: var(--v2-accent-beige);
    font-family: var(--font-sans);
    font-weight: 500;
  }

  .book-note {
    font-size: 14px;
    color: var(--v2-text-accent);
    font-family: var(--font-sans);
    line-height: 1.65;
    margin-top: 4px;
  }
`;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function V2Beyond() {
  return (
    <StyledBeyond id="beyond">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">02 / Personal</span>
        <h2>A Bit About Me</h2>
      </motion.div>

      <motion.div
        className="bento-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Featured: Currently Reading */}
        <BentoCard $featured variants={cardItem} className="reading-card">
          <span className="card-label">Currently Reading</span>
          <p className="book-title">&ldquo;{personalData.currentlyReading.title}&rdquo;</p>
          <p className="book-author">— {personalData.currentlyReading.author}</p>
          <p className="book-note">{personalData.currentlyReading.note}</p>
        </BentoCard>

        {/* Regular cards from data */}
        {personalData.cards.map((card) => (
          <BentoCard key={card.id} variants={cardItem}>
            <span className="card-label">{card.label}</span>
            <p className="card-content">{card.content}</p>
          </BentoCard>
        ))}
      </motion.div>

      {/* Interests row */}
      <motion.div
        className="interests-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="interests-label">Interested In</span>
        {personalData.interests.map((interest) => (
          <span key={interest} className="interest-pill">
            {interest}
          </span>
        ))}
      </motion.div>
    </StyledBeyond>
  );
}
