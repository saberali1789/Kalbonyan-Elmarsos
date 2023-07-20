import HeroSectio from "./components/HeroSectio";
import About from "./components/About";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Gallary from "./components/Gallary";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import DataCars from "./API/DataCars";
import testimonials from "./API/TestData";

function App() {
  return (
    <div className="App">
      <HeroSectio />
      <About />
      <Services />
      <Cars carsData={DataCars}/>
      <Gallary />
      <Testimonial testimonials={testimonials}/>
      <Logos/>
      <Footer/>


    </div>
  );
}

export default App;
