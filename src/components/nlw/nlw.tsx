import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NLWContainer } from "./nlw.styles.ts";
import { NlwCards } from "../card/nlwCards.tsx";
import 'swiper/css';
import 'swiper/css/virtual';

import nlw01 from '../../assets/img/nlw/nlw-01.webp'
import nlw02 from '../../assets/img/nlw/nlw-02.webp'
import nlw03 from '../../assets/img/nlw/nlw-03.webp'
import nlw04 from '../../assets/img/nlw/nlw-04.webp'
import nlw05 from '../../assets/img/nlw/nlw-05.webp'
import nlw06 from '../../assets/img/nlw/nlw-06.webp'
import nlw07 from '../../assets/img/nlw/nlw-07.webp'
import nlw08 from '../../assets/img/nlw/nlw-08.webp'
import nlw09 from '../../assets/img/nlw/nlw-09.webp'
import nlw10 from '../../assets/img/nlw/nlw-10.webp'
import nlw11 from '../../assets/img/nlw/nlw-11.webp'
import nlw12 from '../../assets/img/nlw/nlw-12.webp'
import { SectionTitle, Subtitle } from "../../global.styles.ts";

const slidesImg = [nlw01, nlw02, nlw03, nlw04, nlw05, nlw06, nlw07, nlw08, nlw09, nlw10, nlw11, nlw12]

export const Nlw = () => {
  
  const slides = slidesImg.map(
    (el) => {
      return <img src={el} alt=""/>
    }
  );
  
  return (
    <NLWContainer>
      
      <SectionTitle id="portfolio">Next Level Week</SectionTitle>
      <Subtitle id="portfolio">
        This is a week of programming
      </Subtitle>
      
      <Swiper
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={2}
        virtual
        navigation={true}
        autoplay={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            draggable
            onClick={() => alert('cliquei')}
          >
            <NlwCards content={slideContent}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </NLWContainer>
  );
};
