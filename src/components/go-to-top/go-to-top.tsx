import React from "react";
import { Fab } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { theme } from "../../theme.ts";

interface IisMenuFixed {
  isMenuFixed: boolean
}

export const GoToTop: React.FC<IisMenuFixed> = ({isMenuFixed}) => {
  
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    bgcolor: theme["color-social-media"]
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <>
      {isMenuFixed &&
        <Fab onClick={scrollToTop} sx={fabStyle} size="small">
          <UpIcon/>
        </Fab>
      }
    </>
  );
};
