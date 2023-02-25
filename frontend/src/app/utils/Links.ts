import {
	faEdit,
	faHeadset,
	faHouseChimney,
	faMagnifyingGlass,
	faPlus,
	faRightToBracket,
	faUserPlus,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { ILink } from '@shared/interfaces/frontend'

export const redirectAfterLoginAuth = '/home'
export const redirectAfterLoginUnAuth = '/'

export const redirectLinks = {
	isBlocked: '/unauthorized/blocked',
	isSuspended: '/unauthorized/suspended',
	notAdmin: '/home',
}

const links: ILink[] = [
	{
		forLoggedIn: true,
		link: '/home',
		title: 'Home',
		icon: faHouseChimney,
		forRoles: ['ADMIN', 'CLIENT'],
	},

	{
		forLoggedIn: false,
		link: '/',
		title: 'Home',
		icon: faHouseChimney,
		forRoles: [],
	},
	{
		forLoggedIn: true,
		link: '/manage-event',
		title: 'Manage Events',
		icon: faUsers,
		forRoles: ['ADMIN'],
	},

	{
		forLoggedIn: false,
		link: '/log-in',
		title: 'Log-in',
		icon: faRightToBracket,
		isBtn: true,
		forRoles: [],
	},
	{
		forLoggedIn: false,
		link: '/sign-up',
		title: 'Sign-up',
		icon: faUserPlus,
		isBtn: true,
		isBtnHighlight: true,
		forRoles: [],
		// hidden: true,
	},
]

export default links
