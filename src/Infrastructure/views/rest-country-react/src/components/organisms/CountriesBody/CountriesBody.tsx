import { CardCharging, CardCountries } from '../CardCountries';
import './styles/CountriesBody.css';

type CountriesBodyProps = {
	country: any[]
}

const CountriesBody = ({ country }: CountriesBodyProps) => {
	const arrCardCharging = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<div>
			<div className='grid space-y-7 mx-8 sm:mx-6 lg:space-y-0 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 2xl:mx-0 2xl:grid-cols-4'>
				{
					country.length !== 0 ? (
						country.map(country => (
							<CardCountries country={country} key={country.country_id} />
						))
					) : (<>{arrCardCharging.map((charging) => (<CardCharging key={arrCardCharging[charging]} />))}</>)
				}
			</div>
		</div>
	)
}

export default CountriesBody