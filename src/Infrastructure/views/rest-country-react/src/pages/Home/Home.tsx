import { useState, useEffect } from 'react';
import { countryService } from '../../../../../../Domain';
import { CountriesBody, Header, OptionsCountry } from '../../components/organisms';
import './styles/Home.css';

const Home = () => {
	const [country, setCountry] = useState<any>([])

	useEffect(() => {
		countryService.getCountries().then(setCountry)
	}, [])

	console.log(country);

	return (
		<div className='mx-4 space-y-7'>
			<Header />
			<OptionsCountry/>
			<CountriesBody country={country} />
		</div>
	)
}

export default Home