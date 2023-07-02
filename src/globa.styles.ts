import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from './theme.ts'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme["font-primary"]};
    background: ${theme["background-color-2"]};
    color: ${theme['color-neutral-light']};
    -webkit-font-smoothing: antialiased;
    height: 2000px;
  }
`

export const SectionContainer = styled.section<{ isFlex?: boolean }>`

  max-width: ${theme['container']};
  margin: ${theme["spacing-big"]} auto;

  ${(props) =>
          props.isFlex && css`

            @media (min-width: ${theme["laptop"]}px) {
              display: flex;
              column-gap: ${theme["spacing-regular"]};
              justify-content: space-between;
            }
          `

  }
`
