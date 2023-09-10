import * as React from 'react';
import Drawer from '@mui/material/Drawer';

interface MenuMobileDrawer {
  isMobileOpen: boolean
  setIsMobileOpen: React.Dispatch<boolean>
}

export const MenuMobileDrawer: React.FC<MenuMobileDrawer> = ({isMobileOpen, setIsMobileOpen}) => {
  
  return (
    
    <Drawer
      anchor={'left'}
      open={isMobileOpen}
      onClose={() => setIsMobileOpen(false)}
    >
      <div style={{width: '300px'}}> Test</div>
    </Drawer>
  
  );
}
