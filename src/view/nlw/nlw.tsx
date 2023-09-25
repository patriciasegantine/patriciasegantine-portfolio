import React, { useEffect, useState } from "react";
import { NLWContainer } from "./nlw.styles.ts";
import { SectionDescription, SectionSubtitle, SectionTitle } from "../../global.styles.ts";
import { nlwProjects } from "./nlwProjects.ts";
import { CarouselCards } from "../../components/carousel/carousel.tsx";
import { ProjectsModal } from "../../components/projects-modal/projects-modal.tsx";
import { useInView } from "react-intersection-observer";
import { useMainContext } from "../../context/main-context.tsx";

interface NlwProps {
  id: string;
}

export const Nlw: React.FC<NlwProps> = ({id}) => {
  const {activeSection, setActiveSection} = useMainContext();
  const [open, setOpen] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [slideQuantity, setSlideQuantity] = useState<number>(2)
  
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  
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
  
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [id, inView, activeSection]);
  
  return (
    <NLWContainer id={id} ref={ref}>
      <SectionSubtitle>collaborate work </SectionSubtitle>
      <SectionTitle>Next Level Week</SectionTitle>
      <SectionDescription>
        Next Level Week is an immersion experience that challenged me to go above and beyond in web development. I
        developed exciting projects, expanding my skills and collaborating with talented developers.
      </SectionDescription>
      
      <CarouselCards
        setOpen={setOpen}
        setProjectIndex={setProjectIndex}
        slideQuantity={slideQuantity}
      />
      
      <ProjectsModal
        open={open}
        setOpen={setOpen}
        title={nlwProjects[projectIndex]?.name}
        projects={nlwProjects}
        projectIndex={projectIndex}
      />
    </NLWContainer>
  );
};
