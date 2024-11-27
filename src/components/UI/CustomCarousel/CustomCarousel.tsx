import { Carousel } from 'antd';
import { ReactNode } from 'react';
import './custom-curousel.scss';

interface CarouselProps {
  children: ReactNode;
}


const CustomCarousel = ({ children }: CarouselProps) => {
  return (
    <Carousel
      arrows
      slidesToShow={4}
      slidesToScroll={1} // Прокручувати по 1 слайду
      responsive={[
        {
          breakpoint: 1377, // Налаштування для планшетів
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1080, // Налаштування для телефонів
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, // Налаштування для маленьких екранів
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
