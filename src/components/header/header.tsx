import { useEffect, useState } from "react";
import { HeaderContainer, HeaderContent, Logo, MenuMobileContainer } from "./header.styles.ts";
import { theme } from "../../theme.ts";
import { MenuMobile } from "../../assets/icon/menu-mobile.tsx";
import { Nav } from "../../components/nav/nav.tsx";
import logo from '../../assets/img/logo.png'

export const Header = () => {
  
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  
  const handleScroll = () => {
    
    if (window.scrollY > 10) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };
  
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    console.log('menuOpen')
  };
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (windowWidth < theme['tablet']) {
      setShowMobileMenu(true)
    } else {
      setShowMobileMenu(false)
      setIsMobileOpen(false)
    }
  }, [windowWidth]);
  
  return (
    <HeaderContainer isMenuFixed={isMenuFixed}>
      <HeaderContent>
        <Logo src={logo} alt="logo" style={{width: '40px'}}/>
        {
          showMobileMenu
            ? <MenuMobileContainer onClick={toggleMobileMenu}>
              <MenuMobile/>
            </MenuMobileContainer>
            : <Nav isMobileOpen={false}/>
        }
      </HeaderContent>
    
    </HeaderContainer>
  );
};
