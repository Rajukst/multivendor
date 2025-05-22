"use client"
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function Checkout() {
  const [cartItems, setCartItems] = useState([
  { name: "Santos Fc Third Kit 2012/13", quantity: 1, price: 1250 },
  { name: "Santos Fc Third Kit 2012/13", quantity: 1, price: 1250 }
]);
const deliveryFee = 70;
const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const total = subtotal + deliveryFee;
  return (
    <>
    <Container>
    <div className="leftCheckoutOpt mt-3">
        <div className="userInfo">
        <h4>Billing Info:</h4>
        <div className="billingInfo">
            <div className="name">
                <article>Name:</article>
                <input type="text" name="" id="" placeholder='Name'/>
            </div>
            <div className="email">
              <article>Email*</article>
              <input type="email" name="" id="" placeholder='Email'/>
            </div>
        </div>
        <div className="billingInfo mt-3">
            <div className="name">
                <article>Phone Number:</article>
                <input type="text" name="" id="" placeholder='Name'/>
            </div>
            <div className="email">
              <article>Alt. Phone Number*</article>
              <input type="email" name="" id="" placeholder='Email'/>
            </div>
        </div>
          <div className="shippingDetails">
          <h4 className='mt-3'>Shipping Details:</h4>
          <div className="fulladdress">
            <article>Full Address:</article>
            <input type="text" name="" id="" placeholder='Full Address' />
          </div>
           <div className="billingInfo mt-3">
            <div className="name">
                <article>State*</article>
                 <select className="filterselectss" name="cars" id="cars">
                    <option value="volvo">Dhaka</option>
                    <option value="saab">Khulna</option>
                    <option value="mercedes">Rajshahi</option>
                    <option value="mercedes">Chittagong</option>
                    <option value="audi">Barishal</option>
                    <option value="audi">Sylhet</option>
                    <option value="mercedes">Mymansing</option>
                    <option value="audi">Rangpur</option>
                  </select>
            </div>
            <div className="email">
              <article>City*</article>
                <select className="filterselecss" name="cars" id="cars">
                    <option value="volvo">Name (A-Z)</option>
                    <option value="saab">Name (Z-A)</option>
                    <option value="mercedes">Price (High to Low)</option>
                    <option value="audi">Price (Low to High)</option>
                    <option value="mercedes">Ratings (Highest)</option>
                    <option value="audi">Ratings (Lowest)</option>
                  </select>
            </div>
        </div>
        </div>
        <div className="placeorder">
          <button>Place Order</button>
        </div>
        </div>
       <div className="checkoutCartInfo">
  <h3>Cart Info</h3>
  <div className="cartTotal">
    <div className="cartheadings">
      <h4>Products</h4>
    </div>
    
   <div className="cartItems">
  {cartItems.map((item, index) => (
    <div className="cartItem" key={index}>
      <span>{item.name} × {item.quantity}</span>
      <span>Tk {item.price * item.quantity}</span>
    </div>
  ))}
</div>
    
    <div className="divider"></div>
    
<div className="cartSummary">
  <div className="summaryRow">
    <span>Subtotal</span>
    <span>Tk {subtotal}</span>
  </div>
  <div className="summaryRow">
    <span>Delivery Fee</span>
    <span>Tk {deliveryFee}</span>
  </div>
  <div className="summaryRow total">
    <span>Total:</span>
    <span>Tk {total}</span>
  </div>
</div>
  </div>
</div>
    </div>
    </Container>
    
    </>
  )
}
