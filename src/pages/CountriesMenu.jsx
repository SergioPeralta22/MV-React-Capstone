/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../redux/countries/countriesSlice';
import { NavLink } from 'react-router-dom';

const CountriesMenu = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries.countries);

	useEffect(() => {
	  dispatch(getCountries());
    window.scrollTo(0, 0);
	}, [dispatch]);
	const url = window.location.href;
	const continent = url.substring(url.lastIndexOf('/') + 1);
	const formattedContinent = continent.charAt(0).toUpperCase() + continent.slice(1);
	const finalContinent =
		formattedContinent === 'America' ? formattedContinent + 's' : formattedContinent;

	const filteredCountries = countries.filter((country) => country.region === finalContinent);
	filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const handleClick = (country) => {
    dispatch(getCountry(country));
    console.log(country);
  };

	return (
		<div>
			<header>
				<img
          className='map_svg'
					alt={continent}
					src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${continent}/vector.svg`}
				/>
				<h3 className='capitalize'>{continent}</h3>
			</header>
			<h4>Population</h4>
			{filteredCountries.map(({ cca2, name, population, latlng }) => (
				<NavLink key={cca2} to={`${latlng}:${name.common}:${cca2.toLowerCase()}`} onClick={() => handleClick(cca2)}>
					<div className='itemCountry'>
						<img
              className='map_svg'
							alt={cca2}
							src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${cca2.toLowerCase()}/vector.svg`}
						/>
						<h3 className='uppercase'>{name.common}</h3>
            <img src="https://api.iconify.design/streamline:interface-arrows-right-circle-1-arrow-keyboard-circle-button-right.svg?color=%23ffffff" alt="go" />
						<p>{population}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default CountriesMenu;
