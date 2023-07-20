import React from 'react';
import './Testimonial.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import car4 from '../components/img/car4.png'

const Testimonial = ({ testimonials }) => {

  return (
        <main className="test-section ">
      <div className="test-titles">
        <h1 className="blur test-blur">TESTIMONIALS</h1>
        <h2 className="test-title">Testimonial</h2>
      </div>
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showStatus={false}
      dynamicHeight={false}
    >
      {testimonials.map((testimonial, index) => (
        <>
        <div key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.description}</p>
          <div className="test-box">
            <p className="test-text">{testimonial.description}</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="reviewer-box">
              <p className="reviewer-name">{testimonial.name}</p>
            </div>
            
           
          </div> 
          
        </div>
        </>
      ))}
    </Carousel>
<img className="car-test" src={car4} alt="--" />
    </main>
   
  );
};
  


export default Testimonial;
