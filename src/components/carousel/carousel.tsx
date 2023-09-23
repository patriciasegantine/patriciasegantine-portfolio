import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { CardCarousel, Carrossel } from "../../view/nlw/nlw.styles.ts";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { theme } from "../../theme.ts";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CardBoxImg } from "../../view/my-projects/my-projects.styles.ts";
import { nlwProjects } from "../../view/nlw/nlwProjects.ts";
import { myProjectsInterface } from "../../type/projects.ts";

interface Interface {
  setOpen: React.Dispatch<boolean>
  // projects: myProjectsInterface
  setProjectIndex: React.Dispatch<number>
  slideQuantity: number
}

export const CarouselCards: React.FC<Interface> = ({setOpen, setProjectIndex, slideQuantity}) => {
  
  const projects = nlwProjects?.map(
    (el: myProjectsInterface) => {
      return (
        <CardCarousel>
          <h3>{el.name}</h3>
          <img src={el.img} alt=""/>
        </CardCarousel>)
    }
  );
  
  const handleOpen = (index: number) => {
    setOpen(true)
    setProjectIndex(index)
  };
  
  return (
    <Carrossel
      style={{
        // '--swiper-navigation-color': theme["color-line"],
        // '--swiper-pagination-color': theme["color-line"],
        padding: theme["spacing-small"]
      }}
      pagination={{
        type: 'bullets',
        clickable: true
      }}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={slideQuantity}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      
      spaceBetween={5}
      loop={true}
    >
      {
        projects?.map((slideContent: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              draggable
              onClick={() => handleOpen(index)}
            >
              <CardBoxImg>
                {slideContent}
              </CardBoxImg>
            </SwiperSlide>
          )
        })
      }
    </Carrossel>
  );
};
