import React from "react";
import "./Gallary.css";

const Gallary = () => {
  return (
    <div id="gallary">
      <div className="gallary-section  ">
        <div className="text-gallary">
          <h3 className="tesla">Tesla Model 3</h3>
          <p className="gallary-info">
            Disruptive, avant-garde, futuristic, innovative.
          </p>
          <button className="btn-gallary">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
