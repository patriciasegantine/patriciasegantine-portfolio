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

export const ToolBox = styled.span``

export const Tool = styled.span`
  margin-right: .5rem;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${theme["spacing-regular"]};

  img {
    border-radius: ${theme["border-radius-primary"]};
    width: 100%;
  }
`

export const BoxImgModal = styled.div`
  display: flex;
  justify-content: center;
`

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: `${theme["background-color-1"]}`,
  border: '2px solid transparent',
  borderRadius: `${theme["border-radius-primary"]}`,
  boxShadow: 24,
  outline: "transparent",
  p: {xs: 2, md: 6},
  width: {xs: 350, md: 700}
};
