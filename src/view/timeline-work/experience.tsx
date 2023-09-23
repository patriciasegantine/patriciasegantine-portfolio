import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Laptop } from '../../assets/icon/laptop.tsx'
import { theme } from '../../theme.ts'
import { SectionTitle, Subtitle } from '../../global.styles.ts'
import { ExperienceContainer, ExperienceContent } from './experience.styles.ts'

const works = [
  {
    title: 'Frontend Developer at Vertem ',
    subtitle: 'São Paulo - Brazil - Remote',
    date: 'Apr 2022 - present',
    description:
      'I work as a frontend developer at Vertem, developing B2B and B2C products focused on Customer Loyalty and Cashback Campaigns. \n' +
      "My main responsibility is to develop features or make improvements to the company's portal, according to the needs raised by the business team.",
    skills: 'React · Redux · TypeScript · Styled-components',
  },
  {
    title: 'Frontend Developer at FCamara Consulting',
    subtitle: 'São Paulo - Brazil - Remote',
    date: 'Sep 2021 - Mar 2022 ',
    description:
      'I worked as a frontend developer on the new EDP Smart portal project B2B where my main responsibility was to build screens from the XD design and assist the Backend in incorporating the screens into the Umbraco. This was a very important project for me where I could have a deeper understanding of the use of the Agile methodology and work with a large team.',
    skills: 'Angular · JavaScript · SASS · Bootstrap',
  },
  {
    title: 'Frontend Developer',
    subtitle: 'São Paulo - Brazil - Remote',
    date: 'Jul 2019 - Aug 2021',
    description:
      'Target Software is a consulting company that provides services to several B2C clients, which allowed me to work in different environments and gain a lot of experience',
    skills: 'HTML5 · CSS3 · SASS · JavaScript · Git ',
  },
]

export const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Subtitle>
        I'll share my career journey and significant projects, shaping my expertise in front-end development
      </Subtitle>
      
      <ExperienceContent>
        <VerticalTimeline>
          {works.map((work, index) => {
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
