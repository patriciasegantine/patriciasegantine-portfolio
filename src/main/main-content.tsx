import { MainContainer } from "./main-content.styles.ts";
import { About } from "../view/about/about.tsx";
import { MyProjects } from "../view/my-projects/my-projects.tsx";
import { RightAside } from "../components/aside/right-aside.tsx";
import { Experience } from "../view/timeline-work/experience.tsx";
import { Nlw } from "../view/nlw/nlw.tsx";
import { Contact } from "../view/contact/contact.tsx";

export const MainContent = () => {
  return (
    <MainContainer>
      <RightAside/>
      <About/>
      <MyProjects/>
      <Nlw/>
      <Experience/>
      <Contact/>
    </MainContainer>
  );
};
