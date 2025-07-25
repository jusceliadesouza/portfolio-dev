"use client";

import styled from "styled-components";
import { useThemeStore } from "@/app/store/theme-store";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.highlight};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 5px;
  position: relative;
  width: 70px;
  height: 36px;

  overflow: hidden;

  /* Toggle Icon */
  svg {
    height: auto;
    width: 24px;
    transition: all 0.3s easy-in-out;

    /* Sun */
    &:first-child {
      fill: ${({ theme }) => theme.highlight};
      transform: ${({ "data-mode": mode }) =>
        mode === "light" ? "translateY(0)" : "translateY(100px)"};
      opacity: ${({ "data-mode": mode }) => (mode === "light" ? 1 : 0)};
    }

    /* Moon */
    &:nth-child(2) {
      fill: ${({ theme }) => theme.highlight};
      transform: ${({ "data-mode": mode }) =>
        mode === "light" ? "translateY(-100px)" : "translateY(0)"};
      opacity: ${({ "data-mode": mode }) => (mode === "light" ? 0 : 1)};
    }
  }
`;

export function ThemeSwitcher() {
  const { mode, toggleMode } = useThemeStore();

  return (
    <ToggleButton onClick={toggleMode} data-mode={mode}>
      <MdLightMode />  {/* Sun icon */}
      <MdDarkMode />   {/* Moon icon */}
    </ToggleButton>
  );
}
