import React from 'react'
import { Container } from 'react-bootstrap'

export default function ChangePassword() {
  return (
    <Container>
      <h3>Change Password</h3>
      <div className="editaccContainer">
        <article>Password:</article>
        <input type="password" placeholder='Your Password' />
        <article>Confirm Password:</article>
        <input type="password" placeholder='Confirm Password' />
        <br /> <br />
        <button>Update Password</button>
      </div>
    </Container>
  )
}
