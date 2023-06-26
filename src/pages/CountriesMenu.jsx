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

  const getBackgroundColorClass = (index) => {
    const backgroundColorClasses = ['bg-[#4268B1]', 'bg-[#3E60A2]'];
    const row= Math.floor(index / 2);
    return backgroundColorClasses[(index+row) % backgroundColorClasses.length];
  };
  

  

	return (
		<div>
			<header className='bg-blue_l flex items-center gap-4 p-4 w-[100vw]'>
				<img
					className='map_svg w-3/5 h-1/5'
					alt={continent}
					src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${continent}/vector.svg`}
				/>
				<h3 className='capitalize text-2xl pr-4'>{continent}</h3>

			</header>
      <div className="bg-[#35548B] p-2">
				<h4 className="uppercase">Stats by country</h4>
        </div>
        <div className="grid grid-cols-2">
				{filteredCountries.map(({ cca2, name, population, latlng }, index) => (

					<NavLink
						key={cca2}
						to={`${latlng}:${name.common}:${cca2.toLowerCase()}`}
						onClick={() => handleClick(cca2)}
					>
						<div className={`h-full w-full p-4 
          relative ${getBackgroundColorClass(index)}`}>
							<img
								className='map_svg h-[60%] mx-auto'
								alt={cca2}
								src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${cca2.toLowerCase()}/vector.svg`}
							/>
							<img
              className="absolute top-3 right-3 h-5"
								src='https://api.iconify.design/streamline:interface-arrows-right-circle-1-arrow-keyboard-circle-button-right.svg?color=%23ffffff'
								alt='go'
							/>
              <div className="absolute right-4">
							<h3 className='uppercase text-right'>{name.common}</h3>
							<p className="text-right">{population}</p>
              </div>
						</div>
					</NavLink>

))}
</div>
		</div>
	);
};

export default CountriesMenu;
