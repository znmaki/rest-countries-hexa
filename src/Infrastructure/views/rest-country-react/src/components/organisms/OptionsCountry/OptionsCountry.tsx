import { FilterRegion, SearchForm } from '../../molecules';
import './styles/OptionsCountry.css';

const OptionsCountry = () => {
	return (
		<div className='options-country'>
			<SearchForm />
			<FilterRegion />
		</div>
	)
}

export default OptionsCountry