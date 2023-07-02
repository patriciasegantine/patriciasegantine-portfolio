import styled, { createGlobalStyle } from "styled-components";
import { theme } from './theme.ts'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme["font-primary"]};
    background: ${theme["color-background"]};
    color: ${theme['color-neutral-light']};
    -webkit-font-smoothing: antialiased;
    height: 2000px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "aside main";
  height: 100vh;
`
