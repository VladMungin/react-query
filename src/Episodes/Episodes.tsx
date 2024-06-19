import { useQuery } from 'react-query'
import api from '../API/api'
import CardLink from '../Components/Card/CardLink'
import { Episode } from '../Types/types'
const Episodes = () => {

	const {isLoading, error, data} = useQuery<Episode[]>(
		'getEpisodes',
		async () => {
			const res = await api.get('/episode')
			return res.data.results
		}
	)
	if(isLoading) return <p>Загрузка</p>

	if(error) return <p>Error</p>
	
	return (
		<div className='card__wrapper'>
			{data?.map(({id, name, air_date, episode}) => {
				return (<CardLink key={id} name={name} status={episode} species={air_date} id={id}/>)
			})}
		</div>
	)
}

export default Episodes
