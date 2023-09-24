import { FooterContainer } from "./footer.styles.ts";
import { Tools, ToolsBox } from "../../global.styles.ts";
import reactIcon from "../../assets/tools/react.svg";
import typescript from "../../assets/tools/typescript.svg";
import styledComponent from "../../assets/tools/styled-component.svg";
import materialUI from "../../assets/tools/material-ui.svg";
import vite from "../../assets/tools/vite.svg";
import git from "../../assets/tools/git.svg";
import vercel from "../../assets/tools/vercel.svg";
import github from "../../assets/tools/github.svg";

export const Footer = () => {
  
  const portolioDetaild = {
    tools: [
      {id: '01', title: 'React', src: reactIcon},
      {id: '02', title: 'Typescript', src: typescript},
      {id: '03', title: 'Vite', src: vite},
      {id: '04', title: 'Styled Component', src: styledComponent},
      {id: '05', title: 'Material UI', src: materialUI},
      {id: '06', title: 'Git', src: git},
      {id: '08', title: 'Github', src: github},
      {id: '07', title: 'Vercel', src: vercel},
    
    ],
    urlGiHub: "https://github.com/patriciasegantine/patriciasegantine-portfolio",
  }
  
  return (
    <FooterContainer>
      <a href={portolioDetaild.urlGiHub} target={"_blank"}>GitHub: See the project source </a>
      <ToolsBox>
        {portolioDetaild.tools.map(tool => (
          <Tools key={tool.id}>
            <img src={tool.src} alt={tool.title} title={tool.title}/>
          </Tools>
        ))}
      </ToolsBox>
      
      
      <span>Developed with ❤️ by Patricia Segantine</span>
    
    
    </FooterContainer>
  );
};
