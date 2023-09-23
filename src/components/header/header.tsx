import { useEffect, useState } from 'react'
import { HeaderContainer, HeaderContent, Logo, MenuMobileContainer, } from './header.styles.ts'
import { MenuMobileDrawer } from '../mobile-drawer/mobile-drawer.tsx'
import { NavMenu } from '../navMenu/navMenu.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo.png'

export const Header = () => {
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsMenuFixed(true)
    } else {
      setIsMenuFixed(false)
    }
  }
  
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    if (windowWidth < 768) {
      setShowMobileMenu(true)
    } else {
      setShowMobileMenu(false)
      setIsMobileOpen(false)
    }
  }, [windowWidth])
  
  return (
    <HeaderContainer fixed={isMenuFixed ? 'fixed' : 'noFixed'}>
      <HeaderContent>
        <Logo
          src={logo}
          alt="logo"
          style={{width: '40px'}}
        />
        {
          showMobileMenu ? (
            <MenuMobileContainer onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} size={'2x'}/>
            </MenuMobileContainer>
          ) : (
            <NavMenu
              type={'desktop'}
              toggleMobileMenu={toggleMobileMenu}/>
          )}
      </HeaderContent>
      
      <MenuMobileDrawer
        toggleMobileMenu={toggleMobileMenu}
        isMobileOpen={isMobileOpen}
      />
    </HeaderContainer>
  )
}
