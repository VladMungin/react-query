import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home/Home'
import Episodes from '../Episodes/Episodes'
import OneEpisode from '../Episodes/OneEpisode'
import Locations from '../Locations/Locations'
const AppRoutes = () =>{
	return <Routes>
		<Route index element={<Home />} />
		<Route path='/locations' element={<Locations />} />
		<Route path='/episodes' element={<Episodes />} />

		<Route path='/episode/:id' element={<OneEpisode/>}/>
	</Routes>
}

export default AppRoutes;