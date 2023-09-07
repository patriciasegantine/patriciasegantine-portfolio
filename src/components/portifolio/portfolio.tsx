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
import projectOne from '../../assets/img/projects/project-one.jpg'
import projectTwo from '../../assets/img/projects/project-two.jpg'
import projectThree from '../../assets/img/projects/project-three.jpg'
import projectFour from '../../assets/img/projects/project-four.jpg'

import reactIcon from '../../assets/tools/react.svg'
import tailwindCSS from '../../assets/tools/tailwind-css.svg'
import nodeJS from '../../assets/tools/node-js.svg'
import git from '../../assets/tools/git.svg'
import javaScript from '../../assets/tools/javascript-js.svg'
import angular from '../../assets/tools/angular.svg'
import styledComponent from '../../assets/tools/styled-component.svg'
import typescript from '../../assets/tools/typescript.svg'
import sass from '../../assets/tools/sass.svg'

interface myProjectsInterface {
  name: string
  img: string
  tools: {
    id: string
    title: string
    src: string
  }[]
}

const myProjects: myProjectsInterface[] = [
  {
    name: 'Project One',
    img: projectOne,
    tools: [
      {id: '01', title: 'css', src: reactIcon},
      {id: '02', title: 'css', src: tailwindCSS},
      {id: '03', title: 'css', src: nodeJS},
    ],
  },
  {
    name: 'Project Two',
    img: projectTwo,
    tools: [
      {id: '01', title: 'css', src: git},
      {id: '02', title: 'css', src: javaScript},
      {id: '03', title: 'css', src: angular},
    ],
  },
  {
    name: 'Project Three',
    img: projectThree,
    tools: [
      {id: '01', title: 'css', src: reactIcon},
      {id: '02', title: 'css', src: styledComponent},
      {id: '03', title: 'css', src: typescript},
    ],
  },
  {
    name: 'Project Four',
    img: projectFour,
    tools: [
      {id: '01', title: 'css', src: sass},
      {id: '02', title: 'css', src: reactIcon},
      {id: '03', title: 'css', src: reactIcon},
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
            <Card key={project.name}>
              <DescriptionBox>
                <h2>{project.name}</h2>
              </DescriptionBox>
              
              <CardBoxImg onClick={() => alert("I'll Open the project Modal")}>
                <img src={project.img} alt={project.name}/>
              </CardBoxImg>
              
              <ToolsBox>
                {project.tools.map((tool) => {
                  return (
                    <IconContainer key={tool.id}>
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
