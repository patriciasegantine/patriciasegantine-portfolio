import React from 'react';
import { Box, Fade, Modal } from "@mui/material";
import { theme } from "../../theme.ts";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalBody, ModalClose, ModalHeader, ModalTitle } from "./modal.styles.ts";

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: `${theme["background-color-1"]}`,
  border: '2px solid transparent',
  borderRadius: `${theme["border-radius-primary"]}`,
  boxShadow: 24,
  p: 6,
  outline: "transparent",
};

interface ViewModal {
  open: boolean
  setOpen: React.Dispatch<boolean>
  title: string
  modalContent: any
}

export const ViewModal: React.FC<ViewModal> = ({open, setOpen, title, modalContent}) => {
  
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
            {modalContent}
          </ModalBody>
          
          {/*<ModalFooter>*/}
          {/*  <ModalCloseButton*/}
          {/*    onClick={handleClose}>Fechar*/}
          {/*  </ModalCloseButton>*/}
          {/*</ModalFooter>*/}
        </Box>
      </Fade>
    
    </Modal>
  );
};
