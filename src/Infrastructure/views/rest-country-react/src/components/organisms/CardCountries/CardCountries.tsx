import { Link } from 'react-router-dom';
import { Image, Title } from '../../atoms';
import { TextCharging, TextInfoCard } from '../../molecules';
import './styles/CardCountries.css';

export const CardCountries = ({ country }: any) => {
	return (
		<Link to={`/country/${country.country_id}`}>
			<Image src={country.flag} className='object-cover rounded-t-lg w-full sm:max-h-[420px] lg:max-h-[290px] xl:h-[300px]' />
			<div className='bg-darkSlateGray-100 rounded-b-lg pb-8 pl-6 sm:text-xl lg:text-lg'>
				<Title type='h2' className='text-2xl font-bold py-4 sm:text-4xl lg:text-2xl'>{country.title}</Title>
				<TextInfoCard title='Population:&nbsp;' content={country.population}/>
				<TextInfoCard title='Region:&nbsp;' content={country.region}/>
				<TextInfoCard title='Capital:&nbsp;' content={country.capital}/>
			</div>
		</Link>
	)
}

export const CardCharging = () => {
	return (
		<div className='animate-pulse flex flex-col space-y-4 w-full'>
			<div className='rounded-md bg-slate-700 h-[216px]'></div>
			<div className='space-y-4'>
				<Title type='h2' className='rounded-full bg-slate-700 h-7 w-3/5'></Title>
				<TextCharging/>
				<TextCharging/>
				<TextCharging/>
			</div>
		</div>
	)
}