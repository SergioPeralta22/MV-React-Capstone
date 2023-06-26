/* eslint-disable */
import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/airPolution/airPolutionSlice';

ChartJS.register(ArcElement, Tooltip, Legend);

const Country = () => {
	const { id } = useParams();
	const [coordinates, country, countryCode] = id.split(':');
	const [lat, lon] = coordinates.split(',');
	const infoArr = useSelector((state) => state.info);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInfo([lat, lon]));
	}, [dispatch, lat, lon]);

	const data = {
		labels: ['CO', 'NH3', 'NO', 'NO2', 'O3', 'PM2_5', 'PM10', 'SO2'],
		datasets: [
			{
				label: 'Quantity',
				data: [
					infoArr.co,
					infoArr.nh3,
					infoArr.no,
					infoArr.no2,
					infoArr.o3,
					infoArr.pm2_5,
					infoArr.pm10,
					infoArr.so2,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.4)',
					'rgba(54, 162, 235, 0.4)',
					'rgba(255, 206, 86, 0.4)',
					'rgba(75, 192, 192, 0.4)',
					'rgba(153, 102, 255, 0.4)',
					'rgba(255, 159, 64, 0.4)',
					'rgba(94, 94, 94, 0.4)',
					'rgba(255, 255, 255, 0.4)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(94, 94, 94, 1)',
					'rgba(255, 255, 255, 1)',
				],
				borderWidth: 1,

			},
		],
	};

	

	return (
		<div className=''>
			<div className=''>
				<header className='bg-blue_l flex items-center gap-4 p-4 w-[100vw]'>
					<img
						className='map_svg w-3/5 h-1/5'
						alt={country}
						src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${countryCode}/vector.svg`}
					/>
				</header>
				<div className='bg-[#35548B] p-2'>
					<h4 className='uppercase'>
						{country}
						<span className='capitalize font-light ml-2'> air pollution ( μg/m3 ) stats</span>
					</h4>
				</div>
				<div className=''>
					<div className='p-4 bg-blue_header'>
						<div className='flex justify-between'>
							<p>Carbon monoxide (CO):</p>
							<p>{infoArr.co}</p>
						</div>
						<div className='flex justify-between'>
							<p>Ammonia (NH3):</p>
							<p>{infoArr.nh3}</p>
						</div>
						<div className='flex justify-between'>
							<p>Nitric oxide (NO):</p>
							<p>{infoArr.no}</p>
						</div>
						<div className='flex justify-between'>
							<p>Nitrogen dioxide (NO2):</p>
							<p>{infoArr.no2}</p>
						</div>
						<div className='flex justify-between'>
							<p>Ozone (O3):</p>
							<p>{infoArr.o3}</p>
						</div>
						<div className='flex justify-between'>
							<p>Fine particulate matter (PM2.5):</p>
							<p>{infoArr.pm2_5}</p>
						</div>
						<div className='flex justify-between'>
							<p>Coarse particulate matter (PM10):</p>
							<p>{infoArr.pm10}</p>
						</div>
						<div className='flex justify-between'>
							<p>Sulfur dioxide (SO2):</p>
							<p>{infoArr.so2}</p>
						</div>
					</div>
				</div>
				<div className='p-2 bg-black'>
					<h2>Doughnut Chart</h2>
					<Doughnut data={data} />
				</div>
			</div>
		</div>
	);
};
export default Country;
