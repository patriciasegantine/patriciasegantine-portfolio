import styled from "styled-components";
import { theme } from "../../../theme.ts";

export const HeaderContainer = styled.header<{ fixed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${theme["spacing-regular"]};

  font-family: ${theme["font-secondary"]};

  position: ${((props) => props.fixed ? 'fixed' : 'relative')};
  backdrop-filter: ${((props) => props.fixed ? 'blur(15px)' : 'none')};
  box-shadow: ${((props) => props.fixed ? theme["shadow-primary"] : 'none')};
  transition: 0.3s;
  top: 0;
  z-index: 999;
  grid-area: header;
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const Nav = styled.nav`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;

`

export const Link = styled.span<{ active: boolean }>`
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  color: ${((props) => props.active ? theme["color-white"] : theme["color-neutral-light"])};
`
