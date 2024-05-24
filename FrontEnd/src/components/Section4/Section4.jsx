import React from "react";
import "./Section4.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Section4 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <section className="section4">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img width={"200px"} src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" alt="" />
            <h3 style={{fontSize:"24px",fontWeight:"500"}}>Marc Jacobs Bag</h3>
            <p style={{fontSize:"16px",color:"gray"}}>Summer Collection</p>
            <span style={{fontSize:"24px",fontWeight:"400"}}>$9.50</span>
          </div>
          <div>
          <img width={"200px"} src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" alt="" />
            <h3 style={{fontSize:"24px",fontWeight:"500"}}>The Belt</h3>
            <p style={{fontSize:"16px",color:"gray"}}>Summer Collection</p>
            <span style={{fontSize:"24px",fontWeight:"400"}}>$9.50</span>
          </div>
          <div>
          <img width={"200px"} src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
            <h3 style={{fontSize:"24px",fontWeight:"500"}}>The Shoe</h3>
            <p style={{fontSize:"16px",color:"gray"}}>Summer Collection</p>
            <span style={{fontSize:"24px",fontWeight:"400"}}>$9.50</span>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Section4;
