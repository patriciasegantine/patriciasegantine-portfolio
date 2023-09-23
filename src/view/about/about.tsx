import img from '../../assets/img/perfil-img.png'
import { AboutContainer, AboutContent, ImgContent, ImgPerfil, TitlePerfil } from "./about.styles.ts";
import { Grid } from "@mui/material";
import { InfoPerfil } from "../../components/infoPerfil/infoPerfil.tsx";
import { theme } from "../../theme.ts";
import { Destaque, Title } from "../../global.styles.ts";
import React from "react";

export const About = () => {
  
  return (
    <AboutContainer id="about">
      <TitlePerfil>
        <Title>Hi, I’m
          <span>Patricia</span>
        </Title>
        <Destaque>a Frontend Developer</Destaque>
      </TitlePerfil>
      
      <AboutContent container sx={{flexDirection: {xs: 'column-reverse', md: 'row'}}}>
        <Grid item xs={12} md={7} paddingRight={theme["spacing-regular"]}>
          <InfoPerfil/>
        </Grid>
        
        <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
          <ImgPerfil>
            <ImgContent>
              <img src={img} alt=""/>
            </ImgContent>
          </ImgPerfil>
        
        </Grid>
      </AboutContent>
    
    
    </AboutContainer>
  );
};
