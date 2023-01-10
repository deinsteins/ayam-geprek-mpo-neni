import React from "react";
import Button from "../Button";
import Card from "../Card";
import Wrapper from "../Wrapper";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MenuSection = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 30
        }
      };
    return (
      <Wrapper Background="/images/bg-section.png">
        <div className="flex flex-col px-12 gap-4 my-auto">
            <h1 className="text-4xl text-white font-bold">JELAJAHI</h1>
            <h1 className="text-4xl text-white font-bold">MENU TERBAIK</h1>
            <h1 className="text-4xl text-white font-bold">DARI KAMI</h1>
            <Button title="Klik Disini" color="#B21600" background="white" />
        </div>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={0}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                <div className="bg-white w-[250px] h-96">Menu 1</div>
                <div className="bg-white w-[250px] h-96">Menu 2</div>
                <div className="bg-white w-[250px] h-96">Menu 3</div>
                <div className="bg-white w-[250px] h-96">Menu 4</div>
                <div className="bg-white w-[250px] h-96">Menu 5</div>
                <div className="bg-white w-[250px] h-96">Menu 6</div>
        </Carousel>
      </Wrapper>
    )
}

export default MenuSection;