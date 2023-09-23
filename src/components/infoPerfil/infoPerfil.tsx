import React from 'react';
import { SocialMediaContainer } from "../../view/about/about.styles.ts";
import { Subtitle } from "../../global.styles.ts";
import { SocialMedia } from "../social-media/social-media.tsx";
import { InfoPerfilContent } from "./InfoPerfil.styles.ts";

export const InfoPerfil = () => {
  return (
    <InfoPerfilContent>
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
    
    </InfoPerfilContent>
  );
};
