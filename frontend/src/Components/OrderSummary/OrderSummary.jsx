// OrderSummary.jsx
import React, { useState } from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
  const [cardType, setCardType] = useState('Visa');
  const [cardImage, setCardImage] = useState('https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCardChange = (newCard) => {
    if (newCard === 'Master Card') {
      setCardImage('https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png');
    } else if (newCard === 'American Express') {
      setCardImage('https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png');
    } else if (newCard === 'Visa') {
      setCardImage('https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png');
    }
    setCardType(newCard);
    setDropdownVisible(false);
  };

  return (
    <div className='container'>
      <div className='window'>
        <div className='order-info'>
          <div className='order-info-content'>
            <h2>Order Summary</h2>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td><img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG' className='full-width' alt='Nike Shoes' /></td>
                  <td>
                    <br /> <span className='thin'>Nike</span>
                    <br /> Free Run 3.0 Women<br /> <span className='thin small'> Color: Grey/Orange, Size: 10.5<br /><br /></span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>$99.95</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td><img src='https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg' className='full-width' alt='Backpack' /></td>
                  <td>
                    <br /> <span className='thin'>Fjällräven</span>
                    <br />Vintage Backpack<br /> <span className='thin small'> Color: Olive, Size: 20L</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>$235.95</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg' className='full-width' alt='Lunchbox' /></td>
                  <td>
                    <br /> <span className='thin'>Monobento</span>
                    <br />Double Lunchbox<br /> <span className='thin small'> Color: Pink, Size: Medium</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>$25.95</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <div className='total'>
              <span style={{ float: 'left' }}>
                <div className='thin dense'>VAT 19%</div>
                <div className='thin dense'>Delivery</div>
                TOTAL
              </span>
              <span style={{ float: 'right', textAlign: 'right' }}>
                <div className='thin dense'>$68.75</div>
                <div className='thin dense'>$4.95</div>
                $435.55
              </span>
            </div>
          </div>
        </div>
        <div className='credit-info'>
          <div className='credit-info-content'>
            <table className='half-input-table'>
              <tbody>
                <tr>
                  <td>Please select your card: </td>
                  <td>
                    <div className='dropdown' id='card-dropdown'>
                      <div className='dropdown-btn' onClick={() => setDropdownVisible(dropdownVisible)}>{cardType}</div>
                      {dropdownVisible && (
                        <div className='dropdown-select'>
                          <ul>
                            <li onClick={() => handleCardChange('Master Card')}>Master Card</li>
                            <li onClick={() => handleCardChange('American Express')}>American Express</li>
                            <li onClick={() => handleCardChange('Visa')}>Visa</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <img src={cardImage} height='80' className='credit-card-image' alt='Credit Card' />
            Card Number
            <input className='input-field' />
            Card Holder
            <input className='input-field' />
            <table className='half-input-table'>
              <tbody>
                <tr>
                  <td>Expires
                    <input className='input-field' />
                  </td>
                  <td>CVC
                    <input className='input-field' />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className='pay-btn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
