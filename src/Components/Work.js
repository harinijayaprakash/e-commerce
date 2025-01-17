import React from "react";

import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Choose Your Tech",
      text: "Select the perfect device to match your lifestyle and preferences",
    },
    {
      image: ChooseMeals,
      title: "Delivery Schedule",
      text: "Pick your update cycle to ensure you always have the latest and greatest ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Speedy delivery to match your busy lifestyle and growing tech needs",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Find out how our user-friendly system makes tech shopping a breeze
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
