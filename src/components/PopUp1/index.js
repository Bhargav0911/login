import React, { useState } from 'react';
import './index.css';


const PopUp1 = ({ onClose }) => {
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);


  const handleConfirmBooking = () => {
    // Add logic to handle the booking confirmation
    // For example, make an API call to confirm the booking
    // If the booking is successful, setBookingConfirmed(true);
    
    // For demonstration purposes, let's assume the booking is successful
    setBookingConfirmed(true);
  };

  const handleCheckBookings = () => {
    // Add logic to navigate to the bookings page
    // For example, use react-router or window.location.href
    console.log('Checking bookings...');
  };

  const handlePopupClose = () => {
    // Reset the booking confirmation state and close the popup
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="popup1-overlay">
      <div className="popup1-content">
        {!isBookingConfirmed ? (
          <>
            <h2>Book Urgent case</h2>
            <form className='formContainer'>
            <div className='item'>
                <label htmlFor='name'>Symptoms</label>
                <input type="text" id="name" placeholder='Add Symptom' />
              </div>
              <div className='item'>
                <label htmlFor='Patient'>Select Patient</label>
                <input type="text" id="patient" placeholder='User Name' />
              </div>
              <div className='item'>
                <label htmlFor='ParNote'>Patient Note*</label>
                <input type="text" id="ParNote" placeholder='Add Description Here' className='des' />
              </div>
              <div className='item'>
                <label htmlFor='VideoNote'>Video Note*</label>
                <input type="file" accept='video/*' />
              </div>
            </form>
            <button onClick={handleConfirmBooking}>Confirm Booking</button>
          </>
        ) : (
          <div className='successContainer'>
            <div className='successImgContainer'>
              <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" className='successImgContainer'/>
              <h3 className='successful'>Successful</h3>
              <p className='successfulPara'>Your case booking is done successfully. Please check status</p>
              <button>Check Bookings</button>
              <button onClick={handlePopupClose} className='btn'>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp1;