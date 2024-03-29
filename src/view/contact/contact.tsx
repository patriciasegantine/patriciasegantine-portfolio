import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Grid } from "@mui/material";
import { SectionDescription, SectionSubtitle, SectionTitle } from "@/global.styles.ts";
import { ContactContainer } from "@/components/contact-form/contact-form.styles.ts";
import { ContactForm } from "@/components/contact-form/contact-form.tsx";
import { MyInfoContact } from "@/components/my-info-contact/my-info-contact.tsx";
import { useMainContext } from "@/context/main-context.tsx";

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({id}) => {
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
    <ContactContainer id={id} ref={ref}>
      <SectionSubtitle>Get in Touch</SectionSubtitle>
      <SectionTitle>Contact</SectionTitle>
      <SectionDescription>
        Interested in my work or looking to collaborate? Feel free to reach out. I'm always open to new opportunities
        and eager to hear your ideas. You can find me on the following social media or send me a message:
      </SectionDescription>
      
      <Grid container columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} md={7}>
          <ContactForm/>
        </Grid>
        
        <Grid item xs={12} md={5} display={'flex'} alignItems={'flex-end'}>
          <MyInfoContact/>
        </Grid>
      
      </Grid>
    </ContactContainer>
  );
};
