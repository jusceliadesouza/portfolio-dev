"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { ThemeSwitcher } from "@/app/components/ui/ThemeSwitcher";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

// --- Styled Components ---
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const Header = styled.header`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_focus};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${({ theme }) => theme.text_body};
  max-width: 600px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.text_body};
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.interactive};
    }
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

// --- Animações ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima os filhos com um pequeno atraso entre eles
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <HeroContainer>
      <Header>
        <ThemeSwitcher />
      </Header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContentWrapper>
          <Title variants={itemVariants}>Olá! Sou Juscélia de Souza</Title>
          <Subtitle variants={itemVariants}>
            Desenvolvedora Front-End especialista em React e na criação de
            interfaces ricas e performáticas para uma excepcional experiência de
            usuário.
          </Subtitle>

          <ButtonContainer variants={itemVariants}>
            <Button href="#projects" primary>
              Ver Projetos
            </Button>
            <Button href="#contact">Contato</Button>
          </ButtonContainer>

          <SocialLinks variants={itemVariants}>
            <a
              href="https://github.com/jusceliadesouza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/jusceliadesouza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </SocialLinks>
        </ContentWrapper>
      </motion.div>
    </HeroContainer>
  );
}
