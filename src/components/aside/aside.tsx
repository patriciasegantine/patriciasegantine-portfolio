import { AsideContainer, AsideContent, SocialBox } from "./aside.styles.ts";
import { Linkedin } from "../../assets/icon/linkedin.tsx";
import { Github } from "../../assets/icon/github.tsx";
import { Instagram } from "../../assets/icon/instagram.tsx";

export const Aside = () => {
  return (
    <AsideContainer className={'aside'}>
      <AsideContent>
        <SocialBox>
          <a href="https://www.linkedin.com/in/patriciasegantine/" title={"Linkedin"}>
            <Linkedin/>
          </a>
          
          <a href="https://github.com/patriciasegantine" title={"Github"}>
            <Github/>
          </a>
          
          <a href="https://github.com/patriciasegantine" title={"Github"}>
            <Instagram/>
          </a>
        </SocialBox>
      
      </AsideContent>
    </AsideContainer>
  );
};
