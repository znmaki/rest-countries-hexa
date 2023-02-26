import { Icon, Input } from '../../atoms';
import './styles/SearchForm.css';

const SearchForm = () => {
	return (
		<div className='searchform'>
			<div className='bg-darkSlateGray-100 py-4 pl-8 rounded-l-lg'><Icon /></div>
			<Input className='input' type='text' placeholder='Search for a country...' />
		</div>
	)
}

export default SearchForm