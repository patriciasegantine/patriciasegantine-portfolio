import styled from "styled-components";
import { theme } from "../../theme.ts";

export const AsideContainer = styled.aside`
  position: absolute;
`

export const AsideContent = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
`

export const SocialBox = styled.div`

  display: flex;
  flex-direction: column;
  row-gap: ${theme["spacing-small"]};
`
