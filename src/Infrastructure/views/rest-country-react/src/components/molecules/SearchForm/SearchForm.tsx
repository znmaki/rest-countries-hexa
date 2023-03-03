import { Icon, Input } from '../../atoms';
import './styles/SearchForm.css';
import { useState } from 'react';

const SearchForm = ({ setSearch }: any) => {
	return (
		<div className='search-form'>
			<div className='icon__container'><Icon /></div>
			<Input className='search-form__input' type='text' placeholder='Search for a country...' onChange={e => setSearch(e.target.value)} />
		</div>
	)
}

export default SearchForm