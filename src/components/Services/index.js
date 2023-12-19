// Services.js
import React, { useState, useEffect } from 'react';
import { FiPhone } from 'react-icons/fi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import {FiMail} from 'react-icons/fi'
import PopUp1 from '../PopUp1'
import PopUp2 from '../PopUp2';

import './index.css';

const Services = () => {
  const [isUrgentCareVisible, setIsUrgentCareVisible] = useState(true);
  const [isStandaloneVisible, setIsStandaloneVisible] = useState(false);
  const [isFooterFixed, setIsFooterFixed] = useState(false);
  const [isPopUp1Visible, setPopUp1Visible] = useState(false);
  const [isPopUp2Visible, setPopUp2Visible] = useState(false);



  const showUrgentCare = () => {
    setIsUrgentCareVisible(true);
    setIsStandaloneVisible(false);
  };

  const showStandaloneServices = () => {
    setIsUrgentCareVisible(false);
    setIsStandaloneVisible(true);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isFooterFixed = scrollPosition + windowHeight >= documentHeight;
    setIsFooterFixed(isFooterFixed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openPopUp1 = () => {
    setPopUp1Visible(true);
  };

  const closePopUp1 = () => {
    setPopUp1Visible(false);
  };

  const openPopUp2 = () =>{
    setPopUp2Visible(true)
  }

  const closePopUp2 = () =>{
    setPopUp2Visible(false)
  }

  return (
    <div className="services-container">
      <div className="services-header">
        <div className="services-title">Services</div>
      </div>
      <div className="services-section">
        <div className="services-subsection">
        <div
            className={`services-category ${isUrgentCareVisible ? 'active' : ''}`}
            onClick={showUrgentCare}
          >
            <div className="category-title">Urgent / Non-Urgent Care</div>
          </div>
          <div
            className={`services-subcategory ${isStandaloneVisible ? 'active' : ''}`}
            onClick={showStandaloneServices}
          >
            <div className="subcategory-title">Standalone services</div>
          </div>
        </div>
      </div>
      
      
      {/* Add Urgent Care Containers */}
      {isUrgentCareVisible && (
        <div className='urgent-care-container'>
          <div className="category-container">
            <div className="category-content">
            <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 1</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button" >Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category-content">
            <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 2</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button">Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category-content">
            <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 3</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button">Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category-content">
            <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 4</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button">Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category-content">
            <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 5</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button">Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
        
        </div>
      )}
      {/* End Urgent Care Containers */}
      {/* Pop-up 1 */}
      {isPopUp1Visible && (
        <PopUp1 onClose={closePopUp1} />
      )}
      {isPopUp2Visible && (
        <PopUp2 onClose={closePopUp2} />
      )}
      {/* Add Standalone Services Containers */}
      {isStandaloneVisible && (
        <div className='urgent-care-container'>
          <div className="category-container">
          <div className="category-content">
          <img src="https://via.placeholder.com/36x32" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 5</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button" onClick={openPopUp1}>Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
          <div className="category-content">
          <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 5</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button" onClick={openPopUp2}>Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          <div className="category-container">
          <div className="category-container">
          <div className="category-content">
          <img src="URL_TO_IMAGE_1" alt="Vaccination 1" className="category-image" />

              <div className="content-title">Vaccination 5</div>
              <div className="content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </div>
              <div className="content-button">Book Service</div>
              <div className="content-icon">
                {/* Add icon or other content if needed */}
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
      {/* End Standalone Services Containers */}

{/* Footer within Services component */}
<div className={`footer-container ${isFooterFixed ? 'fixed' : ''}`}>
  <div className="footer">
    {/* Footer content */}
    <div className='main'>
      <div className='itemsContainer'>
        <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1702576617/dooperWhite_ib2lb0.png" className='dooperWhite' alt="footer dooper"/>
        <div className='icon-text'>
          <div className='whiteContainer'>
            <FiPhone/>
          </div>
          <div>
            <a className='contact'>Phone</a><br/>
            <a className='contact'>+1 23 456 7980</a>
          </div>
        </div>
        <div className='icon-text'>
          <div className='whiteContainer'>
            <FiMail/>
          </div>
          <div>
            <a className='contact'>Mail</a><br/>
            <a className='contact'>inf@2dooper.com</a>
          </div>
        </div>
      </div>  
      <div className='itemsContainer'>
        <p className='listHead'>Quick Links</p>
        <ul>
          <li className='listItem'>Pricing</li>
          <li className='listItem'>Doctors</li>
          <li className='listItem'>Services</li>
          <li className='listItem'>Testimonials</li>
          <li className='listItem'>FAQs</li>
        </ul>
      </div>
      <div className='itemsContainer'>
        <p className='listHead'>Other</p>
        <ul>
          <li className='listItem'>Make Appointment</li>
          <li className='listItem'>Emergency Call</li>
          <li className='listItem'>Testimonials</li>
        </ul>
      </div>
      <div className='itemsContainer'>
        <p className='listHead'>Links</p>
        <ul>
          <li className='listItem'>Blogs</li>
          <li className='listItem'>Privacy Policy</li>
          <li className='listItem'>Terms and Conditions</li>
        </ul>
      </div>
      <div className='itemsContainer'>
        <p className='listHead'>Quick Links</p>
        <div className='icon-text'>
          <div className='whiteContainer'>
            <AiFillInstagram/>
          </div>
          <div className='whiteContainer'>
            <BsFacebook/>
          </div>
          <div className='whiteContainer'>
            <BsLinkedin/>
          </div>
        </div>
      </div>
    </div>
    <hr className='hr'/>
    <div className='copyWrite'>
      Copyright © 2023 | All rights reserved by dooper
    </div>
  </div>
  {/* Add other footer items as needed */}
</div>

    </div>
  );
};

export default Services;
