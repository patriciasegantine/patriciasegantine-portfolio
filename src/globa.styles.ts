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
    font-size: ${theme["font-size-m"]};
    background: ${theme["background-color-2"]};
    color: ${theme['color-neutral-light']};
    -webkit-font-smoothing: antialiased;
    height: 2000px;
  }
`

export const SectionContainer = styled.section<{ flex?: boolean }>`

  max-width: ${theme['container']};
  margin: ${theme["spacing-regular"]} auto;
  padding: 0 64px;

  @media (min-width: ${theme["laptop"]}px) {
    padding: 0;
  }

  ${(props) =>
          props.flex && css`
            display: flex;
            flex-direction: column;

            @media (min-width: ${theme["laptop"]}px) {
              flex-direction: row;
              column-gap: ${theme["spacing-big"]};
              justify-content: space-between;
            }
          `

  }
`
