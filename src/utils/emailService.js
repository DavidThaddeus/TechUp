import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.js';

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      // Contact form fields from JoinUsPage.jsx
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'TechUp Team',
      // Additional fields for better email formatting
      reply_to: formData.email,
      user_email: formData.email,
      user_name: formData.name,
    };

    let response;
    
    // Try primary service first
    try {
      response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
    } catch (primaryError) {
      // If primary service fails and we have a fallback, try it
      if (EMAILJS_CONFIG.FALLBACK_SERVICE_ID && EMAILJS_CONFIG.FALLBACK_SERVICE_ID !== 'YOUR_FALLBACK_SERVICE_ID_HERE') {
        console.log('Primary service failed, trying fallback service...');
        response = await emailjs.send(
          EMAILJS_CONFIG.FALLBACK_SERVICE_ID,
          EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } else {
        throw primaryError;
      }
    }

    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
      data: response
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.text && error.text.includes('insufficient authentication scopes')) {
      errorMessage = 'Email service configuration error. Please contact support.';
    } else if (error.text && error.text.includes('quota')) {
      errorMessage = 'Email service quota exceeded. Please try again later.';
    } else if (error.text && error.text.includes('invalid')) {
      errorMessage = 'Invalid email configuration. Please contact support.';
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};

// Send newsletter signup email
export const sendNewsletterSignup = async (email) => {
  try {
    const templateParams = {
      // Newsletter signup field from Footer.jsx
      email: email,
      user_email: email,
      subscriber_email: email,
      to_name: 'TechUp Team',
      // Additional fields for better email formatting
      subscription_date: new Date().toLocaleDateString(),
      subscription_time: new Date().toLocaleTimeString(),
    };

    let response;
    
    // Try primary service first
    try {
      response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
    } catch (primaryError) {
      // If primary service fails and we have a fallback, try it
      if (EMAILJS_CONFIG.FALLBACK_SERVICE_ID && EMAILJS_CONFIG.FALLBACK_SERVICE_ID !== 'YOUR_FALLBACK_SERVICE_ID_HERE') {
        console.log('Primary service failed, trying fallback service...');
        response = await emailjs.send(
          EMAILJS_CONFIG.FALLBACK_SERVICE_ID,
          EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } else {
        throw primaryError;
      }
    }

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      data: response
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to subscribe. Please try again later.';
    
    if (error.text && error.text.includes('insufficient authentication scopes')) {
      errorMessage = 'Email service configuration error. Please contact support.';
    } else if (error.text && error.text.includes('quota')) {
      errorMessage = 'Email service quota exceeded. Please try again later.';
    } else if (error.text && error.text.includes('invalid')) {
      errorMessage = 'Invalid email configuration. Please contact support.';
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
}; 