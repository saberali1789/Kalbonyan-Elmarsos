import { useEffect, useState, useRef } from "react";
import "./Cars.css";
import { motion } from "framer-motion";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";

const dataFromLocStorage = JSON.parse(localStorage.getItem("list")) || [];

const Cars = ({ carsData }) => {
  const cardRef = useRef();
  const [list, setList] = useState(dataFromLocStorage);
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [countate, setCountate] = useState(Array(carsData.length).fill(0));
  const [isAppear, setIsAppear] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    setWidth(cardRef.current.scrollWidth - cardRef.current.offsetWidth);
  }, []);

  const addToCart = (car, index) => {
    setList((prevList) => [...prevList, car]);
    setCount((prevCount) => prevCount + 1);
    setCountate((prevCountate) => {
      const updatedCountate = [...prevCountate];
      updatedCountate[index] += 1;
      return updatedCountate;
    });
  };

  const removeFromCart = (item, index) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setCountate((prevCountate) => {
        const updatedCountate = [...prevCountate];
        updatedCountate[index] -= 1;
        return updatedCountate;
      });
      if (countate[index] === 0) {
        setList((prevList) => prevList.filter((_, i) => i !== index));
      }
    }
  };

  const removeCurrent = (item, index) => {
    setCount((prevCount) => prevCount - countate[index]);
    setCountate((prevCountate) => {
      const updatedCountate = [...prevCountate];
      updatedCountate[index] = 0;
      return updatedCountate;
    });
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const delAllHandler = () => {
    setList([]);
    setCount(0);
    setCountate(Array(carsData.length).fill(0));
  };

  const toggleCartHandler = () => {
    setIsAppear(!isAppear);
  };

  return (
    <div id="cars">
      <Navbar toggle={toggleCartHandler} list={list.length} />
      <section className="cars-section">
        <div className="cars-titles">
          <h1 className="blur car-blur">CARS</h1>
          <h2 className="cars-title">Cars</h2>
        </div>

    <motion.div ref={cardRef} className="over-car container">
          <motion.div
            className="cards-box "
            drag="x"
            dragConstraints={{ right: 100, left: -width }}
          >
            {carsData.map((car, index) => {
              return (
                <motion.div className="cars-card">
                  <div className="img-box">
                    <img src={car.image} alt=""></img>
                  </div>
                  <h3 className="secondary">{car.name}</h3>
                  <p className="car-kind"> {car.class}</p>
                  <p className="car-info">{car.description}</p>
                  <div className="card-footer">
                    <div className="seats">
                      <p>{car.seats} Seats</p>
                      <p>{car.luggags} Luggage</p>
                    </div>
                    <div className="btns">
                      <button
                        className="decrease tow-btns"
                        onClick={() => removeFromCart(car, index)}
                      >
                        -
                      </button>
                      <p className="">{countate[index]}</p>
                      <button
                        className="increase tow-btns"
                        onClick={() => addToCart(car, index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {isAppear && (
          <div className="cart">
            <div className="all-cars">
              {list.map((item, index) => (
                <div className="item-cart" key={index}>
                  <div className="text-cart">
                    <h3 className="secondary cart-title">{item.name}</h3>
                    <p className="car-kind cart-class">{item.class}</p>
                    <div className="btns-cart">
                      <button
                        className="decrease-cart tow-btns-cart"
                        onClick={() => removeFromCart(item, index)}
                      >
                        -
                      </button>
                      <p>{countate[index] + 1}</p>
                      <button
                        className="increase-cart tow-btns-cart"
                        onClick={() => addToCart(item, index)}
                      >
                        +
                      </button>
                      <FontAwesomeIcon
                        onClick={() => removeCurrent(item, index)}
                        className="trash"
                        icon={faTrashAlt}
                      />
                    </div>
                  </div>
                  <div className="img-cart">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="delete-div">
              <button onClick={delAllHandler} className="del-btn">
                Delete All{" "}
                <FontAwesomeIcon className="trash" icon={faTrashAlt} />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cars;
