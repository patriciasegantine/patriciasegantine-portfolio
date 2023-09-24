import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";

export const NavContainer = styled.nav<{ type: 'mobile' | 'desktop' | null }>`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;
  color: ${theme["color-social-media"]};

  ${(props) =>
          props.type === 'mobile' && css`
            flex-direction: column;
          `};

  ${(props) =>
          props.type === 'desktop' && css`
            flex-direction: row;
          `};
`

export const LinkContainer = styled.div<{ active: 'active' | 'inactive' }>`
  display: inline-block;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    opacity: .6;
  }

  ${(props) =>
          props.active === 'active' && css`
            color: ${theme["color-highlight"]};
            font-weight: 500;

            &:hover {
              opacity: 1;
            }
          `}
`

export const Link = styled.a`
  display: inline-block;
  font-size: ${theme["font-size-s"]};
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  color: inherit;

`
