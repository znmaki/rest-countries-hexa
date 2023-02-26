import { useState, useEffect } from 'react';
import { countryService } from '../../../../../../Domain';
import { useParams } from 'react-router-dom';
import './styles/CountryCCA.css';

const CountryCCA = () => {
	const [country, setCountry] = useState<any>([])

	const { query } = useParams()

	useEffect(() => {
		countryService.getCountryCCA(`${query}`).then(setCountry)
	}, [])

	console.log(country);


	return (
		<div>CountryCCA</div>
	)
}

export default CountryCCA
