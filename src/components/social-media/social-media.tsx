import { Linkedin } from "../../assets/icon/linkedin.tsx";
import { Github } from "../../assets/icon/github.tsx";
import { Instagram } from "../../assets/icon/instagram.tsx";
import { SocialBox } from "./social-media.styles.ts";

export const SocialMedia = () => {
  return (
    
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
        title={"Instagram"}
        target='_blank'
      >
        <Instagram/>
      </a>
    </SocialBox>
  
  );
};
