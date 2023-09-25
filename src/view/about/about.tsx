import img from '../../assets/img/perfil-img.png'
import React, { useEffect } from "react";
import { AboutContainer, ImgContent, ImgPerfil, TitlePerfil } from "./about.styles.ts";
import { Grid } from "@mui/material";
import { InfoPerfil } from "../../components/infoPerfil/infoPerfil.tsx";
import { Destaque, Title } from "../../global.styles.ts";
import { useInView } from "react-intersection-observer";
import { useMainContext } from "../../context/main-context.tsx";

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({id}) => {
  
  const {activeSection, setActiveSection} = useMainContext()
  const reverse = {flexDirection: {xs: 'column-reverse', md: 'row'}}
  
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [id, inView, activeSection]);
  
  return (
    <AboutContainer id={id} ref={ref}>
      <TitlePerfil>
        <Title>Hi, I’m
          <span>Patricia</span>
        </Title>
        <Destaque>a Frontend Developer</Destaque>
      </TitlePerfil>
      
      <Grid container columnSpacing={3} sx={{...reverse}}>
        <Grid item xs={12} md={7}>
          <InfoPerfil/>
        </Grid>
        
        <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
          <ImgPerfil>
            <ImgContent>
              <img src={img} alt=""/>
            </ImgContent>
          </ImgPerfil>
        
        </Grid>
      </Grid>
    
    
    </AboutContainer>
  );
};
