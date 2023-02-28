import { Image, Title } from '../../atoms';
import { NeighborList, TextCharging, TextInfoCard } from '../../molecules';
import './styles/InfoCountry.css';

export const InfoCountry = ({ country }: any) => {
	const { name, nativeName, population, region, subregion, capital, domain, currencies, languages, borderC, flag } = country[0]

	return (
		<div className='country'>
			<Image src={flag} className='country__image' />
			<div className='country__info'>
				<Title type='h1' className='info__title'>{name}</Title>

				<div>
					<TextInfoCard title='Native Name:&nbsp;' content={nativeName} />
					<TextInfoCard title='Population:&nbsp;' content={population} />
					<TextInfoCard title='Region:&nbsp;' content={region} />
					<TextInfoCard title='Sub Region:&nbsp;' content={subregion} />
					<TextInfoCard title='Capital:&nbsp;' content={capital} />
				</div>

				<div>
					<TextInfoCard title='Top Level Domain:&nbsp;' content={domain} />
					<TextInfoCard title='Currencies:&nbsp;' content={currencies} />
					<TextInfoCard title='Languages:&nbsp;' content={languages ? Object.values(languages).join(', ') : 'None'} />
				</div>

				<div className='info__border'>
					<Title type='h2'>Border Countries:</Title>
					<div className='border__list'>
						{borderC !== 'No data' ?
							borderC.map((border: any) => (
								<NeighborList border={border} key={border} />
							)) :
							<p>{borderC}</p>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export const InfoCountryCharging = () => {
	return (
		<div className='c-charging'>
			<div className='c-charging__image'></div>
			<div className='info-charging'>
				<Title type='h1' className='info-charging__title'></Title>

				<div className='section-charging'>
					<TextCharging />
					<TextCharging />
					<TextCharging />
					<TextCharging />
					<TextCharging />
				</div>

				<div className='section-charging'>
					<TextCharging />
					<TextCharging />
					<TextCharging />
				</div>

				<div className='border-charging'>
					<TextCharging />
					<div className='container-charging'>
						<TextCharging /><TextCharging /><TextCharging />
					</div>
				</div>
			</div>
		</div>
	)
}
