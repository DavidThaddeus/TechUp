export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: 'OtsfVmYLBK10zhK7C',
  

  SERVICE_ID: 'service_jk4n9pza', // Primary service
  FALLBACK_SERVICE_ID: 'YOUR_FALLBACK_SERVICE_ID_HERE', // Backup service
  
  // Template IDs
  CONTACT_TEMPLATE_ID: 'template_9q5dbyar',
  NEWSLETTER_TEMPLATE_ID: 'template_hztg182',
};


// EmailJS initialization
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    import('@emailjs/browser').then((emailjs) => {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    });
  }
}; 