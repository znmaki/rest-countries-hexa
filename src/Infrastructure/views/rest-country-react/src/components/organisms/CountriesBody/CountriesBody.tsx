import { CardCharging, CardCountries } from '../CardCountries';
import './styles/CountriesBody.css';

type CountriesBodyProps = {
	country: any[];
}

const CountriesBody = ({ country }: CountriesBodyProps) => {
	const arrCardCharging = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	
	return (
		<div className='countries-body'>
			{
				country.length !== 0 ? (
					country.map(country => (
						<CardCountries country={country} key={country.country_id} />
					))
				) : (<>{arrCardCharging.map((charging) => (<CardCharging key={arrCardCharging[charging]} />))}</>)
			}
		</div>
	)
}

export default CountriesBody