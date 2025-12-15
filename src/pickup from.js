
import React, { useState } from 'react';
import './PickupForm.css';

function PickupRequestForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setdate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handledateChange = (e) => {
    setdate(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const generateUniqueId = () => {
    return Date.now().toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const formData = {
      id: generateUniqueId(),
      name,
      phoneNumber,
      date,
      address,
      photo: photo
        ? {
            name: photo.name,
            type: photo.type,
            size: photo.size,
          }
        : null,
      selectedItems: JSON.parse(localStorage.getItem('selectedItems')) || [],
    };

    
    const existingData = JSON.parse(localStorage.getItem('pickformData'));

   
    const updatedData = Array.isArray(existingData) ? [...existingData, formData] : [formData];

  
    localStorage.setItem('pickformData', JSON.stringify(updatedData));

  
    if (photo) {
      console.log('Photo Name:', photo.name);
      console.log('Photo Type:', photo.type);
      console.log('Photo Size:', photo.size, 'bytes');
    } else {
      console.log('No photo selected.');
    }

 
    setSubmitted(true);
  };

  return (
    <>
    <div className='pick1'>
      <br />
      <br />
      <br />
      <br />
          <br /><br />
          <br /><br />
          {/* <br /><br />
          <br /> */}
      <div className="pickup-container">
        <h1 className="pickup-title">Pickup Request Form</h1>
        {submitted ? (
          <div className="thank-you-message">
            Thank you for your request!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="pickup-input" value={name} onChange={handleNameChange} required />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" className="pickup-input" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" className="pickup-input" value={date} onChange={handledateChange} required />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <textarea id="address" className="pickup-input" value={address} onChange={handleAddressChange} required />
            </div>
            <div>
              <label htmlFor="photo">Scrap Photo (optional):</label>
              <input type="file" id="photo" className="pickup-file" accept="image/*" onChange={handlePhotoChange}  />
            </div>
            <button type="submit" className="pickup-button">Submit</button>
          </form>
        )}
      </div>
      <br />
      <br />
      <br />
      </div>
    </>
  );
}

export default PickupRequestForm;
