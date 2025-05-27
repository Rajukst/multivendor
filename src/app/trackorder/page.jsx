"use client"
import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Status configurations
  const statusConfig = {
    pending: {
      lottieUrl: 'https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json',
      message: 'Your order is pending confirmation',
      className: 'text-warning'
    },
    processing: {
      lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_6wutsrox.json',
      message: 'We are preparing your order',
      className: 'text-info'
    },
    shipped: {
      lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_kdxax9h1.json',
      message: 'Your order is on the way!',
      className: 'text-primary'
    },
    delivered: {
      lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_6pglvbir.json',
      message: 'Your order has been delivered!',
      className: 'text-success'
    }
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would get this from your API response
      // For demo, we'll randomly select a status
      const statuses = ['pending', 'processing', 'shipped', 'delivered'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      setOrderStatus(randomStatus);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Track Your Order</h2>
              
              <form onSubmit={handleTrackOrder} className="mb-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                  <button 
                    className="btn btn-primary" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'Track'
                    )}
                  </button>
                </div>
              </form>

              {isLoading && (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2">Checking order status...</p>
                </div>
              )}

              {orderStatus && !isLoading && (
                <div className="text-center py-3">
                  <Player
                    autoplay
                    loop={orderStatus !== 'delivered'}
                    src={statusConfig[orderStatus].lottieUrl}
                    style={{ height: '250px', width: '250px' }}
                  />
                  <h4 className={`mt-3 ${statusConfig[orderStatus].className}`}>
                    {statusConfig[orderStatus].message}
                  </h4>
                  <p className="text-muted mt-2">Order ID: {orderId}</p>
                  
                  <button 
                    className="btn btn-outline-secondary mt-3"
                    onClick={() => {
                      setOrderStatus(null);
                      setOrderId('');
                    }}
                  >
                    Track Another Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}