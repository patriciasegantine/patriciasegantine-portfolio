import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const FooterContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme["color-social-media"]};

  a {
    text-decoration: none;
    color: ${theme["color-highlight"]};
    padding-top: ${theme["spacing-small"]};
    padding-bottom: ${theme["spacing-small"]};

    &:hover {
      opacity: .7;
      transition: .2s;
    }
  }

  span {
    padding-top: ${theme["spacing-small"]};
  }
`
