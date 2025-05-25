import React from 'react'
import { Container } from 'react-bootstrap'

export default function EditAccount() {
  return (
    <>
    <Container>
      <h3>Edit Account</h3>
      <div className="editaccContainer">
        <article>Name:</article>
        <input type="text" placeholder='Your Name' />
        <article>Email:</article>
        <input type="email" placeholder='Your Email' />
        <article>Phone Number:</article>
        <input type="text" placeholder='Your Phone Number' />
        <article>Shipping Address:</article>
        <input type="text" placeholder='Your Shipping Address' />
        <br /> <br />
        <button>Update Profile</button>
      </div>
    </Container>
    </>
  )
}
