import {
	REGISTER_USER_FAILURE,
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS
} from '../Actions'

const initialState = {
	isLoggedIn: false,
	registeringUser: false,
	loggingIn: false
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_USER_START:
			return {
				...state,
				registeringUser: true
			}
		case REGISTER_USER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				registeringUser: false,
				isLoggedIn: true
			}
		case REGISTER_USER_FAILURE:
			return {
				...state,
				registeringUser: false,
				error: action.payload
			}
		case LOGIN_USER_START:
			return {
				...state,
				loggingIn: true
			}
		case LOGIN_USER_SUCCESS:
			console.log(action);
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				loggingIn: false,
				isLoggedIn: true
			}
		case LOGIN_USER_FAILURE:
			console.log(state);
			return {
				...state,
				loggingIn: false
			}

		default:
			return state
	}
}

export default reducer