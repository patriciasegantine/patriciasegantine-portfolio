import React, { useState } from "react";
import { Link, NavContainer } from "../header/header.styles.ts";

interface NavInterface {
  isMobileOpen: boolean
}

export const Nav: React.FC<NavInterface> = ({isMobileOpen}) => {
  
  const [active, setActive] = useState<string>('about')
  
  return (
    <NavContainer isMobile={isMobileOpen}>
      <Link active={active === 'about'} onClick={() => setActive('about')}>About</Link>
      <Link active={active === 'work'} onClick={() => setActive('work')}>Work</Link>
      <Link active={active === 'portfolio'} onClick={() => setActive('portfolio')}>Portfolio</Link>
      <Link active={active === 'resume'} onClick={() => setActive('resume')}>Resume</Link>
      <Link active={active === 'contact'} onClick={() => setActive('contact')}>Contact</Link>
    </NavContainer>
  );
};
