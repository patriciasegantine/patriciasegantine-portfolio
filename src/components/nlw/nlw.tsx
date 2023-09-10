import { CardCarrossel, NLWContainer } from "./nlw.styles.ts";
import { SectionTitle, Subtitle } from "../../global.styles.ts";
import { useState } from "react";
import { nlwProjects } from "./nlwProjects.ts";
import { ViewModal } from "../modal/view-modal.tsx";
import { CarrosselCards } from "../carrossel/carrossel.tsx";
import { myProjectsInterface } from "../../type/projects.ts";

export const Nlw = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const projects = nlwProjects?.map(
    (el: myProjectsInterface) => {
      return (
        <CardCarrossel>
          <h3>{el.name}</h3>
          <img src={el.img} alt=""/>
        </CardCarrossel>)
    }
  );
  
  return (
    <NLWContainer>
      <SectionTitle id="portfolio">Next Level Week</SectionTitle>
      <Subtitle id="portfolio">
        This is a week of programming
      </Subtitle>
      
      <CarrosselCards
        projects={projects}
        setOpen={setOpen}
        setProjectIndex={setProjectIndex}
      />
      
      <ViewModal
        open={open}
        setOpen={setOpen}
        title={nlwProjects[projectIndex]?.name}
        projects={nlwProjects}
        projectIndex={projectIndex}
        isflex={false}
      />
    </NLWContainer>
  );
};
