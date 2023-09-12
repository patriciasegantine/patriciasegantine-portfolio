import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ContainerDrawer, LogoContainer } from "./drawer.styles.ts";
import { NavMenu } from "../navMenu/navMenu.tsx";
import { theme } from "../../theme.ts";
import { Logo } from "../header/header.styles.ts";
import logo from "../../assets/img/logo.png";

interface MenuMobileDrawer {
  isMobileOpen: boolean
  setIsMobileOpen: React.Dispatch<boolean>
}

export const MenuMobileDrawer: React.FC<MenuMobileDrawer> = ({setIsMobileOpen, isMobileOpen}) => {
  
  return (
    
    <Drawer
      anchor={'left'}
      open={isMobileOpen}
      onClose={() => setIsMobileOpen(false)}
      
      PaperProps={{
        sx: {
          backgroundColor: theme["background-color-1"],
          backdropFilter: 'blur(20px)',
          boxShadow: theme["shadow-primary"]
        }
      }}
    >
      <ContainerDrawer>
        <LogoContainer>
          <Logo
            src={logo}
            alt="logo"
            style={{width: '40px'}}/>
        </LogoContainer>
        
        <NavMenu type={'mobile'}/>
      </ContainerDrawer>
    </Drawer>
  
  );
}
