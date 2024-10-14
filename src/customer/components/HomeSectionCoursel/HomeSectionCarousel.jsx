import React,{useRef, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarousel = ({data,section_name}) => {
 const [activeIndex,setActiveInsdex]=useState(0)
 const carouselRef =useRef(null)
 console.log(activeIndex)
 console.log(carouselRef)

//  const slidePrev =()=>{setActiveInsdex(activeIndex-1) 
//   console.log("next")};
//  ;
//  const slideNext =()=>setActiveInsdex(activeIndex+1);


const slidePrev = () => {
  
  if (carouselRef.current) {
    carouselRef.current.slidePrev();
  }
};

const slideNext = () => {
  console.log(carouselRef.current)
  if (carouselRef.current) {
    carouselRef.current.slideNext();
  }
};


 const syncActiveIndex=({item})=>setActiveInsdex(item)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };



  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className=" ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{section_name}</h2>
      <div className="relative p-5 border rounded-lg">
        <AliceCarousel
         ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-5 && <Button
          variant="contained" 
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)", bgcolor:"white"
          }}
          aria-label="next"
          onClick={slideNext}
        >
          <KeyboardArrowLeftIcon
            sx={{transform:"rotate(90deg)",color:"black"}}
          />
        </Button>
}





       {activeIndex !==0 && <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)", bgcolor:"white"
          }}
          aria-label="next"
          onClick={slidePrev}
        >
          <KeyboardArrowLeftIcon
            sx={{transform:"rotate(-90deg)",color:"black"}}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;



