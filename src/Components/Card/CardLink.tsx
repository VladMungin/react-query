import { Link } from 'react-router-dom'

interface CardLinkProps {
	name: string,
	status: string,
	species: string,
	id: number
}

const CardLink = ({name, status, species, id}:CardLinkProps) => {
	return (
		<Link to={`/episode/${id}`}>
			<div className='card'>
			<h1>{name}</h1>
			<p>{species}</p>
			<p>{status}</p>
		</div>
		</Link>
	)
}

export default CardLink
