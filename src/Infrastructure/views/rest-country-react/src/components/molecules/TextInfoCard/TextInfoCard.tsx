import { Image, Text, Title } from '../../atoms';
import './styles/TextInfoCard.css';

type TextCardProps = {
	title: string;
	content: string;
}

export const TextInfoCard = ({ title, content }: TextCardProps) => {
	return (
		<div className='flex'>
			<Title type='h3' className='font-bold'>{title}</Title>
			<Text>{content}</Text>
		</div>
	)
}

export const TextCharging = () => {
	return (
		<div className='flex space-x-4'>
			<Title type='h3' className='rounded-full bg-slate-700 h-7 w-2/5'></Title>
			<Text className='rounded-full bg-slate-700 h-7 w-3/5'></Text>
		</div>
	)
}
