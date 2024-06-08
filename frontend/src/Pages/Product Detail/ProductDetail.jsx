import React, { useState } from 'react';
import './ProductDetail.css';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
const productData = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg"
  ],
  price: 200,
  description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  reviews: 150,
  rating: 6,
  stockStatus: "In Stock",
  colours: ["Black", "White"],
  quantity: 1
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(productData.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
    <Header />
    <NavBar/>
    <div className="product-detail">
      <div className="images">
        {productData.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
      <div className="main-image">
        <img src={productData.images[0]} alt="Main Product" />
      </div>
      <div className="product-info">
        <h1 className='product-name'>{productData.name}</h1>
        <div className="reviews">
          <span className="stars">{'★'.repeat(Math.round(productData.rating))}</span>
          <span>({productData.reviews} Reviews)</span>
          <span className="stock-status">{productData.stockStatus}</span>
        </div>
        <h2>${productData.price.toFixed(2)}</h2>
        <p>{productData.description}</p>
        <div className="options">
          <div className="colours">
            <span>Colours:</span>
            {productData.colours.map((colour, index) => (
              <button key={index} className="colour-button">{colour}</button>
            ))}
          </div>
          <div className="quantity">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <div className="actions">
          <button className="buy-button">Buy Now</button>
          <button className="wishlist-button">❤</button>
        </div>
        <div className="delivery-info">
          <p>Free Delivery</p>
          <span>Enter your postal code for Delivery Availability</span>
        </div>
        <div className="return-info">
          <p>Return Delivery</p>
          <span>Free 30 Days Delivery Returns. Details</span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetail;
