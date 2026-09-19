import React, { useState, useEffect } from 'react';
import './styles/Contact.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botField: '',
  });

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lightweight honeypot spam protection
    if (formData.botField) {
      setIsModalVisible(true);
      return;
    }

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          firstName: formData.name, // backward compatibility with older EmailJS template keys
          email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(() => {
        setFormData({ name: '', email: '', message: '', botField: '' });
        setIsModalVisible(true);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalVisible]);

  return (
    <div id="contact" className="contact-container">
      <section className="contact-section glass-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          For full-time opportunities, collaborations or general inquiries, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Honeypot field for bot spam prevention */}
          <div className="honeypot-field" aria-hidden="true">
            <label htmlFor="contact-botfield">Leave this empty</label>
            <input
              id="contact-botfield"
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-name" className="field-label">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error-input' : ''}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email" className="field-label">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error-input' : ''}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-message" className="field-label">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error-input' : ''}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="send-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {isModalVisible && (
        <div className="contact-modal-overlay">
          <div className="contact-modal-content glass-card">
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
            <button onClick={() => setIsModalVisible(false)} className="contact-close-modal">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
