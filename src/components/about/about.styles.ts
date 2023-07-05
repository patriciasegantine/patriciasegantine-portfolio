import styled from "styled-components";
import { SectionContainer } from "../../globa.styles.ts";
import { theme } from "../../theme.ts";

export const AboutContainer = styled(SectionContainer)`

`

export const AboutContent = styled.div`
  display: flex;

  @media (max-width: ${theme["laptop"]}px) {
    flex-direction: column-reverse;
  }

`

const PerfilBox = styled.span`
  flex: 1;
  padding: ${theme["spacing-regular"]}
`

export const InfoPerfil = styled(PerfilBox)`
  align-self: center;
  justify-self: center;
  flex: 60;

  span {
    font-family: ${theme["font-secondary"]};
    padding-left: 10px;
    color: ${theme["color-highlight"]};
  }

  p {
    color: ${theme["color-neutral-light"]};
    font-size: ${theme["font-size-m"]};
    line-height: ${theme["line-height-l"]};
    margin-bottom: ${theme["spacing-small"]};
  }

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

`

export const ImgPerfil = styled(PerfilBox)`
  display: flex;
  flex: 40;
  padding: ${theme["spacing-regular"]};
  justify-content: center;


  @media (max-width: ${theme["laptop"]}px) {
    margin-bottom: ${theme["spacing-regular"]};
  }
`

export const ImgContent = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  align-self: flex-end;
  padding: ${theme["spacing-regular"]};

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

  @media (max-width: ${theme["laptop"]}px) {
    margin-bottom: ${theme["spacing-regular"]};
  }

`
