import { useQuery } from 'react-query'
import api from '../../API/api'
import { Character } from '../../Types/types'
import Card from '../Card/Card'
import './Home.css'
export const Home = () => {

	const {isLoading, error, data} = useQuery<Character[]>(
		'getCharacters',
		async () =>{
			const res = await api.get('/character')
			return res.data.results
		}
	)

	if(isLoading) return <p>Загрузка</p>

	if(error) return <p>Error</p>
	
	return (
		
		<div className='card__wrapper'>
			{data?.map(({id, name, status, species}) =>{
				return (<Card key={id} name={name} status={status} species={species}/>)
			})}
		</div>
	)
}

