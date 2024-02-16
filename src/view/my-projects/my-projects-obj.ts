import { myProjectsInterface } from "@/type/projectsType.ts";
import reactIcon from "@assets/tools/react.svg";
import typescript from "@assets/tools/typescript.svg";
import styledComponent from "@assets/tools/styled-component.svg";
import materialUI from "@assets/tools/material-ui.svg";
import redux from "@assets/tools/redux.svg";
import angular from "@assets/tools/angular.svg";
import vite from "@assets/tools/vite.svg"
import harmony from "@assets/projects/harmony.png"
import comingSoon from "@assets/projects/coming-soon.png"

export const myProjects: myProjectsInterface[] = [
  {
    id: 1,
    name: 'Harmony',
    img: harmony,
    description: 'Explore the Daily Care Web Page, a digital sanctuary dedicated to your daily well-being. This project reflects my passion for frontend development, offering a visually captivating and user-friendly platform to enhance your daily self-care rituals..',
    tools: [
      {id: '01', title: 'React', src: reactIcon},
      {id: '02', title: 'Typescript', src: typescript},
      {id: '03', title: 'Redux', src: redux},
      {id: '04', title: 'Styled Component', src: styledComponent},
      {id: '05', title: 'Material UI', src: materialUI},
      {id: '06', title: 'Vite', src: vite},
    ],
    urlGiHub: "https://github.com/patriciasegantine/harmony-shop",
    urlWebsite: "https://harmony-shop.vercel.app/"
  },
 
  {
    id: 2,
    name: 'Coming Soon',
    img: comingSoon,
    description: 'I\'m excited to share that there are more projects in the pipeline. Stay tuned for updates as I continue to build and expand my portfolio',
    tools: [
      {id: '01', title: 'CSS', src: typescript},
      {id: '02', title: 'Angular', src: angular},
    ],
    urlGiHub: "https://github.com/patriciasegantine/my-portfolio",
    urlWebsite: "https://github.com/patriciasegantine/my-portfolio"
  },
]
