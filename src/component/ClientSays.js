import React from "react";
import './ClientSays.css';
import Slider from "react-slick";

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const data = [
  {
    name: 'CEO',
    mname: 'M/s S G INDUSTRIES',
    review: 'Best design & development for industrial level websites and services. Nice team work and support. Thanks, Softmusk Info & Team.'
  },
  {
    name: 'TPO Jain College of Enginnering, Belagavi',
    mname: 'Shri. Nitesh Kalyanshetti',
    review: 'We had an absolutely fantastic experience collaborating with SoftMusk on our recent hackathon. They were a supportive and professional partner throughout the event. We were especially impressed by their commitment to offering valuable internship opportunities to our participants. Its clear they are a company that genuinely invests in new talent. Highly recommend!'
  },
  {
    name: 'Principal',
    mname: 'KV NO.3 BELGAUM',
    review: 'Good place for internships and academic projects.'
  },
  {
    name: 'Topovan Of Shri Kumarswamiji',
    mname: 'Dharwad',
    review: 'Nice work and totally satisfied. Softmusk provides good work. Thank you team and Softmusk company.'
  },
];

const ClientSays = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slide">
            <div className="review-container">
              <p className="review-text">"{item.review}"</p>
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="mname">{item.mname}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSays;
