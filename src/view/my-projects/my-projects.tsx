import {
  Card,
  CardBoxImg,
  DescriptionBox,
  IconContainer,
  MyProjectsContainer,
  ToolsBox,
} from './my-projects.styles.ts'
import { SectionTitle, Subtitle } from '../../global.styles.ts'

import { useState } from "react";
import { myProjects } from "./my-projects-obj.ts";
import { ViewModal } from "../../components/modal/view-modal.tsx";
import { Grid } from "@mui/material";

export const MyProjects = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const handleOpen = (index: number) => {
    setOpen(true)
    setProjectIndex(index)
  };
  
  return (
    <MyProjectsContainer id="myProjects">
      <SectionTitle>My Projects</SectionTitle>
      <Subtitle>
        Discover my recent and exciting projects below. Click on each project for details about the technologies used
        and my role in development
      </Subtitle>
      
      <Grid container spacing={4}>
        {myProjects?.map((project, index) => {
          return (
            <Grid key={project.id} item sx={12} md={6}>
              <Card>
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
            </Grid>
          )
        })}
      
      </Grid>
      
      <ViewModal
        open={open}
        setOpen={setOpen}
        title={myProjects[projectIndex]?.name}
        projects={myProjects}
        projectIndex={projectIndex}
        horizontal={false}
      />
    </MyProjectsContainer>
  )
}
