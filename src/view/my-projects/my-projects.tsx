import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Grid } from "@mui/material";
import { Card, CardBoxImg, DescriptionBox, MyProjectsContainer } from './my-projects.styles.ts'
import { SectionDescription, SectionSubtitle, SectionTitle, Tools, ToolsBox } from '@/global.styles.ts'
import { myProjects } from "./my-projects-obj.ts";
import { ProjectsModal } from "@/components/projects-modal/projects-modal.tsx";
import { useMainContext } from "@/context/main-context.tsx";

interface myProjectsProps {
  id: string;
}

export const MyProjects: React.FC<myProjectsProps> = ({id}) => {
  const {activeSection, setActiveSection} = useMainContext()
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const handleOpen = (index: number) => {
    setOpen(true)
    setProjectIndex(index)
  };
  
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [id, inView, activeSection]);
  
  return (
    <MyProjectsContainer ref={ref} id={id}>
      <SectionSubtitle>My Work</SectionSubtitle>
      <SectionTitle>My Projects</SectionTitle>
      <SectionDescription>
        Explore below some of my recent and exciting projects. Each project represents an opportunity to apply my
        front-end skills and craft exceptional solutions. Click on each project for more details about the technologies
        used and my role in development
      </SectionDescription>
      
      <Grid container spacing={4}>
        {
          myProjects?.map((project, index) => {
          return (
            <Grid key={project.id} item xs={12} md={6}>
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
                      <Tools key={tool.id}>
                        <img src={tool.src} alt={tool.title} title={tool.title}/>
                      </Tools>
                    )
                  })}
                </ToolsBox>
              </Card>
            </Grid>
          )
        })}
      
      </Grid>
      
      <ProjectsModal
        open={open}
        setOpen={setOpen}
        title={myProjects[projectIndex]?.name}
        projects={myProjects}
        projectIndex={projectIndex}
      />
    </MyProjectsContainer>
  )
}
