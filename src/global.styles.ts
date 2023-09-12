import styled, { createGlobalStyle } from "styled-components";
import { theme } from './theme.ts'
import { createTheme } from "@mui/material";

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
    line-height: ${theme["line-height-l"]};
    background: ${theme["background-color-1"]};
    color: ${theme['color-neutral-light']};
    -webkit-font-smoothing: antialiased;
  }

  .vertical-timeline {
    width: 100%;
  }

  .vertical-timeline::before {
    background: ${theme["color-neutral-light"]};
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px ${theme ["color-neutral-light"]};
  }
`

export const SectionContainer = styled.section`
  scroll-margin-top: 250px;
  max-width: ${theme['container']};
  margin: ${theme["spacing-big"]} auto;
  position: relative;
  border-bottom: 1px solid ${theme["color-line"]};
  padding-bottom: 64px;
  padding-left: ${theme["spacing-small"]};
  padding-right: ${theme["spacing-small"]};
`

export const Title = styled.h1`
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-xxl"]};
  color: ${theme["color-white"]};
  font-weight: 700;
`

export const Subtitle = styled.h3`
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-s"]};
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: ${theme["spacing-small"]};
  color: ${theme["color-highlight"]};
`

export const SectionTitle = styled.h2`
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-xxl"]};
  color: ${theme["color-white"]};
  font-weight: 700;
  margin-top: ${theme["spacing-regular"]};
`

export const Destaque = styled.h4`
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-s"]};
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: ${theme["spacing-small"]};
`

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme["color-neutral-light"],
    },
    secondary: {
      main: theme["color-gray-dark"],
    },
    text: {
      primary: theme["color-white"],
      secondary: theme["color-social-media"],
    },
    action: {
      disabledBackground: theme["color-gray-dark"],
    },
  },
});

export const inputBorderStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme["color-neutral-light"],
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme["color-white"],
    },
  },
};
