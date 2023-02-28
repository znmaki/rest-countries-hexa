import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { neighborService } from '../../../../../../../Domain';
import { Text } from '../../atoms';
import './styles/NeighborList.css';

const NeighborList = ({ border }: any) => {
	const [neighbor, setNeighbor] = useState<any>([])
	const { query } = useParams()

	useEffect(() => {
		neighborService.getNeighbor(border).then(setNeighbor)
	}, [query])

	return (
		neighbor.length !== 0 ?
			<Link to={`/country/${border}`} className='neighbor-list'>
				<Text className='neighbor-list__text'>{Object.values(neighbor as any[])[0].name}</Text>
			</Link>
			:
			<div>a</div>
	)
}

export default NeighborList
