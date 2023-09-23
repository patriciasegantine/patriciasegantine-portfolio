import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const AboutContainer = styled(SectionContainer)`
  margin-top: ${theme["spacing-extra-big"]};
`

export const TitlePerfil = styled.div`
  margin-bottom: ${theme["spacing-regular"]};

  h2 {
    font-family: ${theme["font-secondary"]};
    font-size: ${theme["font-size-l"]};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: ${theme["spacing-small"]};
  }

  span {
    font-family: ${theme["font-secondary"]};
    padding-left: 10px;
    color: ${theme["color-highlight"]};
  }
`

export const ImgPerfil = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${theme["laptop"]}) {
    margin-bottom: ${theme["spacing-regular"]};
  }
`

export const ImgContent = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  align-self: flex-end;

  background: ${theme['background-color-3']};
  box-shadow: ${theme['shadow-primary']};
  border-radius: ${theme["border-radius-primary"]};

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    width: 300px;
    height: 450px;
    margin: 0 auto;
    text-align: center;
    border-radius: ${theme["border-radius-primary"]}
  }

  @media (max-width: ${theme["laptop"]}) {
    margin-top: ${theme["spacing-extra-big"]};
  }
`

export const SocialMediaContainer = styled.div`
  margin-top: ${theme["spacing-regular"]};
`
