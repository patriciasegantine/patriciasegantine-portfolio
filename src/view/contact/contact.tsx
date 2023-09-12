import React from 'react';
import { SectionTitle, Subtitle } from "../../global.styles.ts";
import { ContactContainer, ContactContent, MyInformation } from "../../components/contact-form/contact-form.styles.ts";
import { ContactForm } from "../../components/contact-form/contact-form.tsx";
import { SocialMedia } from "../../components/social-media/social-media.tsx";

export const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <SectionTitle>Contact</SectionTitle>
      <Subtitle>
        Get in Touch
      </Subtitle>
      
      <ContactContent>
        <div>
          <ContactForm/>
        </div>
        
        <div>
          <MyInformation>
            <ul>
              <li>
                <span>Patricia Segantine</span>
              </li>
              
              <li>
                <span>Email:</span>
                <a href="mailto:pnsegantine@gmail.com">pnsegantine@gmail.com</a>
              </li>
              
              <li>
                <span> Address:</span> Swindon - England - UK
              </li>
              
              <li>
                <span>Social media:</span>
                <SocialMedia/>
              </li>
            </ul>
          </MyInformation>
        </div>
      
      </ContactContent>
    
    </ContactContainer>
  );
};
