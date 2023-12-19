import React from 'react';
import Header from '../Header';
import Services from '../Services'; // Import the Services component
import './index.css';


const Dashboard = () => (
  <div>
    <Header />
    <Services/>
    {/* Add other dashboard content here */}
  </div>
);

export default Dashboard;
