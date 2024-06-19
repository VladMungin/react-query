import axios from 'axios'
import { BASE_URL } from '../Utils/const'
export default axios.create({
	baseURL: BASE_URL
})