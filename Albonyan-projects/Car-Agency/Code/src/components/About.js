import React from "react";
import './About.css'
import about from '../components/img/about.png'

const About = () => {
  return (
    <div id="about">
      <div className="container grid-2 about-s">
        <div className="about-text">
          <h1 className="blur">ABOUT US</h1>
          <h2 className="about-title">About </h2>
          <p className="about-description">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety. 
            <br/><br/>
            At
            YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </div>
        <div className="about-img">
          
          <img src={about} />
        </div>
      </div>
    </div>
  );
};

export default About;
