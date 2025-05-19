"use client"
import React, { useState } from 'react';
import image1 from "../../../assets/product1.png";
import image2 from "../../../assets/product2.png";
import image3 from "../../../assets/product3.png";
import image4 from "../../../assets/product4.png";
import Image from 'next/image';

export default function ProductView() {
  const [mainImage, setMainImage] = useState(image1);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState('details');
const [reviewRating, setReviewRating] = useState(0);
  // console.log("getting image", image1)
  // Sample product data with your local images
  const product = {
    name: "Premium Wireless Headphones",
    price: 249.99,
    discountPrice: 199.99,
    description: "Experience crystal-clear sound with our premium wireless headphones.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone"
    ],
    colors: ['Black', 'Silver', 'Blue', 'Red'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [image1, image2, image3, image4],
    thumbnails: [image1, image2, image3, image4] // Using same images for thumbnails
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        {/* Image Gallery - 1.5fr */}
        <div className="gallery-section">
          <div className="main-image-container">
            <Image 
              src={mainImage} 
              alt={product.name}
              width={800}  // Add appropriate width
              height={600} // Add appropriate height
              className="main-image"
            />
            {product.discountPrice && (
              <span className="discount-badge">
                Save ${(product.price - product.discountPrice).toFixed(2)}
              </span>
            )}
          </div>
          <div className="thumbnail-container">
            {product.thumbnails.map((thumb, index) => (
              <div 
                key={index}
                className={`thumbnail ${mainImage === product.images[index] ? 'active' : ''}`}
                onClick={() => setMainImage(product.images[index])}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details - 2.5fr */}
        <div className="details-section">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="rating-container">
              <div className="stars">
                {'★'.repeat(5)}
                <span className="empty-stars">{'★'.repeat(5 - Math.floor(product.rating))}</span>
              </div>
              <span className="review-count">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="price-container">
            {product.discountPrice ? (
              <>
                <span className="current-price">${product.discountPrice.toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="color-selector">
            <h5>Color: <span>{selectedColor}</span></h5>
            <div className="color-options">
              {product.colors.map(color => (
                <div 
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h5>Quantity:</h5>
            <div className="quantity-control">
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          {/* Add this tabbed interface */}
<div className="product-tabs">
  <div className="tabs-header">
    <button 
      className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
      onClick={() => setActiveTab('details')}
    >
      Detail Information
    </button>
    <button 
      className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
      onClick={() => setActiveTab('reviews')}
    >
      Write Review
    </button>
  </div>
  
  <div className="tabs-content">
    {activeTab === 'details' && (
      <div className="details-content">
        <h4>Product Specifications</h4>
        <ul>
          <li><strong>Material:</strong> Premium plastic and metal</li>
          <li><strong>Weight:</strong> 250g</li>
          <li><strong>Battery Life:</strong> Up to 30 hours</li>
          <li><strong>Connectivity:</strong> Bluetooth 5.0</li>
          <li><strong>Warranty:</strong> 2 years</li>
        </ul>
      </div>
    )}
    
    {activeTab === 'reviews' && (
      <div className="reviews-content">
        <h4>Share Your Experience</h4>
        <div className="review-form">
          <textarea 
            placeholder="Write your review here..." 
            rows={5}
            className="review-textarea"
          />
          <div className="rating-input">
            <span>Rating: </span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={`star ${reviewRating >= star ? 'filled' : ''}`}
                onClick={() => setReviewRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="submit-review-btn">Submit Review</button>
        </div>
      </div>
    )}
  </div>
</div>
        </div>
      </div>
    </div>
  );
}