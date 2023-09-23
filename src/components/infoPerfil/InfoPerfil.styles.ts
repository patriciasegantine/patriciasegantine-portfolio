import styled from "styled-components";
import { theme } from "../../theme.ts";

export const InfoPerfilContent = styled.div`
  align-self: center;
  justify-self: center;
  flex: 60;

  p {
    color: ${theme["color-neutral-light"]};
    font-size: ${theme["font-size-m"]};
    line-height: ${theme["line-height-l"]};
    margin-bottom: ${theme["spacing-small"]};
  }
`
