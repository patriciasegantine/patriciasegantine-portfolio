import { SectionContainer } from '../../global.styles.ts'
import styled from 'styled-components'
import { theme } from '../../theme.ts'

export const MyProjectsContainer = styled(SectionContainer)``

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
