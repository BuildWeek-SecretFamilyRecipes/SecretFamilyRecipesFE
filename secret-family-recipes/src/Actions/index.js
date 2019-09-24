import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const GET_RECIPES_START = 'GET_RECIPES_START'
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS'
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE'

const baseEndpoint = 'https://secretfamilyrecipe.herokuapp.com/'

export const registerUser = (newUser) => (dispatch) => {
	console.log('hi', newUser)
	dispatch({
		type: REGISTER_USER_START
	})
	return axios
		.post(
			'localhost:4000/api/auth/register',
			newUser
		)
		.then((res) => {
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: REGISTER_USER_FAILURE,
				payload: err
			})
		})
}

export const loginUser = (user) => (dispatch) => {
	console.log('hi', user)
	dispatch({
		type: LOGIN_USER_START
	})
	return axios
		.post('localhost:4000/api/auth/login', user)
		.then((res) => {
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: LOGIN_USER_FAILURE,
				payload: err
			})
		})
}

export const getRecipes = () => dispatch => {
	console.log('getRecipes called')
	dispatch({
		type: GET_RECIPES_START
	})
}

export const search = query => {
	console.log('search (stub)')
}