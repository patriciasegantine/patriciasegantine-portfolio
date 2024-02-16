import comingSoon from "@assets/projects/coming-soon.png";
import expert from "@assets/img/nlw/expert.webp";
import { myProjectsInterface } from "@/type/projectsType.ts";
import reactIcon from "@assets/tools/react.svg";
import typescript from "@assets/tools/typescript.svg";
import vite from "@assets/tools/vite.svg"
import radix from "@assets/tools/radix.svg"

export const nlwProjects: myProjectsInterface[] = [
  {
    id: 1,
    name: 'Notes - React',
    img: expert,
    description: 'I\'m excited to share that there are more projects in the pipeline. Stay tuned for updates as I continue to build and expand my portfolio',
    tools: [
      {id: '01', title: 'React', src: reactIcon},
      {id: '02', title: 'Typescript', src: typescript},
      {id: '03', title: 'Vite', src: vite},
      {id: '04', title: 'Radix', src: radix},
    ],
    urlGiHub: "https://github.com/patriciasegantine/nlw-expert.git",
    urlWebsite: "https://nlw-expert-pearl.vercel.app/"
  },
  {
    id: 2,
    name: 'Coming Soon',
    img: comingSoon,
    description: 'I\'m excited to share that there are more projects in the pipeline. Stay tuned for updates as I continue to build and expand my portfolio',
    tools: [
      {id: '01', title: 'React', src: reactIcon},
    ],
    urlGiHub: "https://github.com/patriciasegantine/my-portfolio",
    urlWebsite: "https://github.com/patriciasegantine/my-portfolio"
  }
]
