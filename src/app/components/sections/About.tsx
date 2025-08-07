"use client";

import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { variables } from "@/app/styles/theme";

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
  const profileImage =
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // const githubUsername = variables.githubUsername;
  // const profileImage = `https://github.com/${githubUsername}.png?size=280`;

  // if (!githubUsername) {
  //   console.error("GitHub username is not set in the environment variables.");
  // }

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            magnam cumque aliquam fugiat, ratione ut. Eius nobis laudantium
            distinctio, libero dolorem cum odit quae, repellendus sapiente ipsa
            doloribus amet deleniti? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Animi quae eius, dolorum culpa quos, et atque
            repudiandae voluptatum recusandae nobis, saepe totam. Deleniti
            aliquam doloremque dolor. Deleniti accusamus similique dolore?
          </Description>
        </TextContainer>
        <PhotoContainer
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={profileImage}
            alt="Foto de perfil"
            width={280}
            height={280}
            style={{ objectFit: "cover" }}
          />
        </PhotoContainer>
      </ContentWrapper>
    </AboutContainer>
  );
}
