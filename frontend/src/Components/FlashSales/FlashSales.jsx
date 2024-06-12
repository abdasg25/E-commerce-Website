import React, { useState, useEffect } from 'react';
import './FlashSales.css';
import { AiOutlineHeart, AiOutlineEye, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const products = [
  {
    id: 1,
    discount: '-40%',
    image: 'https://via.placeholder.com/150',
    name: 'HAVIT HV-G92 Gamepad',
    price: '$120',
    oldPrice: '$160',
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    discount: '-35%',
    image: 'https://via.placeholder.com/150',
    name: 'AK-900 Wired Keyboard',
    price: '$960',
    oldPrice: '$1160',
    rating: 4.0,
    reviews: 75,
  },
  {
    id: 3,
    discount: '-30%',
    image: 'https://via.placeholder.com/150',
    name: 'IPS LCD Gaming Monitor',
    price: '$370',
    oldPrice: '$400',
    rating: 5.0,
    reviews: 99,
  },
  {
    id: 4,
    discount: '-25%',
    image: 'https://via.placeholder.com/150',
    name: 'S-Series Comfort Chair',
    price: '$375',
    oldPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    discount: '-25%',
    image: 'https://via.placeholder.com/150',
    name: 'S-Series Comfort Chair',
    price: '$375',
    oldPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    discount: '-25%',
    image: 'https://via.placeholder.com/150',
    name: 'S-Series Comfort Chair',
    price: '$375',
    oldPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    discount: '-25%',
    image: 'https://via.placeholder.com/150',
    name: 'S-Series Comfort Chair',
    price: '$375',
    oldPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    discount: '-25%',
    image: 'https://via.placeholder.com/150',
    name: 'S-Series Comfort Chair',
    price: '$375',
    oldPrice: '$400',
    rating: 4.5,
    reviews: 99,
  },
];

const FlashSales = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const handleWishlistClick = (productId) => {
    console.log(`Added product ${productId} to wishlist`);
    // Implement your add to wishlist logic here
  };
  const handleViewDetailsClick = (productId) => {
    console.log(`Viewed details of product ${productId}`);
    // Implement your view details logic here
  };
  return (
    <div className="flash-sales">
      <div className="Header">
        <h2>Flash Sales</h2>
        <div className="timer">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="discount">{product.discount}</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              {product.price} {/*<span className="old-price">{product.oldPrice}</span>*/}
            </p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < product.rating ? 'star filled' : 'star'}>★</span>
              ))}
              <span>({product.reviews})</span>
            </div>
            <div className="actions">
              <AiOutlineHeart onClick={() => handleWishlistClick(product.id)}/>
              <AiOutlineEye />
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <AiOutlineLeft className="nav-arrow" />
        <AiOutlineRight className="nav-arrow" />
      </div>
      <button className="view-all-button">View All Products</button>
    </div>
  );
};

export default FlashSales;
