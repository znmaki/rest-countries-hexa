import { FilterRegion, SearchForm } from '../../molecules';
import './styles/OptionsCountry.css';

const OptionsCountry = () => {
	return (
		<div className='space-y-7 xl:flex xl:items-center xl:space-y-0 xl:justify-between'>
			<SearchForm />
			<FilterRegion />
		</div>
	)
}

export default OptionsCountry