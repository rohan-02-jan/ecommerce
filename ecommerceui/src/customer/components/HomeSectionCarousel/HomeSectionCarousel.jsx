import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from "../../../Data/Men/mens_kurta";

const HomeSectionCarousel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    900: { items: 3 },
    1024: { items: 5 },
  };

  //implement functionality to slide <HomeSectionCard> cards
  const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({item}) => setActiveIndex(item);
 
  //const items = [1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  //use custom data instead of this dummy array
    const items = mens_kurta.slice(0,10).map( (item) => <HomeSectionCard product={item} /> );
  
  return (
    <div className="px-4 lg:px-8 border  ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        {/* HomeSectionCarousel */}
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          //infinite
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          // autoPlay
          // autoPlayInterval={1000}
          // mouseTracking
          //controlsStrategy="alternate"
        />
        {activeIndex !== items.length-5 &&
          <Button 
            onClick={slideNext} variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", left:"-4rem",
            transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" >
            <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)", color:"black"}} />
          </Button> 
        }
        {activeIndex !== 0 &&
          <Button 
            onClick={slidePrev} variant="contained" className="z-50 " sx={{position:'absolute', top:"8rem", right:"0rem",
            transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" >
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
          </Button>
        }
        {/*Implement active index fr second button*/}

        
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
