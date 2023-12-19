import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { HiPhone } from 'react-icons/hi';
// import Notifications from '../Notifications';
import './index.css';

const Header = () => (
  <div className="headerContainer">
    <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="header" className="logo" />
    <div className="header-items">
      <NavLink to="/" className="a">Dooper At Home</NavLink>
      <NavLink to="/lab-tests" className="a">Lab Tests</NavLink>
      <div className='header-items'>
        <NavLink to="/our-network" className="a">Our Network</NavLink>
        <a className='dropdown'><AiOutlineCaretDown /></a>
      </div>
      <NavLink to="/about-us" className="a">About Us</NavLink>
      <NavLink to="/contact-us" className="a">Contact Us</NavLink>
      <div className='header-items'>
        <NavLink to="/join-us" className="a">Join Us</NavLink>
        <a className='dropdown'><AiOutlineCaretDown /></a>
      </div>
      <div className='greyContainer'>
        <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695882685/Rectangle_619_t4obov.png" alt="profile img" />
        <NavLink to="/profile" className='dropProfile'>Jaydip Sakhiya</NavLink>
        <a className='dropdown2'><AiOutlineCaretDown /></a>
      </div>

      <div className='greyContainer'>
        <NavLink to="/notifications"><RiNotification3Line /></NavLink>
      </div>
      <div className='iconContainer'>
        <HiPhone />
      </div>
    </div>
  </div>
);

export default Header;
