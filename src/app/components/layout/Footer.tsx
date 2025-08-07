"use client";

import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { variables } from "@/app/styles/theme";

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

  const githubUsername = variables.githubUsername;
  const githubProfileUrl = `https://github.com/${githubUsername}`;
  if (!githubUsername) {
    console.error("GitHub username is not set in the environment variables.");
  }
  
  const linkedinUsername = variables.linkedinUsername;
  const linkedinProfileUrl = `https://www.linkedin.com/in/${linkedinUsername}`;
  if (!linkedinUsername) {
    console.error("LinkedIn username is not set in the environment variables.");
  }

  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href={linkedinProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </SocialLinks>
      <CopyrightText>
        Construído com Next.js e <span>💚</span> por Juscélia de Souza ©{" "}
        {currentYear}
      </CopyrightText>
    </FooterContainer>
  );
}
