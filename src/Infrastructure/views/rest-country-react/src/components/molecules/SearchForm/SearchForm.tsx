import { Icon, Input } from '../../atoms';
import './styles/SearchForm.css';

const SearchForm = () => {
	return (
		<div className='flex'>
			<div className='bg-darkSlateGray-100 py-4 rounded-l-lg'><Icon /></div>
			<Input className='bg-darkSlateGray-100 placeholder:text-white py-4 rounded-r-lg' type='text' placeholder='Search for a country...' />
		</div>
	)
}

export default SearchForm