import {
  Card,
  CardBoxImg,
  CardContainer,
  DescriptionBox,
  IconContainer,
  PortfolioContainer,
  ToolsBox,
} from './portfolio.styles.ts'
import { SectionTitle, Subtitle } from '../../global.styles.ts'
import edp from '../../assets/img/edp.png'
import vertem from '../../assets/img/vertem.png'

import reactIcon from '../../assets/tools/react.svg'
import tailwindCSS from '../../assets/tools/tailwind-css.svg'
import nodeJS from '../../assets/tools/node-js.svg'
import git from '../../assets/tools/git.svg'
import javaScript from '../../assets/tools/javascript-js.svg'
import angular from '../../assets/tools/angular.svg'
import styledComponent from '../../assets/tools/styled-component.svg'
import typescript from '../../assets/tools/typescript.svg'

interface myProjectsInterface {
  name: string
  img: string
  tools: {
    title: string
    src: string
  }[]
}

const myProjects: myProjectsInterface[] = [
  {
    name: 'EDP',
    img: edp,
    tools: [
      {title: 'css', src: reactIcon},
      {title: 'css', src: tailwindCSS},
      {title: 'css', src: nodeJS},
    ],
  },
  {
    name: 'Vertem',
    img: vertem,
    tools: [
      {title: 'css', src: git},
      {title: 'css', src: javaScript},
      {title: 'css', src: angular},
    ],
  },
  {
    name: 'Tradeback',
    img: vertem,
    tools: [
      {title: 'css', src: reactIcon},
      {title: 'css', src: styledComponent},
      {title: 'css', src: typescript},
    ],
  },
  {
    name: 'EDP',
    img: edp,
    tools: [
      {title: 'css', src: reactIcon},
      {title: 'css', src: reactIcon},
      {title: 'css', src: reactIcon},
    ],
  },
]

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <SectionTitle id="portfolio">My Portfolio</SectionTitle>
      <Subtitle id="portfolio">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </Subtitle>
      
      <CardContainer>
        {myProjects?.map((project) => {
          return (
            <Card>
              <DescriptionBox>
                <h2>{project.name}</h2>
              </DescriptionBox>
              
              <CardBoxImg>
                <img src={project.img} alt={project.name}/>
              </CardBoxImg>
              
              <ToolsBox>
                {project.tools.map((tool) => {
                  return (
                    <IconContainer>
                      <img src={tool.src} alt={tool.title} title={tool.title}/>
                    </IconContainer>
                  )
                })}
              </ToolsBox>
            </Card>
          )
        })}
      </CardContainer>
    </PortfolioContainer>
  )
}
