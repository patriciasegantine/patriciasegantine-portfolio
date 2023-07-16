import { SectionContainer } from '../../global.styles.ts'
import styled from 'styled-components'
import { theme } from '../../theme.ts'

export const PortfolioContainer = styled(SectionContainer)``

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme['spacing-big']};
  padding-top: ${theme['spacing-regular']};
`

export const Card = styled.div`
  //height: 400px;
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
  //height: 250px;

  img {
    width: 100%;
    height: 250px;
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
  padding: 10px;
  border-radius: 50%;
  background: ${theme['background-color-1']};
  border: 2px solid ${theme['color-line']};
  box-shadow: ${theme['shadow-primary']};

  img {
    width: 30px;
    height: 30px;
  }
`
