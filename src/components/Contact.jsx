import React, { useState } from 'react';
import './styles/Contact.css'
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

  // State to store error messages
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      formErrors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.message) {
      formErrors.message = 'Message is required';
    }

    return formErrors;
  };

  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      // If there are validation errors, update state and don't submit
      setErrors(formErrors);
    } else {
      // If form is valid, clear errors and proceed (submit logic goes here)
      setErrors({});
      console.log('Form submitted:', formData);
      // You can proceed with form submission (e.g., sending data to a server)
    }

    // Send email using EmailJS, the email will be sent to your email address as per the template
    emailjs.send(
      serviceID,     // Your EmailJS service ID
      templateID,    // Your EmailJS template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,  // The user's email, sent as a variable but not as the recipient
        mobile: formData.mobile,
        message: formData.message
      },
      userID       
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      // Optionally clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });
      window.location.reload();
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
    });
  };

  return (
    <section id="contact">
      <h2 className='h2'>Let’s Work Together!</h2>
      <form onSubmit={handleSubmit}>

      <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error-input' : ''}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      
      <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error-input' : ''}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}


          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className={errors.mobile ? 'error-input' : ''}
          />
          {errors.mobile && <p className="error-message">{errors.mobile}</p>}


        <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error-input' : ''}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
