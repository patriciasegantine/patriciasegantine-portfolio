import { CardCarousel, NLWContainer } from "./nlw.styles.ts";
import { SectionTitle, Subtitle } from "../../global.styles.ts";
import { useEffect, useState } from "react";
import { nlwProjects } from "./nlwProjects.ts";
import { ViewModal } from "../../components/modal/view-modal.tsx";
import { myProjectsInterface } from "../../type/projects.ts";
import { CarouselCards } from "../../components/carousel/carousel.tsx";

export const Nlw = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const [slideQuantity, setSlideQuantity] = useState<number>(2)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    if (windowWidth > 768) {
      setSlideQuantity(2)
    } else {
      setSlideQuantity(1)
    }
  }, [windowWidth]);
  
  const projects = nlwProjects?.map(
    (el: myProjectsInterface) => {
      return (
        <CardCarousel>
          <h3>{el.name}</h3>
          <img src={el.img} alt=""/>
        </CardCarousel>)
    }
  );
  
  return (
    <NLWContainer id="nextLevelWeek">
      <SectionTitle>Next Level Week</SectionTitle>
      <Subtitle>
        This is a week of programming
      </Subtitle>
      
      <CarouselCards
        projects={projects}
        setOpen={setOpen}
        setProjectIndex={setProjectIndex}
        slideQuantity={slideQuantity}
      />
      
      <ViewModal
        open={open}
        setOpen={setOpen}
        title={nlwProjects[projectIndex]?.name}
        projects={nlwProjects}
        projectIndex={projectIndex}
        horizontal={false}
      />
    </NLWContainer>
  );
};
