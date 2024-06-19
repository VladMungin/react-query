import { FormEvent } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import api from '../API/api'
import { Episode } from '../Types/types'

const OneEpisode = () => {
	const {id} = useParams()
	
	const {isLoading, error, data} = useQuery<Episode>(
		'getOneEpisode',
		async () => {
			const res = await api.get(`/episode/${id}`)
			return res.data
		}
	)

	const  editEpisode = async (episode: FormData) => {
		const res = await api.patch(`/episode/${id}`, episode)
		return res.data
	}

	const {mutate, isLoadingPost, isErrorPost, isSuccessPost} = useMutation(editEpisode)

	const handleClick = (event: FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement)
		console.log(formData)
		mutate(formData)
	}

	if(isLoading) return <p>Загрузка</p>

	if(error) return <p>Error</p>
	
	return (
		<form onSubmit={(e) => handleClick(e)}>
			<p>Name</p>
			<input id="name" defaultValue={data?.name}/>

			<p>Air date</p>
			<input id="airDate" defaultValue={data?.air_date}/>


			<p>Episode</p>
			<input id="episode" defaultValue={data?.episode}/>
			<input type='submit' value={isLoadingPost ? 'Загрузка...' : 'Отправить'}/>
			{isErrorPost && <p>Error occurred while submitting the form</p>}
			{isSuccessPost && <p>Form submitted successfully!</p>}
		</form>
		
	)
}

export default OneEpisode
