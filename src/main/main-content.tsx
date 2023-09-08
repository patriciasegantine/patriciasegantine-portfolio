import { MainContainer } from "./main-content.styles.ts";
import { About } from "../components/about/about.tsx";
import { Portfolio } from "../components/portifolio/portfolio.tsx";
import { RightAside } from "../components/aside/right-aside.tsx";
import { Experience } from "../components/timeline-work/experience.tsx";
import { Nlw } from "../components/nlw/nlw.tsx";

export const MainContent = () => {
  return (
    <MainContainer>
      {/*<LeftAside/>*/}
      <RightAside/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Nlw/>
    </MainContainer>
  );
};
