import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CountryDetail from '../components/CountryDetails';
import Navbar from '../components/Navbar';

const Details = () => {
  const { topLevelDomain } = useParams();
  const countryList = useSelector((state) => state.populationSlice.countryList);
  let name;
  let detailedContent = '';
  if (countryList) {
    const country = countryList.filter((country) => (
      country.numericCode.toString() === topLevelDomain
    ))[0];
    name = country.name;
    detailedContent = (<CountryDetail country={country} />);
  }

  return (
    <div>
      <Navbar name={name} returnPage />
      {countryList && (detailedContent)}
    </div>
  );
};

export default Details;
