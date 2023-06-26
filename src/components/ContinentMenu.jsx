import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getCountries } from '../redux/countries/countriesSlice';

const ContinentsMenu = () => {
  const dispatch = useDispatch();
  const continents = ['africa', 'america', 'asia', 'europe', 'oceania'];

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="">
      {continents.map((continent) => (
        <NavLink key={continent} to={`/${continent}`}>
          <div className="bg-blue_l h-full w-full
          relative"
          >
            <img
              className="map_svg h-fit"
              alt={continent}
              src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${continent}/vector.svg`}
            />
            <img className="absolute top-5 right-5 h-6" src="https://api.iconify.design/streamline:interface-arrows-right-circle-1-arrow-keyboard-circle-button-right.svg?color=%23ffffff" alt="go" />
            <p className="absolute bottom-[10%] left-[10%] text-2xl">{continent.toUpperCase()}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ContinentsMenu;
