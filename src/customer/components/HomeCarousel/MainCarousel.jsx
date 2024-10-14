import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      alt=""
      role="presentation"
    />
  ));

  return (
    <div>
      <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={5000} infinite />
    </div>
  );
};

export default MainCarousel;
