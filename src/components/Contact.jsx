import React, { useState } from 'react';
import './styles/Contact.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    // if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    // if (!formData.mobile) formErrors.mobile = 'Mobile number is required';
    // else if (!/^\d{10}$/.test(formData.mobile)) formErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      emailjs.send(
        serviceID,
        templateID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message
        },
        userID
      ).then(() => {
        setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
        window.location.reload();
      }).catch(err => console.error('Failed to send email:', err));
    }
  };

  return (
    <div id="contact" className="contact-container">
    <section  className="contact-section">
      <h2 className="contact-title">Let’s Work Together!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error-input' : ''}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error-input' : ''}
          />
        </div>
        <input
          type="text"
          name="mobile"
          placeholder="Phone Number"
          value={formData.mobile}
          onChange={handleChange}
          className={errors.mobile ? 'error-input' : ''}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail Address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error-input' : ''}
        />
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </section>
    </div>
  );
};

export default Contact;
