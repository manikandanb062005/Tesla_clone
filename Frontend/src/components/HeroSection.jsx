import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/Model-X.jpg'
import banner2 from '../assets/Model-Y.jpg'
import banner3 from '../assets/Model-S.jpg'
import banner4 from '../assets/Model-3.jpg'
import banner5 from '../assets/Cybertruck.jpg'

function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // enable arrows
  };

  return (
    <div className="hero-banner-wrapper">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="banner-img" />
          <div className="banner-content">
            <h1>Model X</h1>
            <p>2.99% APR Available</p>
            <div className="banner-buttons">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">View Inventory</button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="banner-img" />
          <div className="banner-content">
            <h1>Model Y</h1>
            <p>Lease Starting at $399/mo</p>
            <div className="banner-buttons">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">View Inventory</button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner3} alt="Banner 1" className="banner-img" />
          <div className="banner-content">
            <h1>Model S</h1>
            <p>2.99% APR Available</p>
            <div className="banner-buttons">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">View Inventory</button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner4} alt="Banner 1" className="banner-img" />
          <div className="banner-content">
            <h1>Model 3</h1>
            <p>2.99% APR Available</p>
            <div className="banner-buttons">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">View Inventory</button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner5} alt="Banner 1" className="banner-img" />
          <div className="banner-content">
            <h1>Cybertruck</h1>
            <p>2.99% APR Available</p>
            <div className="banner-buttons">
              <button className="btn-primary">Order Now</button>
              <button className="btn-secondary">View Inventory</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroBanner;
