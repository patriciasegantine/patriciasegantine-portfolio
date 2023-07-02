import { AsideContainer, RightAsideContent } from "./aside.styles.ts";
import { UpTop } from "../../assets/icon/up-top.tsx";

export const RightAside = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <AsideContainer>
      <RightAsideContent>
        <span onClick={scrollToTop}>
          <UpTop/>
        </span>
      </RightAsideContent>
    </AsideContainer>
  );
};
