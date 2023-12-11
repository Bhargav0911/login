// RegistrationComponent.js
import React, { useState } from 'react';
import PhoneNumberValidation from '../PhoneNumberValidation';
import OTPValidation from '../OTPValidation';

const RegistrationComponent = ({ onOtpSent }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');


  const handleSendOtp = () => {
    // You can perform any necessary validation here
    if (phoneNumber) {
      // Assume you have a function to send OTP
      // This is just a placeholder; replace it with your actual implementation
      sendOtpToServer(phoneNumber);

      // Set state to indicate OTP has been sent
      setIsOtpSent(true);

      // Inform the parent component that OTP has been sent
      onOtpSent();

    } else {
      // Handle the case where phone number is not valid
      console.error('Please enter a valid phone number.');
    }
  };

  const sendOtpToServer = (phoneNumber) => {
    // Assume you have a function to send OTP to the server
    // This is just a placeholder; replace it with your actual implementation
    console.log(`Sending OTP to ${phoneNumber}`);
  };

  const handleVerifyOtp = () => {
    // Assume you have a function to verify the OTP
    // This is just a placeholder; replace it with your actual implementation
    if (otp === '1234') {
      // OTP is valid, you can navigate to the next page or perform other actions
      console.log('OTP verification successful');
    } else {
      // Handle the case where OTP is not valid
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='loginContainer'>
      <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg' />
      <div className='welcomeContainer'>
        <h1 className='welcome'>Register</h1>
        <h2 className='welcomePara'>Create a new account in <span className='span_dooper'>DOOPER</span>, please enter your details</h2>
        <div className='phoneNumberContainer'>
          <label className='label'>Phone Number</label>
          <PhoneNumberValidation value={phoneNumber} onChange={setPhoneNumber} />
          {!isOtpSent ? (
            <button className='loginBtn' onClick={handleSendOtp}>Send OTP</button>
          ) : (
            <>
              <label className='label'>Enter OTP</label>
              <OTPValidation value={otp} onChange={setOtp} />
              <button className='loginBtn' onClick={handleVerifyOtp}>Verify OTP</button>
              {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
            </>
          )}
        </div>
      </div>
      <div className=''>
        <div className='checkBoxContainer'>
          <input type='checkbox' className='checkBox' />
          <p>By signing up you agree to <span className='span_dooper'>Terms of use</span></p>
        </div>
        <div className='checkBoxContainer'>
          <input type='checkbox' className='checkBox' />
          <p>By signing up you agree to <span className='span_dooper'>Marketing condition</span></p>
        </div>
      </div>
      <p className='bottomText'>Join the community of smart and experienced doctors.
        Login to access your personalized dashboard,
        track your record or process and get informed by our services</p>
    </div>
  );
};

export default RegistrationComponent;
