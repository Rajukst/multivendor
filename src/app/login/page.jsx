"use client"
import { useState } from 'react';
import logo from '../../assets/logo.png'; // Replace with your image path
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert(`Login successful! ${formData.rememberMe ? '(Remembered)' : ''}`);
        // Redirect or handle successful login here
      } catch (error) {
        alert('Login failed: ' + error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {/* Logo instead of h1 */}
        <div className="logo-container">
          <Image src={logo} alt="Company Logo" className="login-logo" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder='Your Email'
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
            placeholder='Your Password'
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="login-options">
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Link href="/forgotpass" 
            type="button" 
            className="forgot-password"
          >
            Forgot password?
          </Link>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="login-button"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <div className="newUser mt-2">
        <article>New User? Register <Link href="/register">Here</Link></article>
      </div>
      </form>
      
    </div>
  );
};

export default Login;