import React from 'react';
import './wishlist.css'; // Import the CSS file

const WishlistItem = ({ product, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="wishlist-item">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          ${product.price}
        </div>
        <div className="buttons">
          <button onClick={() => onRemoveFromWishlist(product.id)}>
            Remove from Wishlist
          </button>
          <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const Wishlist = ({ wishlistItems, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist ({wishlistItems.length})</h2>
      <div className="wishlist-items">
        {wishlistItems.map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
            onRemoveFromWishlist={onRemoveFromWishlist}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <button onClick={() => onAddToCart('all')}>Move All to Bag</button>
    </div>
  );
};

export default Wishlist;
