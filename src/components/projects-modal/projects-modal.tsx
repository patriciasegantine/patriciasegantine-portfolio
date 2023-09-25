import React from 'react';
import { Box, Fade, Modal } from "@mui/material";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  BoxImgModal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalHeader,
  modalStyle,
  ModalTitle,
  Tool,
  ToolBox
} from "./projects-modal.styles.ts";
import { ItemBox, LinkGitHub, LinksBox, LinksBoxItems, TitleItem } from "../../view/my-projects/my-projects.styles.ts";
import { myProjectsInterface } from "../../type/projects.ts";

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
        <Box sx={{...modalStyle}}>
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
