import { MainContainer } from "./main-content.styles.ts";
import { About } from "../view/about/about.tsx";
import { MyProjects } from "../view/my-projects/my-projects.tsx";
import { RightAside } from "../components/aside/right-aside.tsx";
import { Experience } from "../components/timeline-work/experience.tsx";
import { Nlw } from "../components/nlw/nlw.tsx";

export const MainContent = () => {
  return (
    <MainContainer>
      {/*<LeftAside/>*/}
      <RightAside/>
      <About/>
      <MyProjects/>
      <Experience/>
      <Nlw/>
    </MainContainer>
  );
};
