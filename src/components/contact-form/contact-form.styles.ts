import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const ContactContainer = styled(SectionContainer)``

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  gap: ${theme['spacing-regular']};

  @media (max-width: ${theme["tablet"]}) {
    flex-direction: column;
  }
`

export const MyInformation = styled.div`
  border-radius: ${theme['border-radius-primary']};
  color: ${theme["color-neutral-light"]};
  transition: 0.4s;

  a {
    color: ${theme["color-neutral-light"]};
    text-decoration: none;
  }
`

export const SendingMessage = styled.div`
  max-width: 300px;
`
