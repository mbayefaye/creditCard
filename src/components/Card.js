import React from 'react';
import RenderCardNumber from './RenderCardNumber'
import CardDate from './CardDate';
const Card = (props) => {
    return (
    <div className="credit-card">
    <h1 className="credit-card-title">{props.companyName} <i className="fab fa-cc-apple-pay"></i></h1>
    <div className="credit-card-chip" />
    <div className="credit-card-content">
      <div className="credit-card-text">
          <h2 className="credit-card-number">
            {RenderCardNumber(props.cardNumber)}
          </h2>
          <h2 className="credit-card-valid-thru">
            {CardDate(props.validThru)}
          </h2>
          <h2 className="credit-card-holder-name">
            {props.cardHolder}
          </h2>
      </div>
      <div className="credit-card-logo">
        <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" alt="mastercard"/>
      </div>
    </div>
  </div>
        
    );
};

export default Card;
