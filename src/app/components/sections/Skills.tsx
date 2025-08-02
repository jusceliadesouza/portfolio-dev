'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsKanbanFill } from 'react-icons/bs'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiStyledcomponents, SiJest, SiTestinglibrary, SiHtml5,
  SiCss3, SiGit, SiFigma
} from 'react-icons/si';
import { TbBrandRedux } from "react-icons/tb"; // Exemplo para Zustand/Redux
import { SectionTitle } from '@/app/components/ui/SectionTitle';


// --- Dados das Habilidades ---
// Definir os dados aqui torna o JSX mais limpo e o componente mais fácil de manter.
const skillsData = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Styled Comp.', icon: <SiStyledcomponents /> },
  // { name: 'Zustand', icon: <TbBrandZustand /> },
  { name: 'Redux', icon: <TbBrandRedux /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Testing Library', icon: <SiTestinglibrary /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Kanban', icon: <BsKanbanFill /> },
];


// --- Styled Components ---

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.canvas};
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsGrid = styled(motion.ul)`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 800px;
`;

const SkillCard = styled(motion.li)`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.stroke};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.interactive};
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_body};
  font-weight: 500;
`;


// --- Animações ---
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Anima cada cartão com um pequeno atraso
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


// --- O Componente ---

export function Skills() {
  return (
    <SkillsContainer id="skills">
      <ContentWrapper>
        <SectionTitle>Minhas Habilidades</SectionTitle>
        <SkillsGrid
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} variants={cardVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsContainer>
  );
}