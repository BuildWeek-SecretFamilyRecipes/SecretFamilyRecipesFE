import axios from 'axios'
import axiosWithAuth from '../Components/axiosWithAuth'

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS'
export const ADD_RECIPE_START = 'ADD_RECIPE_START'
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE'

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS'
export const EDIT_RECIPE_START = 'EDIT_RECIPE_START'
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE'

export const SEARCH_RECIPE = 'SEARCH_RECIPE'

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE'

export const GET_RECIPE_START = 'GET_RECIPE_START'
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS'
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE'

export const GET_RECIPES_START = 'GET_RECIPES_START'
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS'
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE'

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const EDIT_RECIPE = 'EDIT_RECIPE'

const baseEndpoint = 'https://secret-family-recipe.herokuapp.com/api/auth/'

export const addRecipe = (newRecipe) => (dispatch) => {
	newRecipe.user_id = localStorage.getItem('user_id')
	console.log('JJJJJJ', newRecipe)
	dispatch({ type: ADD_RECIPE_START })

	axiosWithAuth()
		.post(baseEndpoint + 'new-recipe', newRecipe)
		.then((res) => {
			console.log('lol', res.data)
			return dispatch({
				type: ADD_RECIPE_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			console.log('ERROR', err)
			dispatch({
				type: ADD_RECIPE_FAILURE,
				payload: err
			})
		})
}

export const deleteRecipe = (id) => (dispatch) => {
	dispatch({
		type: DELETE_RECIPE_START
	})
	return axiosWithAuth()
		.delete(baseEndpoint + 'recipes/' + id)
		.then((res) => {
			dispatch({
				type: DELETE_RECIPE_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: DELETE_RECIPE_FAILURE,
				payload: err
			})
		})
}

export const editRecipe = (updatedRecipe) => (dispatch) => {
	dispatch({
		type: EDIT_RECIPE_SUCCESS
	})
	let id = updatedRecipe.id
	return axiosWithAuth()
		.put(baseEndpoint + 'recipes/' + id, updatedRecipe)
		.then((res) => {
			dispatch({
				type: EDIT_RECIPE_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: EDIT_RECIPE_FAILURE,
				payload: err
			})
		})
}

export const getRecipe = (id) => (dispatch) => {
	dispatch({
		type: GET_RECIPE_START
	})
	return axiosWithAuth()
		.get(
			`https://secret-family-recipe.herokuapp.com/api/auth/find-recipes/${id}`
		)
		.then((res) => {
			dispatch({
				type: GET_RECIPE_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: GET_RECIPE_FAILURE,
				payload: err
			})
		})
}

export const getRecipes = () => (dispatch) => {
	dispatch({
		type: GET_RECIPES_START
	})
	return axiosWithAuth()
		.get(baseEndpoint + 'recipes')
		.then((res) => {
			dispatch({
				type: GET_RECIPES_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: GET_RECIPES_FAILURE,
				payload: err
			})
		})
}

export const registerUser = (newUser) => (dispatch) => {
	console.log('hi', newUser)
	dispatch({
		type: REGISTER_USER_START
	})
	return axios
		.post(
			'https://secret-family-recipe.herokuapp.com/api/auth/register',
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
	return axiosWithAuth()
		.post('https://secret-family-recipe.herokuapp.com/api/auth/login', user)
		.then((res) => {
			console.log('DATE', res.data)
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

export const getCategories = () => (dispatch) => {
	dispatch({
		type: GET_CATEGORIES_START
	})
	return axiosWithAuth()
		.get(baseEndpoint + 'categories')
		.then((res) => {
			dispatch({
				type: GET_CATEGORIES_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: GET_CATEGORIES_FAILURE,
				payload: err
			})
		})
}

export const search = (query) => {
	console.log('search (stub)')
}