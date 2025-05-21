import React from 'react'
import { Container } from 'react-bootstrap'

export default function Checkout() {
  return (
    <>
    <Container>
    <div className="leftCheckoutOpt">
        <div className="userInfo">
        <h4>Billing Info:</h4>
        <div className="billingInfo">
            <div className="name">
                <article>Name:</article>
                <input type="text" name="" id="" placeholder='Name'/>
            </div>
        </div>
        </div>
        <div className="checkoutCartInfo">
            <h3>Cart Info</h3>
        </div>
    </div>
    </Container>
    
    </>
  )
}
