import React from 'react';
import CountryList from '../components/CountryList';
import Navbar from '../components/Navbar';

const Dashboard = () => (
  <div>
    <Navbar name="Countries Population Metrics" returnPage={false} />
    <CountryList />
  </div>
);

export default Dashboard;
