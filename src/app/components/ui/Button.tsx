"use client";

import styled, { css } from "styled-components";

export const Button = styled.a<{ primary?: boolean }>`
  display: inline-block;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.interactive};

  ${(props) =>
    props.primary
      ? css`
          background-color: ${({ theme }) => theme.interactive};
          color: ${({ theme }) => theme.canvas};

          &:hover {
            background-color: ${({ theme }) => theme.interactive_hover};
          }
        `
      : css`
          background-color: transparent;
          color: ${({ theme }) => theme.interactive};

          &:hover {
            background-color: ${({ theme }) => theme.interactive};
            color: ${({ theme }) => theme.canvas};
          }
        `}
`;
