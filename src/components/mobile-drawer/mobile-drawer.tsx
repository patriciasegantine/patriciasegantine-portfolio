import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { NavMenu } from "../navMenu/navMenu.tsx";
import { theme } from "../../theme.ts";
import { Logo } from "../header/header.styles.ts";
import logo from "../../assets/img/logo.png";
import { ContainerDrawer, LogoContainer } from "./mobile-drawer.styles.ts";

interface MenuMobileDrawer {
  isMobileOpen: boolean
  toggleMobileMenu: () => void
}

export const MenuMobileDrawer: React.FC<MenuMobileDrawer> = ({toggleMobileMenu, isMobileOpen}) => {
  
  return (
    
    <Drawer
      anchor={'left'}
      open={isMobileOpen}
      onClose={toggleMobileMenu}
      
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
            style={{width: '40px'}}
          />
        </LogoContainer>
        
        <NavMenu type={'mobile'} toggleMobileMenu={toggleMobileMenu}/>
      </ContainerDrawer>
    </Drawer>
  
  );
}
