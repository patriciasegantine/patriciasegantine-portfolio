import React, { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Laptop } from '../../assets/icon/laptop.tsx'
import { theme } from '../../theme.ts'
import { SectionDescription, SectionSubtitle, SectionTitle } from '../../global.styles.ts'
import { ExperienceContainer, ExperienceContent } from './experience.styles.ts'
import { myExperiences } from "./myexperiences.ts"
import { useInView } from "react-intersection-observer";
import { useMainContext } from "../../context/main-context.tsx";

interface ExperienceProps {
  id: string
}

export const Experience: React.FC<ExperienceProps> = ({id}) => {
  const {activeSection, setActiveSection} = useMainContext()
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [id, inView, activeSection]);
  return (
    <ExperienceContainer id={id} ref={ref}>
      <SectionSubtitle>What i have done so far</SectionSubtitle>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionDescription>
        This a showcase of my career journey and significant projects, shaping my expertise in front-end development.
        Each experience has shaped my skills and contributed to my growth as a developer.
      </SectionDescription>
      
      <ExperienceContent>
        <VerticalTimeline>
          {
            myExperiences.map((work, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: theme['color-gray-dark'],
                    color: theme['color-neutral-light'],
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid  ${theme['color-gray-dark']}`,
                  }}
                  date={work.date}
                  iconStyle={{
                    background: theme['color-highlight'],
                    color: theme['color-gray-dark'],
                  }}
                  icon={<Laptop/>}
                >
                  <h3 className="vertical-timeline-element-title">
                    {work.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {work.subtitle}
                  </h4>
                  <p>{work.description}</p>
                  <p>{work.skills}</p>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </ExperienceContent>
    </ExperienceContainer>
  )
}
