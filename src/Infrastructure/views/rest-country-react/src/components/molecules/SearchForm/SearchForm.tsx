import { Icon, Input } from '../../atoms';
import './styles/SearchForm.css';

const SearchForm = () => {
	return (
		<div className='search-form'>
			<div className='icon__container'><Icon /></div>
			<Input className='search-form__input' type='text' placeholder='Search for a country...' />
		</div>
	)
}

export default SearchForm