import React, { useState } from 'react'
import {
  faAddressCard,
  faEnvelope,
  faFile,
  faFileCode,
  faRocket,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { Link, LinkContainer, NavContainer, } from './navMenu.styles.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { optionsEnum, optionsEnumLabel } from './enumNav.ts'

interface NavInterface {
  type: 'mobile' | 'desktop'
  toggleMobileMenu: () => void
}

interface MenuOptionsInterface {
  id: string
  name: string
  icon: IconDefinition
}

const menuOptions: MenuOptionsInterface[] = [
  {
    id: optionsEnum.about,
    name: optionsEnumLabel.about,
    icon: faAddressCard,
  },
  {
    id: optionsEnum.myProjects,
    name: optionsEnumLabel.myProjects,
    icon: faFileCode,
  },
  {
    id: optionsEnum.nextLevelWeek,
    name: optionsEnumLabel.nextLevelWeek,
    icon: faRocket,
  },
  {
    id: optionsEnum.experience,
    name: optionsEnumLabel.experience,
    icon: faFile,
  },
  {
    id: optionsEnum.contact,
    name: optionsEnumLabel.contact,
    icon: faEnvelope,
  },
]

export const NavMenu: React.FC<NavInterface> = ({type, toggleMobileMenu}) => {
  const [active, setActive] = useState<string>("about")
  
  const handleSelectLink = (id: string) => {
    const sectionElement = document.getElementById(id)
    setActive(id)
    
    if (sectionElement) sectionElement.scrollIntoView({behavior: 'smooth'})
    if (type === 'mobile') toggleMobileMenu()
  }
  
  return (
    <NavContainer type={type}>
      {menuOptions?.map(({icon, id, name}: MenuOptionsInterface) => (
        <LinkContainer
          key={name}
          active={active === id ? 'active' : 'inactive'}
          onClick={() => handleSelectLink(id)}
        >
          {type === 'mobile' && (
            <FontAwesomeIcon icon={icon} size={'lg'}/>
          )}
          <Link>{name}</Link>
        </LinkContainer>
      ))}
    </NavContainer>
  )
}
