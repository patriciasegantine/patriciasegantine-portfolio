import { MainContainer } from "./main-content.styles.ts";
import { About } from "../view/about/about.tsx";
import { MyProjects } from "../view/my-projects/my-projects.tsx";
import { Experience } from "../view/experience/experience.tsx";
import { Nlw } from "../view/nlw/nlw.tsx";
import { Contact } from "../view/contact/contact.tsx";

export const MainContent = () => {
  return (
    <MainContainer>
      <About/>
      <MyProjects/>
      <Nlw/>
      <Experience/>
      <Contact/>
    </MainContainer>
  );
};
