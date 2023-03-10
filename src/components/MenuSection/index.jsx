import React from "react";
import Button from "../Button";
import products from "../../data/menu.json";
import Wrapper from "../Wrapper";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MenuCard from "../MenuCard";

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
            autoPlay={true}
            autoPlaySpeed={2000}
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
              {products.list.map((product) => {
                return (
                  <MenuCard key={product.id} name={product.name} image={product.photo} />
                )
              })}
        </Carousel>
      </Wrapper>
    )
}

export default MenuSection;