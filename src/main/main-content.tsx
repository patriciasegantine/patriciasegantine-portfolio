import { MainContainer } from "./main-content.styles.ts";
import { About } from "../view/about/about.tsx";
import { MyProjects } from "../view/my-projects/my-projects.tsx";
import { Experience } from "../view/experience/experience.tsx";
import { Nlw } from "../view/nlw/nlw.tsx";
import { Contact } from "../view/contact/contact.tsx";
import { optionsEnum } from "../components/nav-menu/nav-menu-enum.ts";

export const MainContent = () => {
  
  return (
    <MainContainer>
      <About id={optionsEnum.about}/>
      <MyProjects id={optionsEnum.myProjects}/>
      <Nlw id={optionsEnum.nextLevelWeek}/>
      <Experience id={optionsEnum.experience}/>
      <Contact id={optionsEnum.contact}/>
    </MainContainer>
  );
};
