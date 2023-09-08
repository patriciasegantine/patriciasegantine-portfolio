import projectOne from "../../assets/img/projects/project-one.jpg";
import reactIcon from "../../assets/tools/react.svg";
import tailwindCSS from "../../assets/tools/tailwind-css.svg";
import nodeJS from "../../assets/tools/node-js.svg";
import projectTwo from "../../assets/img/projects/project-two.jpg";
import git from "../../assets/tools/git.svg";
import javaScript from "../../assets/tools/javascript-js.svg";
import angular from "../../assets/tools/angular.svg";
import projectThree from "../../assets/img/projects/project-three.jpg";
import styledComponent from "../../assets/tools/styled-component.svg";
import typescript from "../../assets/tools/typescript.svg";
import projectFour from "../../assets/img/projects/project-four.jpg";
import sass from "../../assets/tools/sass.svg";

interface myProjectsInterface {
  name: string
  img: string
  description: string
  tools: {
    id: string
    title: string
    src: string
  }[]
  urlGiHub: string
  urlWebsite: string
}

export const myProjects: myProjectsInterface[] = [
  {
    name: 'Dynamic Form',
    img: projectOne,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis delectus dolor dolore dolorem dolorum explicabo perspiciatis possimus voluptates.',
    tools: [
      {id: '01', title: 'React', src: reactIcon},
      {id: '02', title: 'Typescript', src: tailwindCSS},
      {id: '03', title: 'Antd', src: nodeJS},
    ],
    urlGiHub: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md",
    urlWebsite: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md"
  },
  {
    name: 'Project Two',
    img: projectTwo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis delectus dolor dolore dolorem dolorum explicabo perspiciatis possimus voluptates.',
    tools: [
      {id: '01', title: 'css', src: git},
      {id: '02', title: 'css', src: javaScript},
      {id: '03', title: 'css', src: angular},
    ],
    urlGiHub: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md",
    urlWebsite: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md"
  },
  {
    name: 'Project Three',
    img: projectThree,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis delectus dolor dolore dolorem dolorum explicabo perspiciatis possimus voluptates.',
    tools: [
      {id: '01', title: 'CSS', src: reactIcon},
      {id: '02', title: 'CSS', src: styledComponent},
      {id: '03', title: 'CSS', src: typescript},
    ],
    urlGiHub: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md",
    urlWebsite: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md"
  },
  {
    name: 'Project Four',
    img: projectFour,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis delectus dolor dolore dolorem dolorum explicabo perspiciatis possimus voluptates.',
    tools: [
      {id: '01', title: 'CSS', src: sass},
      {id: '02', title: 'CSS', src: reactIcon},
      {id: '03', title: 'css', src: reactIcon},
    ],
    urlGiHub: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md",
    urlWebsite: "https://github.com/patriciasegantine/dynamic-form-react-ts/blob/main/README.md"
  },
]
