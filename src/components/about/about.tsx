import img from '../../assets/img/perfil-img.png'
import {
  AboutContainer,
  AboutContent,
  ImgContent,
  ImgPerfil,
  InfoPerfil,
  SocialMediaContainer,
  TitlePerfil
} from "./about.styles.ts";
import { Destaque, Subtitle, Title } from "../../global.styles.ts";
import { SocialMedia } from "../social-media/social-media.tsx";

export const About = () => {
  
  return (
    <AboutContainer id="about">
      <AboutContent>
        <InfoPerfil>
          <TitlePerfil>
            <Title>Hi, I’m
              <span>Patricia</span>
            </Title>
            <Destaque>a Frontend Developer</Destaque>
          </TitlePerfil>
          
          <p>
            Professional and dedicated web developer who is passionate about technologies and innovation. I’m a focused
            on
            developing web solutions trying making a difference in people's lives through technology, with more than 4
            years
            of experience in B2B and B2C project development.
          </p>
          
          <p>For the last year I have been working mainly with React, Redux, Typescript, Styled Components, Ant Design,
            Single SPA micro-front-end and RESTful API integration.
          </p>
          
          <p>This year my main goal is to deepen in the study of Angular and Node.js. ❤️
          </p>
          
          <SocialMediaContainer>
            <Subtitle id="portfolio">
              My socials media
            </Subtitle>
            <SocialMedia/>
          </SocialMediaContainer>
        
        </InfoPerfil>
        
        <ImgPerfil>
          <ImgContent>
            <img src={img} alt=""/>
          </ImgContent>
        </ImgPerfil>
      </AboutContent>
    
    
    </AboutContainer>
  );
};
