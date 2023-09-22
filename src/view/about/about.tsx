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
import { SocialMedia } from "../../components/social-media/social-media.tsx";

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
            I'm a dedicated web developer passionate about technology and innovation, with over 4 years of experience in
            both B2B and B2C project development. I focus on creating web solutions that make a difference in people's
            lives through technology.
          </p>
          
          <p>
            Over the past year, my main areas of expertise have included React, Redux, TypeScript, Styled Components,
            Ant Design, Single SPA micro-front-end, and RESTful API integration.
          </p>
          
          <p>
            My primary goal for this year is to further deepen my knowledge of Angular. ❤️
          </p>
          
          <SocialMediaContainer>
            <Subtitle>
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
