import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllianceSVG, GaguaSVG, HumanaSVG, MCdonaldsSVG, PictoryTaleSVG, SnicSnacSVG } from "../../static";
import './style.css'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} pauseOnHover dots={false}>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <AllianceSVG />
        </div>
      </div>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <GaguaSVG />
        </div>
      </div>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <HumanaSVG />
        </div>
      </div>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <MCdonaldsSVG />
        </div>
      </div>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <PictoryTaleSVG />
        </div>
      </div>
      <div>
        <div className="slider-item">
          <div className="item-hover">
            <div className="info">
              here goes partnership information and link to the case study
            </div>
          </div>
          <SnicSnacSVG />
        </div>
      </div>
    </Slider>
  );
}