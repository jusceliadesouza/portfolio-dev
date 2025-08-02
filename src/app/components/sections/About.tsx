"use client";

import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.surface};
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr; // Duas colunas: texto com 2/3, foto com 1/3
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  // Em telas menores, as colunas ficam empilhadas
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled(motion.div)``;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_body};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  strong {
    color: ${({ theme }) => theme.text_focus};
    font-weight: 500;
  }
`;

const PhotoContainer = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.stroke};
  border: 4px solid ${({ theme }) => theme.interactive};
  object-fit: cover;
  overflow: hidden;
  justify-self: center;
  position: relative;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-top: 2rem;
  }
`;

export function About() {
  const githubUsername = "jusceliadesouza";
  const githubProfileUrl = `https://github.com/${githubUsername}.png?size=280`;

  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Sobre Mim</SectionTitle>
          <Description>
            Minha paixão é transformar ideias e designs do{" "}
            <strong>Figma</strong> em interfaces ricas e intuitivas. Com forte
            experiência em <strong>React</strong> e <strong>TypeScript</strong>,
            meu foco é sempre a <strong>performance</strong> e um processo de
            trabalho que valoriza a <strong>colaboração</strong> e a
            comunicação.
          </Description>
          <Description>
            Prospero em ambientes que utilizam metodologias ágeis como{" "}
            <strong>Scrum</strong> e <strong>Kanban</strong>, pois acredito que
            um código limpo e bem testado é a base para uma experiência de
            usuário memorável e um produto de sucesso.
          </Description>
        </TextContainer>
        <PhotoContainer
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={githubProfileUrl}
            alt="Foto de perfil"
            width={280}
            height={280}
          />
        </PhotoContainer>
      </ContentWrapper>
    </AboutContainer>
  );
}
