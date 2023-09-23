import img from '../../assets/img/perfil-img.png'
import { AboutContainer, ImgContent, ImgPerfil, TitlePerfil } from "./about.styles.ts";
import { Grid } from "@mui/material";
import { InfoPerfil } from "../../components/infoPerfil/infoPerfil.tsx";
import { Destaque, Title } from "../../global.styles.ts";

export const About = () => {
  const reverse = {flexDirection: {xs: 'column-reverse', md: 'row'}}
  
  return (
    <AboutContainer id="about">
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
