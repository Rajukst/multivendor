"use client"
import React from 'react';


const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/80',
      name: 'Burger King Japan debuts Monster Baby, Double, Canada',
      model: 'Product 19',
      quantity: 14,
      unitPrice: 60.00,
      total: 60.00
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/80',
      name: 'Burger King Japan debuts Monster Baby, Double, Canada',
      model: 'Product 19',
      quantity: 1,
      unitPrice: 60.00,
      total: 60.00
    },
    // Add more items as needed
  ];

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      
      <div className="cart-table">
        <div className="cart-header">
          <div className="header-item image-header">Image</div>
          <div className="header-item name-header">Product Name</div>
          <div className="header-item model-header">Model</div>
          <div className="header-item quantity-header">Quantity</div>
          <div className="header-item price-header">Unit Price</div>
          <div className="header-item total-header">Total</div>
        </div>
        
        {cartItems.map(item => (
          <div className="cart-row" key={item.id}>
            <div className="cart-cell image-cell">
              <img src={item.image} alt={item.id} className="product-image" />
            </div>
            <div className="cart-cell name-cell">{item.name}</div>
            <div className="cart-cell model-cell">{item.model}</div>
          <div className="cart-cell quantity-cell">
  <div className="quantity-control">
    <button className="quantity-btn" onClick={() => handleDecrease(item.id)}>-</button>
    <input 
      type="number" 
      min="1" 
      value={item.quantity} 
      className="quantity-input"
      readOnly
    />
    <button className="quantity-btn" onClick={() => handleIncrease(item.id)}>+</button>
  </div>
</div>
            <div className="cart-cell price-cell">${item.unitPrice.toFixed(2)}</div>
            <div className="cart-cell total-cell">${item.total.toFixed(2)}</div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-row">
          <span>Sub-Total:</span>
          <span>$60.00</span>
        </div>
        <div className="summary-row">
          <span>Total:</span>
          <span className="total-amount">$60.00</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;