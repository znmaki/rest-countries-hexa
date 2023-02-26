import { useState, useEffect } from 'react';
import { countryService } from '../../../../../../Domain';
import { CountriesBody, OptionsCountry } from '../../components';
import './styles/Home.css';

const Home = () => {
	const [country, setCountry] = useState<any>([])

	useEffect(() => {
		countryService.getCountries().then(setCountry)
	}, [])

	return (
		<div className='mx-4 space-y-7 2xl:mx-16'>
			<OptionsCountry/>
			<CountriesBody country={country} />
		</div>
	)
}

export default Home