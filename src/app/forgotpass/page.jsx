"use client"
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import sadimage from "../../assets/sad.webp"
import happyimage from "../../assets/happy.webp"
import Image from 'next/image'


export default function ForgotPass() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [emailFound, setEmailFound] = useState(false) // Will be set based on your API response later

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you'll implement your email matching logic later
    // For now, we'll simulate not finding the email
    setEmailFound(false)
  }

  return (
    <Container className="forgot-pass-container">
      {!submitted ? (
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <p>Enter your email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Enter Your Email</label>
              <input 
                type="email" 
                placeholder='Your Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Search
            </button>
          </form>
        </div>
      ) : emailFound ? (
        <div className="success-message">
            <Image src={happyimage} alt="Sad face" className="sad-image" height={400} width={400} />
          {/* This will show when you implement successful email match */}
          <p>Password reset link has been sent to your email!</p>
        </div>
      ) : (
        <div className="not-found-message">
          <Image src={sadimage} alt="Sad face" className="sad-image" height={400} width={400} />
          <h3>No matching email found</h3>
          <p>Please check your email correctly</p>
          <button 
            onClick={() => {
              setSubmitted(false)
              setEmail('')
            }} 
            className="try-again-btn"
          >
            Try Again
          </button>
        </div>
      )}
    </Container>
  )
}