import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { CardCarousel, Carrossel } from "@/view/nlw/nlw.styles.ts";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { nlwProjects } from "@/view/nlw/nlwProjects.ts";
import { myProjectsInterface } from "@/type/projectsType.ts";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Tools, ToolsBox } from "@/global.styles.ts";
import { CardBoxCarousel } from "@/view/my-projects/my-projects.styles.ts";

interface Interface {
  slideQuantity: number
}

export const CarouselCards: React.FC<Interface> = ({slideQuantity}) => {
  
  const projects = nlwProjects?.map((nlw: myProjectsInterface) => {
      return (
        <>
        <CardCarousel>
          <a href={nlw?.urlGiHub}
             target={'_blank'}>
            
            <CardBoxCarousel>
            <img src={nlw?.img} alt=""/>
            </CardBoxCarousel>
          </a>
          
          <ToolsBox>
            {nlw.tools.map((tool) => {
              return (
                <Tools key={tool.id}>
                  <img src={tool.src} alt={tool.title} title={tool.title}/>
                </Tools>
              )
            })}
          </ToolsBox>
        </CardCarousel>
        
        
        </>
      )
    }
  );
  
  return (
    <Carrossel
      pagination={{
        type: 'bullets',
        clickable: true
      }}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={slideQuantity}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      
      spaceBetween={5}
      loop={true}
    >
      {
        projects?.map((slideContent, index: number) => {
          return (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              draggable
            >
              <div>
                {slideContent}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Carrossel>
  );
};
