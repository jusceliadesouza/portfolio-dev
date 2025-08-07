"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { Button } from "@/app/components/ui/Button";
import { variables } from "@/app/styles/theme";

const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.surface};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 600px;
`;

const CallToAction = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_body};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const EmailLink = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  font-weight: 600;
  color: ${({ theme }) => theme.text_focus};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.interactive};
  }
`;

export function Contact() {
  return (
    <ContactContainer id="contact">
      <ContentWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle style={{ margin: "0 auto 1rem auto" }}>
          Vamos Conversar?
        </SectionTitle>
        <CallToAction>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          dignissimos error possimus. Autem eaque quasi temporibus, natus iste
          omnis perspiciatis nostrum illum. Nobis culpa praesentium id atque
          reprehenderit provident quis?
        </CallToAction>
        <EmailLink href={`mailto:${variables.email}`}>
          {`${variables.email}`}
        </EmailLink>
        <div>
          <Button href="/cv-your-name.pdf" primary download>
            Download do meu CV
          </Button>
        </div>
      </ContentWrapper>
    </ContactContainer>
  );
}
