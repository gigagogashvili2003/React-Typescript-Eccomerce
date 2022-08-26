import Slider from "react-slick";

import AlesisImage from "../../assets/images/alesisvi49.png";
import HeadsetImage from "../../assets/images/headset.png";
import {
  MainCarouselWrapper,
  MainCraouselContainer,
} from "./MainCarousel.Styled";

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const imgData = [
    {
      img: AlesisImage,
      size: 1000,
    },
    {
      img: HeadsetImage,
      size: 500,
    },
  ];

  return (
    <MainCarouselWrapper>
      <MainCraouselContainer>
        <Slider {...settings}>
          {imgData.map((item, i) => (
            <div key={i}>
              <img src={item.img} width={item.size} alt="Carousel Icon" />
            </div>
          ))}
        </Slider>
      </MainCraouselContainer>
    </MainCarouselWrapper>
  );
};

export default MainCarousel;
