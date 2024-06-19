import './Card.css'

interface CardProps {
	name: string,
	species: string,
	status: string
}

const Card = ({name,species,status}: CardProps) => {
	return (
		<div className='card'>
			<h1>{name}</h1>
			<p>{species}</p>
			<p>{status}</p>
		</div>
	)
}

export default Card
