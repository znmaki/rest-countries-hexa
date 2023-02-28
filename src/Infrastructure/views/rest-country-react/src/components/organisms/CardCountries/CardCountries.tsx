import { Link } from 'react-router-dom';
import { Image, Title } from '../../atoms';
import { TextCharging, TextInfoCard } from '../../molecules';
import './styles/CardCountries.css';

export const CardCountries = ({ country }: any) => {
	return (
		<Link to={`/country/${country.country_id}`}>
			<Image src={country.flag} className='card__image' />
			<div className='info__container'>
				<Title type='h2' className='info__title'>{country.title}</Title>
				<TextInfoCard title='Population:&nbsp;' content={country.population} />
				<TextInfoCard title='Region:&nbsp;' content={country.region} />
				<TextInfoCard title='Capital:&nbsp;' content={country.capital} />
			</div>
		</Link>
	)
}

export const CardCharging = () => {
	return (
		<div className='card-charging'>
			<div className='card-charging__image'></div>
			<div className='info-charging__container'>
				<Title type='h2' className='info-charging__title'></Title>
				<TextCharging />
				<TextCharging />
				<TextCharging />
			</div>
		</div>
	)
}