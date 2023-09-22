import { SectionContainer } from '../../global.styles.ts'
import styled from 'styled-components'
import { theme } from '../../theme.ts'

export const MyProjectsContainer = styled(SectionContainer)``

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme['spacing-big']};
  padding-top: ${theme['spacing-regular']};

  @media (max-width: ${theme.tablet}) {
    grid-template-columns: 1fr;
  }

`

export const Card = styled.div`
  width: 100%;
  padding: ${theme['spacing-regular']};

  background: ${theme['background-color-3']};
  box-shadow: ${theme['shadow-primary']};
  border-radius: ${theme['border-radius-primary']};

  transition: 0.4s;
`

export const DescriptionBox = styled.div``

export const CardBoxImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 10px 100px;
    padding: ${theme["spacing-small"]};

    &:hover {
      scale: 1.1;
      transition: .5s;
      cursor: pointer;
    }
  }
`

export const ToolsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${theme['spacing-small']};
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
  background: ${theme['background-color-1']};
  border: 2px solid ${theme['color-line']};
  box-shadow: ${theme['shadow-primary']};
  opacity: .8;

  img {
    width: 25px;
    height: 25px;
  }
`

export const ItemBox = styled.div`
  margin-bottom: ${theme["spacing-small"]};
  color: ${theme["color-social-media"]};
`

export const TitleItem = styled.span`
  font-weight: 700;
  padding-right: 1rem;
  color: ${theme["color-white"]};

`

export const LinkGitHub = styled.a`
  color: ${theme["color-social-media"]};

  text-decoration: none;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background: ${theme['color-highlight']};

  }

  &:hover {
    opacity: .6;
    transition: .2s;
  }
`

export const LinksBox = styled.div`
  display: flex;
`
export const LinksBoxItems = styled.div`
  display: flex;
  column-gap: ${theme["spacing-small"]};
`
