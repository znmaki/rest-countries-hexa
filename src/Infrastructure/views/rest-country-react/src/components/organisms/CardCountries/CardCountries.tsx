import { Image, Text, Title } from '../../atoms';
import { TextCharging, TextInfoCard } from '../../molecules';
import './styles/CardCountries.css';

export const CardCountries = ({ country }: any) => {
	return (
		<div className='mx-8 sm:mx-6'>
			<Image src={country.flag} className='rounded-t-lg w-full min-h-[180px]' />
			<div className='bg-darkSlateGray-100 rounded-b-lg pb-8 pl-6'>
				<Title type='h2' className='text-2xl font-bold py-4'>{country.title}</Title>
				<TextInfoCard title='Population:&nbsp;' content={country.population}/>
				<TextInfoCard title='Region:&nbsp;' content={country.region}/>
				<TextInfoCard title='Capital:&nbsp;' content={country.capital}/>
			</div>
		</div>
	)
}

export const CardCharging = () => {
	return (
		<div className='animate-pulse flex flex-col space-y-4 w-full'>
			<Image className='rounded-md bg-slate-700 h-[216px]' />
			<div className='space-y-4'>
				<Title type='h2' className='rounded-full bg-slate-700 h-7 w-3/5'></Title>
				<TextCharging/>
				<TextCharging/>
				<TextCharging/>
			</div>
		</div>
	)
}