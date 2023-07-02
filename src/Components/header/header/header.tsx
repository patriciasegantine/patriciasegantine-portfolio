import { useEffect, useState } from "react";
import logo from '../../../assets/img/logo.png'
import { HeaderContainer, Link, Logo, Nav } from "./header.styles.ts";

export const Header = () => {
  const [active, setActive] = useState<string>('about')
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  
  const handleScroll = () => {
    
    if (window.scrollY > 10) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  
  return (
    <HeaderContainer fixed={isMenuFixed}>
      <Logo src={logo} alt="logo" style={{width: '40px'}}/>
      
      <Nav>
        <Link active={active === 'about'} onClick={() => setActive('about')}>About</Link>
        <Link active={active === 'work'} onClick={() => setActive('work')}>Work</Link>
        <Link active={active === 'portfolio'} onClick={() => setActive('portfolio')}>Portfolio</Link>
        <Link active={active === 'resume'} onClick={() => setActive('resume')}>Resume</Link>
        <Link active={active === 'contact'} onClick={() => setActive('contact')}>Contact</Link>
      </Nav>
    
    </HeaderContainer>
  );
};
