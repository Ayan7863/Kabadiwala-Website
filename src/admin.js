
import React, { useState, useEffect } from 'react';
import './admin.css';
import * as XLSX from 'xlsx';

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [pickupData, setPickupData] = useState([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const secretKey = '4582'; // Replace with your actual secret key

  // Retrieve user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('useryoutube')) || [];
    setUserData(storedUserData);
  }, []);

  // Retrieve contact form data from localStorage on component mount
  useEffect(() => {
    const storedContactData = JSON.parse(localStorage.getItem('contact_us_data')) || [];
    setContactData(storedContactData);
  }, []);

  // Retrieve pickup form data from localStorage on component mount
  useEffect(() => {
    const storedPickupData = JSON.parse(localStorage.getItem('pickformData')) || [];
    setPickupData(storedPickupData);
  }, []);

  const authenticateAdmin = (enteredKey) => {
    if (enteredKey === secretKey) {
      setIsAdminAuthenticated(true);
    } else {
      setIsAdminAuthenticated(false);
    }
  };

  const downloadExcel = (data, sheetName, fileName) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const handleExportToExcel = () => {
    const exportData = {
      userData,
      contactData,
      pickupData,
    };

    downloadExcel(exportData.userData, 'UserDetails', 'UserDetails.xlsx');
    downloadExcel(exportData.contactData, 'ContactFormSubmissions', 'ContactFormSubmissions.xlsx');
    downloadExcel(exportData.pickupData, 'PickupFormRequests', 'PickupFormRequests.xlsx');
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='aboutcenter'>
        {isAdminAuthenticated ? (
          <div>
            <h1>User Details Table</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Password</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.password}</td>
                    <td>{item.userType}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <br />
            <h1>Contact Form Submissions Table</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Mobile num.</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td>{item.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <br />
            <h1>Pickup Form Request Table</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>PhoneNumber</th>
                  <th>Date</th>
                  <th>Address</th>
                  <th>Photo Name</th>
                  <th>Photo Type</th>
                  <th>Photo Size</th>
                  <th>Selected Items</th>
                </tr>
              </thead>
              <tbody>
                {pickupData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
                    <td>{item.photo ? item.photo.name : ''}</td>
                    <td>{item.photo ? item.photo.type : ''}</td>
                    <td>{item.photo ? item.photo.size + ' bytes' : ''}</td>
                    <td>{item.selectedItems}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <br />
            <button onClick={handleExportToExcel}>Export Data to Excel</button>
          </div>
        ) : (
          <div>
            <h2>Admin Authentication Required</h2>
            <input
              type="password"
              placeholder="Enter Secret Key"
              onChange={(e) => authenticateAdmin(e.target.value)}
            />
          </div>
        )}
      </div>

      <br />
      <br />
    </>
  );
};

export default Admin;
