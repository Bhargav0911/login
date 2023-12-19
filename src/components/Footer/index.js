// Footer.js
import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

import './index.css'; // Create a separate CSS file for footer styles if needed

const Footer = () => {
  return (
    <div className='footer'>
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

  );
};

export default Footer;
