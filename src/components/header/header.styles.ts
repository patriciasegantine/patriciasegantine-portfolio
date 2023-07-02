import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";

export const HeaderContainer = styled.header<{ isMenuFixed: boolean }>`

  width: 100%;
  padding: ${theme["spacing-regular"]};
  font-family: ${theme["font-secondary"]};
  transition: 0.3s;
  top: 0;
  z-index: 999;
  grid-area: header;

  ${(props) =>
          props.isMenuFixed && css`
            position: fixed;
            backdrop-filter: blur(20px);
            box-shadow: ${theme["shadow-primary"]};
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

export const NavContainer = styled.nav<{ isMobile: boolean }>`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;


  ${(props) =>
          props.isMobile && css`
            flex-direction: column;
          `}
`

export const MenuMobileContainer = styled.div`
`

export const Link = styled.span<{ active: boolean }>`
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  color: ${((props) => props.active ? theme["color-white"] : theme["color-neutral-light"])};
`
