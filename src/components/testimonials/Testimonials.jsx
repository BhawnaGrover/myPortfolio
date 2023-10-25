import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import pic1 from "../../assets/Portfolio1.jpg";
import pic2 from "../../assets/Portfolio2.jpg";
import pic3 from "../../assets/Portfolio3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5></h5> */}
      <h2>Testimonials</h2>
      <Carousel className="carousel">
        <div>
          <img src={pic1} alt="pic1" />
          <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure, eligendi assumenda omnis quibusdam voluptate at ut consequatur numquam tenetur, laudantium facere id inventore, itaque quidem atque accusamus velit esse.</p>
        </div>
        <div>
          <img src={pic2} alt="pic2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={pic3} alt="pic3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};
export default Testimonials;
