import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.canvas};
    color: ${({ theme }) => theme.text_body};
    font-family: ${({ theme }) => theme.fonts.body};
    transition: background 0.3s ease, color 0.3s ease;
  }
`
