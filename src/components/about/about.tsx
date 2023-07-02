import img from '../../assets/img/perfil-img.png'
import { AboutContainer, AboutContent, ImgPerfil, InfoPerfil, TitlePerfil } from "./about.styles.ts";

export const About = () => {
  
  return (
    <AboutContainer flex={true}>
      <AboutContent>
        <InfoPerfil>
          <TitlePerfil>
            <h3>Welcome to my world</h3>
            <h1>Hi, I’m
              <span>Patricia</span>
            </h1>
            <h2>a Frontend Developer</h2>
          </TitlePerfil>
          
          <p>
            Professional and dedicated web developer who is passionate about technologies and innovation. I’m a focused
            on
            developing web solutions traying making a difference in people's lives through technology, with more than 4
            years
            of experience in B2B and B2C project development.
          </p>
          
          <p>For the last year I have been working mainly with React, Redux, Typescript, Styled Components, Ant Design,
            Single SPA micro-front-end and RESTful API integration.
          </p>
          
          <p>This year my main goal is to deepen in the study of Angular and Node.js. ❤️
          </p>
        
        </InfoPerfil>
        
        <ImgPerfil>
          <img src={img} alt=""/>
        </ImgPerfil>
      </AboutContent>
    </AboutContainer>
  );
};
