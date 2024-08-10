import React from 'react';
import './PricingPage.css'; // Make sure to style the page according to your needs

const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Fridge',
      price: '$40,490',
      features: [
        'Whirlpool;',
        '193 litre',
        'Email Support',
        '24/7 Support',
      ],
      cta: 'Get Started',
    },
    {
      title: 'Washing Machine',
      price: '$35,670',
      features: [
        '8.0 kg',
        'Front Load ',
        'Priority Email Support',
        '24/7 Support',
      ],
      cta: 'Most Popular',
    },
    {
      title: 'Computer',
      price: '$29.99',
      features: [
        'HP',
        '8 GB RAM',
        'Phone & Email Support',
        '24/7 Support',
      ],
      cta: 'Premium',
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan</h1>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
