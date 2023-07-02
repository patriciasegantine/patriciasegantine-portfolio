import styled from "styled-components";
import { SectionContainer } from "../../globa.styles.ts";
import { theme } from "../../theme.ts";

export const AboutContainer = styled(SectionContainer)<{ flex: boolean }>`
  @media (max-width: ${theme["laptop"]}px) {
    flex-direction: column-reverse;
  }

`

export const AboutContent = styled.div`
  display: flex;
  padding-bottom: ${theme["spacing-big"]};

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

  h1 {
    font-family: ${theme["font-secondary"]};
    font-size: ${theme["font-size-xxl"]};
    color: ${theme["color-white"]};
    font-weight: 700;
    margin-bottom: ${theme["spacing-small"]};
  }

  h2 {
    font-family: ${theme["font-secondary"]};
    font-size: ${theme["font-size-l"]};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: ${theme["spacing-regular"]};
  }

  h3 {
    font-family: ${theme["font-secondary"]};
    font-size: ${theme["font-size-s"]};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: ${theme["spacing-regular"]};
  }`

export const ImgPerfil = styled(PerfilBox)`
  position: relative;
  display: flex;
  flex: 40;

  &:before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: calc(100% - 130px);
    content: "";
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: var(--background-color-1);
    box-shadow: ${theme['shadow-primary']};
    border-radius: ${theme["border-radius-primary"]};
  }

  img {
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