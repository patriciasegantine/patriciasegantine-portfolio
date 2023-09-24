import React from 'react';
import { Box, Fade, Modal } from "@mui/material";
import { theme } from "../../theme.ts";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  BoxImgModal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Tool,
  ToolBox
} from "./projects-modal.styles.ts";
import { ItemBox, LinkGitHub, LinksBox, LinksBoxItems, TitleItem } from "../../view/my-projects/my-projects.styles.ts";
import { myProjectsInterface } from "../../type/projects.ts";

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 700,
  bgcolor: `${theme["background-color-1"]}`,
  border: '2px solid transparent',
  borderRadius: `${theme["border-radius-primary"]}`,
  boxShadow: 24,
  p: 6,
  outline: "transparent",
};

interface ProjectsModal {
  open: boolean
  setOpen: React.Dispatch<boolean>
  title: string
  projects: myProjectsInterface[]
  projectIndex: number
}

export const ProjectsModal: React.FC<ProjectsModal> = ({open, setOpen, title, projects, projectIndex}) => {
  
  const handleClose = () => setOpen(false);
  
  return (
    <Modal
      disableEnforceFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Fade in={open}>
        <Box sx={style}>
          <ModalHeader>
            <ModalTitle id="modal-title">{title}</ModalTitle>
            <ModalClose icon={faCircleXmark} size={"xl"} onClick={handleClose}/>
          </ModalHeader>
          
          <ModalBody>
            <ModalContent>
              <BoxImgModal>
                <img src={projects[projectIndex]?.img} alt=""/>
              </BoxImgModal>
              
              <div>
                <ItemBox>
                  <TitleItem>Description:</TitleItem>
                  <span>{projects[projectIndex]?.description}</span>
                </ItemBox>
                
                <ItemBox>
                  <TitleItem>Tools:</TitleItem>
                  {
                    projects[projectIndex]?.tools.map((item, index) => {
                      return (
                        <ToolBox key={item.id}>
                          <Tool>{item?.title}</Tool>
                          <Tool>{index < projects[projectIndex]?.tools.length - 1 && '-'}</Tool>
                        </ToolBox>
                      )
                    })
                  }
                </ItemBox>
                
                <ItemBox>
                  <LinksBox>
                    <TitleItem>Links:</TitleItem>
                    
                    <LinksBoxItems>
                      <LinkGitHub
                        href={projects[projectIndex]?.urlGiHub}
                        target={'_blank'}>
                        Github
                      </LinkGitHub>
                      
                      <LinkGitHub
                        href={projects[projectIndex]?.urlWebsite}
                        target={'_blank'}>
                        Website
                      </LinkGitHub>
                    </LinksBoxItems>
                  
                  </LinksBox>
                </ItemBox>
              </div>
            
            </ModalContent>
          </ModalBody>
        </Box>
      </Fade>
    
    </Modal>
  );
};
