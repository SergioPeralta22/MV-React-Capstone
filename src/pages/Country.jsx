import React from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Country = () => {
  const { id } = useParams();
  const [coordinates, country, countryCode] = id.split(':');
  const [lat, lon] = coordinates.split(',');

  return (
    <div>
      <h2>
        {lat}
      </h2>
      {lon}
      {country}
      ---
      {countryCode}
    </div>

  );
};
export default Country;
