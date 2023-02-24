import { CardCharging, CardCountries } from '../CardCountries';
import './styles/CountriesBody.css';

type CountriesBodyProps = {
	country: []
}

const CountriesBody = ({ country }: CountriesBodyProps) => {
	return (
		<div>
			<div className='grid space-y-7 sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 xl:grid-cols-4'>
				{
					country.length !== 0 ? (
						country.map(country => (
							<CardCountries country={country} />
						))
					) : (<><CardCharging /><CardCharging /></>)
				}
			</div>
		</div>
	)
}

export default CountriesBody