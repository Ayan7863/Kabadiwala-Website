
import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
    mobile:'',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Retrieve existing data from local storage
      const storedData = JSON.parse(localStorage.getItem('contact_us_data')) || [];

      // Generate a unique ID for this form submission
      const uniqueId = Date.now();

      // Create a new form entry with the unique ID and form data
      const newFormEntry = {
        id: uniqueId,
        ...formData,
      };

      // Push the new form entry to the existing data array
      storedData.push(newFormEntry);

      // Store the updated data in local storage
      localStorage.setItem('contact_us_data', JSON.stringify(storedData));

      setIsSubmitted(true);

      // Reset the form data
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error handling form submission:', error);
      // Handle any errors that occur during form submission
    }
  };

  return (
    <>
    <div className='contact'>
    <br/>
    <br/>
    <br />
          <br />
          <br />
          <br />
          {/* <br />
          <br />
          <br /> */}
          <br />
          
    <div className="contact-us">
      
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <div className="success-message">
          Thank you for contacting us! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    
    <br/>
    <br/>
    </div>
    </>
  );
}

export default ContactUs;
