'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Button } from '@/app/components/ui/Button';

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
        <SectionTitle style={{ margin: '0 auto 1rem auto' }}>Vamos Conversar?</SectionTitle>
        <CallToAction>
          Estou sempre aberta a novas oportunidades e colaborações. Se você tem um projeto em mente ou acredita que meu perfil se encaixa na sua equipe, adoraria ouvir de você.
        </CallToAction>
        <EmailLink href="mailto:dev@jusceliadesouza.com.br">
          dev@jusceliadesouza.com.br
        </EmailLink>
        <div>
          <Button href="/cv-juscelia-souza.pdf" primary download>
            Download do meu CV
          </Button>
        </div>
      </ContentWrapper>
    </ContactContainer>
  );
}