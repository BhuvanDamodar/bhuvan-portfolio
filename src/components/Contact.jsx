import React, { useState } from 'react';
import './styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

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
