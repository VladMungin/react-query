import { Link } from 'react-router-dom'
import { ROUTES } from '../../Utils/routes'
import './Header.css'
const Header = () => {
	return (
		<header>
			<Link className="link" to={ROUTES.HOME}>characters</Link>
			<Link className="link" to={ROUTES.LOCATIONS}>locations</Link>
			<Link className="link" to={ROUTES.EPISODES}>episodes</Link>
		</header>
	)
}

export default Header
