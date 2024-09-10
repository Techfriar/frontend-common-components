import React, { useRef } from "react";
import { Carousel } from "antd";
import type { CarouselProps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./app-carousel.css";

interface AppCarouselProps extends CarouselProps {
  items: React.ReactNode[];
  className?: string;
  nxtIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  showIcon?: boolean;
  showDots?: boolean;
  showLines?: boolean;
  autoplay?: boolean;
}

const AppCarousel = ({
  items,
  className,
  nxtIcon,
  prevIcon,
  showIcon,
  showDots = true,
  autoplay,
  ...rest
}: AppCarouselProps) => {
  const carouselRef = useRef<any>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className={`appCarousel ${className}`}>
      {showIcon && (
        <>
          <span className={"prevArrow"} onClick={handlePrev}>
            {prevIcon || <LeftOutlined />}
          </span>
          <span className={"nextArrow"} onClick={handleNext}>
            {nxtIcon || <RightOutlined />}
          </span>
        </>
      )}

      <Carousel autoplay={autoplay} ref={carouselRef} dots={showDots} {...rest}>
        {items.map((item, index) => (
          <div key={index} className={"carouselItem"}>
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AppCarousel;
