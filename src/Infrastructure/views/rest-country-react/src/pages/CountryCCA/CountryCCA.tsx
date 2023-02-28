import { useState, useEffect } from 'react';
import { countryService } from '../../../../../../Domain';
import { Link, useParams } from 'react-router-dom';
import './styles/CountryCCA.css';
import { InfoCountry, InfoCountryCharging } from '../../components';

const CountryCCA = () => {
	const [country, setCountry] = useState<any>([])

	const { query } = useParams()

	useEffect(() => {
		countryService.getCountryCCA(`${query}`).then(setCountry)
	}, [query])

	return (
		<div className='cca'>
			<Link to={'/'} className='cca__btn'>🡐 Back</Link>
			{
				country.length !== 0 ?
					<InfoCountry country={country} /> :
					<InfoCountryCharging />
			}
		</div>
	)
}

export default CountryCCA
