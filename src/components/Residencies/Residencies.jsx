import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  const swiperRef = useRef(null);

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Heading */}
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Navigation Buttons */}
        <div className="r-buttons">
          <button onClick={() => swiperRef.current?.slidePrev()}>&lt;</button>
          <button onClick={() => swiperRef.current?.slideNext()}>&gt;</button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          {...sliderSettings}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={card.image} alt={card.name} />

                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
