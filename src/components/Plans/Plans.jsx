import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="strock-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="strock-text">now withus</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((Plan, i) => (
          <div className="plan" key={i}>
            {Plan.icon}
            <span>{Plan.name}</span>
            <span>${Plan.price}</span>
            <div className="features">
              {Plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -{'>'}</span>
            </div>
            <button className="btn"> Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
