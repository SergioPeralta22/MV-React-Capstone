/*eslint-disable*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import { getAllCountries } from '../redux/countries/countriesSlice';

const ContinentsMenu = () => {
	const dispatch = useDispatch();
	const continents = ['africa', 'america', 'asia', 'europe', 'oceania'];

	useEffect(() => {
		dispatch(getCountries());
	}, []);

	const handleClick = (continent) => {
		dispatch(getAllCountries(continent));
	};

	return (
		<div>
			{continents.map((continent) => (
				<NavLink key={continent} to={`/${continent}`} onClick={() => handleClick(continent)}>
					<div>
						<img
							alt={continent}
							src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${continent}/vector.svg`}
						/>
						<p>{continent.toUpperCase()}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default ContinentsMenu;
