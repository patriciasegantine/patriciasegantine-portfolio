import { SectionContainer } from '@/global.styles.ts'
import styled from 'styled-components'
import { theme } from '@/theme.ts'

export const MyProjectsContainer = styled(SectionContainer)``

export const Card = styled.div`
  width: 100%;
  padding: ${theme['spacing-regular']};

  background: ${theme['background-color-3']};
  box-shadow: ${theme['shadow-primary']};
  border-radius: ${theme['border-radius-primary']};
  border: 2px solid transparent;

  &:hover{
    border:2px solid ${theme["color-highlight"]};
    cursor: pointer;
    transition: .5s;
  }
`

export const DescriptionBox = styled.div``

export const CardBoxImg = styled.div`
  width: 100%;

  img {
      width: 100%;
      border-radius: ${theme["border-radius-primary"]};
      padding: 0;

    @media (min-width: ${theme.laptop}) {
      border-radius: 10px 100px;
      padding-top: ${theme["spacing-small"]};
      padding-bottom: ${theme["spacing-small"]};
    }
  }
`

export const CardBoxCarousel = styled(CardBoxImg)`
  img {
    padding: ${theme["spacing-small"]};

    &:hover {
      transition: .5s;
      cursor: pointer;
      scale: 1.05;
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
