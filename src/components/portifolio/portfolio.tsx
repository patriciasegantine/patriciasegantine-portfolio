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

import { useState } from "react";
import { myProjects } from "./my-projects-obj.ts";
import { ViewModal } from "../modal/view-modal.tsx";

export const Portfolio = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const handleOpen = (index: number) => {
    setOpen(true)
    setProjectIndex(index)
  };
  
  return (
    <PortfolioContainer>
      <SectionTitle id="portfolio">My Projects</SectionTitle>
      <Subtitle id="portfolio">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </Subtitle>
      
      <CardContainer>
        {myProjects?.map((project, index) => {
          return (
            <Card key={project.name}>
              <DescriptionBox>
                <h2>{project.name}</h2>
              </DescriptionBox>
              
              <CardBoxImg
                onClick={() => handleOpen(index)}
              >
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
      
      <ViewModal
        open={open}
        setOpen={setOpen}
        title={myProjects[projectIndex]?.name}
        projects={myProjects}
        projectIndex={projectIndex}
        horizontal={true}
      />
    </PortfolioContainer>
  )
}
