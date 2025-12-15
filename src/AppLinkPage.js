import React from 'react';

import './Applink.css';
const AppLinkPage = () => {
  return (
    <div className="app-link-page">
      <img src="Wardiere_Inc.__9_-removebg-preview.png" alt="Your App Logo" className="app-logo" />
      <p>Download our app from the Play Store:</p>
      <div className="app-store-buttons">
        <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
          <img src="Google-Play-Logo.png" alt="Download on the App Store" />
        </a>
        {/* Add a similar block for the Play Store if needed */}
      </div>
      
    </div>
  );
};

export default AppLinkPage;
