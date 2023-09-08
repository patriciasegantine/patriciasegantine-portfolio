import {
  Card,
  CardBoxImg,
  CardContainer,
  DescriptionBox,
  IconContainer,
  ItemBox,
  LinkGitHub,
  LinksBox,
  LinksBoxItems,
  ModalContent,
  PortfolioContainer,
  TitleItem,
  ToolsBox,
} from './portfolio.styles.ts'
import { SectionTitle, Subtitle } from '../../global.styles.ts'

import { useState } from "react";
import { myProjects } from "./my-projects-obj.ts";
import { ViewModal } from "../modal/view-modal.tsx";
import { Tool, ToolBox } from "../modal/modal.styles.ts";

export const Portfolio = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const handleOpen = (index: number) => {
    setOpen(true)
    setProjectIndex(index)
  };
  
  return (
    <PortfolioContainer>
      <SectionTitle id="portfolio">My Portfolio</SectionTitle>
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
        modalContent={
          <ModalContent>
            <div>
              <img src={myProjects[projectIndex]?.img} alt=""/>
            </div>
            
            <div>
              <ItemBox>
                <TitleItem>Description:</TitleItem>
                <span>{myProjects[projectIndex]?.description}</span>
              </ItemBox>
              
              <ItemBox>
                <TitleItem>Tools:</TitleItem>
                
                <span>
                  {myProjects[projectIndex]?.tools.map((item, index) => {
                    return (
                      <ToolBox key={item.id}>
                        <Tool>{item?.title}</Tool>
                        <Tool>{index < myProjects[projectIndex]?.tools.length - 1 && '-'}</Tool>
                      </ToolBox>
                    )
                  })
                  }
                </span>
              </ItemBox>
              
              <ItemBox>
                <LinksBox>
                  <TitleItem>Links:</TitleItem>
                  
                  <LinksBoxItems>
                    <LinkGitHub
                      href={myProjects[projectIndex]?.urlGiHub}
                      target={'_blank'}>
                      Github
                    </LinkGitHub>
                    
                    <LinkGitHub
                      href={myProjects[projectIndex]?.urlGiHub}
                      target={'_blank'}>
                      Website
                    </LinkGitHub>
                  </LinksBoxItems>
                
                </LinksBox>
              </ItemBox>
            </div>
          
          </ModalContent>
        }
      />
    </PortfolioContainer>
  )
}
