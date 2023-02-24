import { FilterRegion, SearchForm } from '../../molecules';
import './styles/OptionsCountry.css';

const OptionsCountry = () => {
	return (
		<div className='space-y-7'>
			<SearchForm />
			<FilterRegion />
		</div>
	)
}

export default OptionsCountry