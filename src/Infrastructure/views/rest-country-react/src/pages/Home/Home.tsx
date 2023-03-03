import { useState, useEffect } from 'react';
import { countryService } from '../../../../../../Domain';
import { CountriesBody, FilterRegion, OptionsCountry, SearchForm } from '../../components';
import './styles/Home.css';

const Home = () => {
	const [country, setCountry] = useState<any>([])
	const [filter, setFilter] = useState<any>([])
	const [region, setRegion] = useState<any>('')
	const [search, setSearch] = useState<any>('')

	useEffect(() => {
		countryService.getCountries().then(setCountry)
	}, [])
	console.log(region, search);

	useEffect(() => {
		if (region !== '') {
			setFilter(country.filter((fil: any) => fil.region.toLowerCase().includes(region)))
		}
		else if (search !== '') {
			setFilter(country.filter((fil: any) => fil.title.toLowerCase().includes(search)))
		}
		else {
			setFilter(country)
		}
	}, [country, region, search])


	return (
		<div className='home'>
			<OptionsCountry>
				<SearchForm setSearch={setSearch} />
				<FilterRegion setRegion={setRegion} />
			</OptionsCountry>
			<CountriesBody country={filter} />
		</div>
	)
}

export default Home