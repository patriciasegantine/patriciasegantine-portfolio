import { MyInformation } from "../contact-form/contact-form.styles.ts";
import { InfoContactBox, InfoContactBoxFlex, InfoTitle } from "../../view/contact/contact.styles.ts";
import { SocialMedia } from "../social-media/social-media.tsx";

export const MyInfoContact = () => {
  return (
    <MyInformation>
      <InfoContactBoxFlex>
        <InfoTitle> Patricia Segantine</InfoTitle>
      </InfoContactBoxFlex>
      
      <InfoContactBoxFlex>
        <InfoTitle> Email:</InfoTitle>
        <span><a href="mailto:pnsegantine@gmail.com">pnsegantine@gmail.com</a></span>
      </InfoContactBoxFlex>
      
      <InfoContactBox>
        <span>Social media:</span>
        <SocialMedia/>
      </InfoContactBox>
    
    </MyInformation>
  );
};
