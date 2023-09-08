import styled from "styled-components";
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

  &:hover {
    opacity: .6;
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

export const ModalCloseButton = styled.span`
  font-size: ${theme["font-size-s"]};
  font-weight: 600;

  background: ${theme["color-neutral-light"]};
  color: ${theme["color-gray-dark"]};
  padding: .4rem 4rem;
  text-align: center;

  border-radius: ${theme["border-radius-primary"]};
  cursor: pointer;

  &:hover {
    opacity: .6;
    scale: 1.1;
    transition: .2s;
  }
`
