'use client';

import styled from 'styled-components';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: ${({ theme }) => theme.canvas};
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.text_body};
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.interactive};
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_muted};

  span {
    color: ${({ theme }) => theme.interactive};
  }
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/jusceliadesouza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://linkedin.com/in/jusceliadesouza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
      </SocialLinks>
      <CopyrightText>
        Construído com Next.js e <span>💚</span> por Juscélia de Souza © {currentYear}
      </CopyrightText>
    </FooterContainer>
  );
}