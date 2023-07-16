import styled from "styled-components";

export const AsideContainer = styled.aside`
  position: absolute;
`

export const LeftAsideContent = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
  z-index: 10;
  transition: transform 0.3s ease;
`

export const RightAsideContent = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`
