import { Text, Title } from '../../atoms';
import './styles/TextInfoCard.css';

type TextCardProps = {
	title?: string;
	content?: string;
}

export const TextInfoCard = ({ title, content }: TextCardProps) => {
	return (
		<div className='flex flex-wrap'>
			<Title type='h3' className='font-medium'>{title}</Title>
			<Text className='font-thin'>{content}</Text>
		</div>
	)
}

export const TextCharging = () => {
	return (
		<div className='text-card-charging'>
			<Title type='h3' className='card-charging__title'></Title>
			<Text className='card-charging__text'></Text>
		</div>
	)
}
