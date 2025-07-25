"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "./components/ui/ThemeSwitcher";

export default function Home() {
  const MainContainer = styled.main`
    display: grid;
    place-content: center;
    min-height: 100vh;
    padding: 2rem;
    gap: 2rem;
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: ${({ theme }) => theme.text_focus}; /* Antigo: theme.primary */
    margin-bottom: 1rem;
  `;

  const Description = styled.p`
    font-size: clamp(1rem, 3vw, 1.25rem);
    color: ${({ theme }) => theme.text_body}; /* Antigo: theme.text */
    max-width: 600px;
    margin: 0 auto 2rem auto;
    line-height: 1.6;
  `;

  return (
    <MainContainer>
      <header style={{ position: "absolute", top: "2rem", right: "2rem" }}>
        <ThemeSwitcher />
      </header>

      <div>
        <Title>Setup Concluído!</Title>
        <Description>Clique no botão para testar o Dark Mode.</Description>
      </div>
    </MainContainer>
  );
}
