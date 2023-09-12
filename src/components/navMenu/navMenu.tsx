import React, { useState } from "react";
import { faAddressCard, faEnvelope, faFile, faFileCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link, LinkContainer, linkOptions, NavContainer } from "./navMenu.styles.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { optionsEnum, optionsEnumLabel } from "./enumNav.ts";

interface NavInterface {
  type: 'mobile' | 'desktop'
}

interface MenuOptionsInterface {
  id: string
  name: string
  icon: any
}

const menuOptions: MenuOptionsInterface[] = [
  {
    id: optionsEnum.about,
    name: optionsEnumLabel.about,
    icon: faAddressCard
  },
  {
    id: optionsEnum.myProjects,
    name: optionsEnumLabel.myProjects,
    icon: faFileCode
  },
  {
    id: optionsEnum.nextLevelWeek,
    name: optionsEnumLabel.nextLevelWeek,
    icon: faRocket
  },
  {
    id: optionsEnum.experience,
    name: optionsEnumLabel.experience,
    icon: faFile
  },
  {
    id: optionsEnum.contact,
    name: optionsEnumLabel.contact,
    icon: faEnvelope
  }
]

export const NavMenu: React.FC<NavInterface> = ({type}) => {
  
  const [active, setActive] = useState<linkOptions>(optionsEnum.about)
  
  const handleSelectLink = (id: string | null) => {
    setActive(id)
    
    const sectionElement = document.getElementById(optionsEnum[id]);
    
    if (sectionElement) {
      sectionElement.scrollIntoView({behavior: 'smooth'});
    }
    
    console.log('active', active)
  }
  
  return (
    <NavContainer type={type}>
      {
        menuOptions?.map((option: { id: string, icon: any, name: string }) => (
            <LinkContainer
              key={option.name}
              active={active === option.id ? active : null}
              onClick={() => handleSelectLink(option.id)}
            >
              {type === 'mobile' &&
                <FontAwesomeIcon icon={option.icon} size={'lg'}/>
              }
              <Link>{option.name}</Link>
            
            </LinkContainer>
          )
        )
      }
    </NavContainer>
  );
};
