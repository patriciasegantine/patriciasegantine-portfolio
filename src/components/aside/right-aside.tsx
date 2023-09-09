import { AsideContainer, RightAsideContent } from "./aside.styles.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faCircleUp} size={"2x"}/>
        </span>
      </RightAsideContent>
    </AsideContainer>
  );
};
