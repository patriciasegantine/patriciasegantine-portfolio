import styled from "styled-components";
import { theme } from "../../theme.ts";

export const ContainerDrawer = styled.div`
  width: 300px;
  padding: ${theme["spacing-regular"]};
`

export const LogoContainer = styled.div`
  border-bottom: 1px solid ${theme["color-line"]};
  margin-bottom: ${theme["spacing-regular"]};
  padding-bottom: ${theme["spacing-small"]};
`
