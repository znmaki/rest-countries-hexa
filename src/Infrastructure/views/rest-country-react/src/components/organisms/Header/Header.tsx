import { Title, Buttons } from '../../atoms';
import './styles/Header.css';

const Header = () => {
	return (
		<div className='bg-darkSlateGray-100 flex justify-between py-4 mx-[-1rem] px-4'>
			<Title type='h1'>Where in the world?</Title>
			<Buttons>
				Dark Mode
			</Buttons>
		</div>
	)
}

export default Header