import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";
import { Swiper } from "swiper/react";

export const Carrossel = styled(Swiper)`
  border-radius: ${theme["border-radius-primary"]};

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme["color-social-media"]};
  }

  .swiper-pagination-bullet {
    background-color: ${theme["color-social-media"]};
  }
`

export const NLWContainer = styled(SectionContainer)``

export const CardCarousel = styled.div`
  h3 {
    text-align: center;
    padding-top: ${theme["spacing-small"]};
    margin-bottom: 0;
  }
`
