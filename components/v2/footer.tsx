import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 40px 5%;
  border-top: 1px solid var(--v2-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--v2-text-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export default function V2Footer() {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Yash Patel</span>
      <span>Built with Next.js</span>
    </StyledFooter>
  );
}
