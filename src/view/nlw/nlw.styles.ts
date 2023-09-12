import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";
import { Swiper } from "swiper/react";

export const Carrossel = styled(Swiper)`
    //box-shadow: ${theme["shadow-primary"]};
  border-radius: ${theme["border-radius-primary"]};

`

export const NLWContainer = styled(SectionContainer)`

`
export const CardCarousel = styled.div`
    //border: 1px solid ${theme["color-social-media"]};

  h3 {
    text-align: center;
    padding-top: ${theme["spacing-small"]};
    margin-bottom: 0;
  }
`
