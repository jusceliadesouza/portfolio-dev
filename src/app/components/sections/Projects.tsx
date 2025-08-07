// src/components/sections/Projects.tsx
"use client";

import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SectionTitle } from "@/app/components/ui/SectionTitle";

const projectsData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nec leo facilisis commodo. Sed euismod, nunc at tincidunt facilisis, enim erat aliquet nisi, a tincidunt ligula justo in quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    imageSrc: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Coloque sua imagem em /public
    tags: ["React", "Next.js", "TypeScript", "Zustand", "Styled Components"],
    liveUrl: "#", // Link para o deploy
    codeUrl: "#", // Link para o repositório no GitHub
  },
  {
    title: 'Project 2"',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Coloque sua imagem em /public
    tags: ["React", "TypeScript", "API REST", "Chart.js", "Framer Motion"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.canvas};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  align-items: center;
  max-width: 1100px;
  margin-bottom: 4rem;

  &:nth-child(even) {
    direction: rtl; // Inverte a ordem das colunas para o layout alternado
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    direction: ltr !important; // Reseta a direção em telas pequenas
  }
`;

const ProjectImageContainer = styled.div`
  grid-column: 1 / span 7;
  grid-row: 1;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);

  // Efeito de overlay
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.interactive};
    mix-blend-mode: multiply;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  grid-column: 7 / -1;
  grid-row: 1;
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: right;
  direction: ltr; // Garante que o texto dentro deste container seja da esquerda para a direita

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1.5rem 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.text_focus};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectDescription = styled.div`
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text_body};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
`;

const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;
  direction: ltr;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Tag = styled.li`
  font-family: "monospace";
  font-size: 0.8rem;
  color: ${({ theme }) => theme.interactive};
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  a {
    color: ${({ theme }) => theme.text_body};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.interactive};
    }
  }
`;

export function Projects() {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos em Destaque</SectionTitle>
      {projectsData.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImageContainer>
            <Image
              src={project.imageSrc}
              alt={`Screenshot do projeto ${project.title}`}
              width={700}
              height={440}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ProjectImageContainer>
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              <p>{project.description}</p>
            </ProjectDescription>
            <TagsContainer>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsContainer>
            <LinksContainer>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código no GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver projeto ao vivo"
              >
                <FiExternalLink />
              </a>
            </LinksContainer>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
