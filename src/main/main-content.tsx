import { MainContainer } from "./main-content.styles.ts";
import { About } from "../components/about/about.tsx";
import { LeftAside } from "../components/aside/left-aside.tsx";
import { RightAside } from "../components/aside/right-aside.tsx";

export const MainContent = () => {
  return (
    <MainContainer>
      <LeftAside/>
      <RightAside/>
      <About/>
    </MainContainer>
  );
};
