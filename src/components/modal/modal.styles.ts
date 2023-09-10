import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../theme.ts";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const ModalBody = styled.div`
  margin-top: 1.250rem;
  margin-bottom: 1.250rem;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: start;
`

export const ModalTitle = styled.h2`
  color: ${theme["color-white"]};

`

export const ModalClose = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${theme["color-highlight"]};
  opacity: .6;

  &:hover {
    opacity: 1;
    scale: 1.2;
    transition: .2s;
  }
`

export const ToolBox = styled.span`
  //margin-right: 1rem;

`

export const Tool = styled.span`
  margin-right: .5rem;
`

export const ModalContent = styled.div<{
  horizontal: boolean
}>`
  display: flex;
  flex-direction: column;
  row-gap: ${theme["spacing-regular"]};

  img {
    width: 100%;
    height: 350px;
    border-radius: ${theme["border-radius-primary"]};
  }

  ${props => props.horizontal && css`
    flex-direction: row;
    column-gap: ${theme["spacing-regular"]};


    & img {
      border-radius: ${theme["border-radius-primary"]};
      width: 350px;
      height: 350px;
    }
  `}
`
