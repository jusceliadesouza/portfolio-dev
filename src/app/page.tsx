"use client";

import styled from "styled-components";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  const MainContainer = styled.main`
    display: grid;
    place-content: center;
    min-height: 100vh;
    padding: 2rem;
    gap: 2rem;
    text-align: center;
  `;

  return (
    <MainContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </MainContainer>
  );
}
