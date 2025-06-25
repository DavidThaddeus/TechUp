
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

// Add Font Awesome for icons
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesome);

// Add Tailwind CSS
const tailwind = document.createElement('script');
tailwind.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwind);

// Configure Tailwind
const tailwindConfig = document.createElement('script');
tailwindConfig.textContent = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          blue: {
            800: '#1E40AF',
            900: '#1E3A8A'
          },
          orange: {
            500: '#F97316',
            600: '#EA580C'
          }
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif']
        }
      }
    }
  }
`;
document.head.appendChild(tailwindConfig);

// Add rounded favicon
const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
favicon.type = 'image/jpeg';
favicon.rel = 'icon';
favicon.href = '/src/TechUp images/logo.jpg';

// Create a canvas to make the image round
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();

img.onload = function() {
  // Set canvas dimensions
  canvas.width = img.width;
  canvas.height = img.height;
  
  // Create circular clipping path
  ctx.beginPath();
  ctx.arc(img.width/2, img.height/2, img.width/2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  
  // Draw the image
  ctx.drawImage(img, 0, 0);
  
  // Update favicon with rounded image
  favicon.href = canvas.toDataURL();
  document.head.appendChild(favicon);
};

img.src = '/src/TechUp images/logo.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

