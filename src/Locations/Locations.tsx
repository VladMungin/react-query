import { useQuery } from 'react-query'
import api from '../API/api'
import Card from '../Components/Card/Card'
import { Location } from '../Types/types'
const Locations = () => {

	const {isLoading, error, data} = useQuery<Location[]>(
		'getLocations',
		async () => {
			const res = await api.get('/location')
			return res.data.results
		}
	)

	if(isLoading) return <p>Загрузка</p>

	if(error) return <p>Error</p>

	return (
		<div className='card__wrapper'>
			{data?.map(({id, name, type, dimension}) => {
				return (<Card key={id} name={name} status={type} species={dimension}/>)
			})}
		</div>
	)
}

export default Locations
