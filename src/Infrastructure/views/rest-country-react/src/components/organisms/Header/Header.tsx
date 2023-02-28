import { Link } from 'react-router-dom';
import { Title, Buttons } from '../../atoms';
import './styles/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'><Title type='h1'>Where in the world?</Title></Link>
			<Buttons>
				Dark Mode
			</Buttons>
		</div>
	)
}

export default Header