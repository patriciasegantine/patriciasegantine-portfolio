import { AsideContainer, LeftAsideContent, SocialBox } from "./aside.styles.ts";
import { Linkedin } from "../../assets/icon/linkedin.tsx";
import { Github } from "../../assets/icon/github.tsx";
import { Instagram } from "../../assets/icon/instagram.tsx";

export const LeftAside = () => {
  return (
    <AsideContainer>
      <LeftAsideContent>
        <SocialBox>
          <a href="https://www.linkedin.com/in/patriciasegantine/"
             title={"Linkedin"}
             target='_blank'>
            <Linkedin/>
          </a>
          
          <a
            href="https://github.com/patriciasegantine"
            title={"Github"}
            target='_blank'
          >
            <Github/>
          </a>
          
          <a
            href="https://github.com/patriciasegantine"
            title={"Github"}
            target='_blank'
          >
            <Instagram/>
          </a>
        </SocialBox>
      
      </LeftAsideContent>
    </AsideContainer>
  );
};
