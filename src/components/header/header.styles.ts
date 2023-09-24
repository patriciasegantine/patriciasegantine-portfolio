import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";

export const HeaderContainer = styled.header<{ fixed: 'fixed' | 'noFixed' }>`
  width: 100%;
  padding: ${theme["spacing-small"]};
  font-family: ${theme["font-secondary"]};
  transition: 0.3s;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid ${theme["color-line"]};

  ${(props) =>
          props.fixed === 'fixed' && css`
            position: fixed;
            box-shadow: ${theme["shadow-primary"]};
            color: ${theme ["color-white"]};
            background: ${theme["background-color-1"]};
          `}
`

export const HeaderContent = styled.div`
  max-width: ${theme['container']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const MenuMobileContainer = styled.div`
  color: ${theme["color-highlight"]};
  cursor: pointer;

  &:hover {
    opacity: .6;
    scale: 1.1;
  }
`
