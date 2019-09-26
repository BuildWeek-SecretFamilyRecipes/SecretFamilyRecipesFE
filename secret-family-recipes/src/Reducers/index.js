import {
	ADD_RECIPE_SUCCESS,
	ADD_RECIPE_START,
	ADD_RECIPE_FAILURE,
	SEARCH_RECIPE,
	EDIT_RECIPE_START,
	EDIT_RECIPE_SUCCESS,
	EDIT_RECIPE_FAILURE,
	GET_RECIPES_START,
	GET_RECIPES_SUCCESS,
	GET_RECIPES_FAILURE,
	GET_RECIPE_START,
	GET_RECIPE_SUCCESS,
	GET_RECIPE_FAILURE,
	DELETE_RECIPE_SUCCESS,
	DELETE_RECIPE_FAILURE,
	DELETE_RECIPE_START,
	GET_CATEGORIES_START,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAILURE,
	REGISTER_USER_FAILURE,
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS
} from '../Actions'

const initialState = {
	isLoggedIn: false,
	recipes: [],
	recipesAccurate: false,
	filteredRecipes: [],
	categories: [],
	addingRecipe: false,
	fetchingRecipes: false,
	fetchingRecipe: false,
	updatingRecipe: false,
	deletingRecipe: false,
	fetchingCategories: false,
	editingRecipe: false,
	error: null,
	registeringUser: false,
	loggingIn: false,
	recipe: {
		title: '',
		source: '',
		description: '',
		amount: '',
		ingredients: '',
		measurement: '',
		instructions: '',
		category: ''
	}
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_RECIPES_START:
			return {
				...state,
				fetchingRecipes: true
			}
		case GET_RECIPES_SUCCESS:
			return {
				...state,
				fetchingRecipes: false,
				recipes: action.payload,
				filteredRecipes: action.payload,
				recipesAccurate: true
			}
		case GET_RECIPES_FAILURE:
			return {
				...state,
				fetchingRecipes: false,
				recipesAccurate: false,
				error: action.payload
			}
		case GET_RECIPE_START:
			return {
				...state,
				fetchingRecipe: true
			}
		case GET_RECIPE_SUCCESS:
			// console.log('either get the recipe or go hungry: ', action.payload)
			return {
				...state,
				fetchingRecipe: false,
				recipe: action.payload
			}
		case GET_RECIPE_FAILURE:
			return {
				...state,
				fetchingRecipe: false,
				error: action.payload
			}
		case DELETE_RECIPE_START:
			return {
				...state,
				deletingRecipe: true
			}
		case DELETE_RECIPE_SUCCESS:
			return {
				...state,
				deletingRecipe: false,
				recipesAccurate: false
			}
		case DELETE_RECIPE_FAILURE:
			return {
				...state,
				deletingRecipe: false,
				error: action.payload
			}
		case ADD_RECIPE_SUCCESS:
			return {
				...state,
				addingRecipe: true,
				recipesAccurate: false
			}
		case ADD_RECIPE_START:
			return {
				...state,
				addingRecipe: true
			}
		case ADD_RECIPE_FAILURE:
			return {
				...state,
				addingRecipe: false,
				error: action.payload
			}
		case SEARCH_RECIPE:
			return {
				...state,
				filteredRecipes: action.payload
			}
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
		case EDIT_RECIPE_START:
			return {
				...state,
				editingRecipe: true
			}
		case EDIT_RECIPE_SUCCESS:
			return {
				...state,
				editingRecipe: false,
				recipesAccurate: false
			}
		case EDIT_RECIPE_FAILURE:
			return {
				...state,
				editingRecipe: false
			}
		case GET_CATEGORIES_START:
			//note: having specific categories isn't implemented, delete this if it doesn't break anything
			return {
				...state,
				fetchingCategories: true
			}
		case GET_CATEGORIES_SUCCESS:
			return {
				...state,
				fetchingCategories: false,
				categories: action.payload
			}
		case GET_CATEGORIES_FAILURE:
			return {
				...state,
				fetchingCategories: false,
				error: action.payload
			}
		case LOGIN_USER_START:
			return {
				...state,
				loggingIn: true
			}
		case LOGIN_USER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			// localStorage.setItem('user_id', action.payload.user_id)
			return {
				...state,
				loggingIn: false,
				isLoggedIn: true
			}
		case LOGIN_USER_FAILURE:
			return {
				...state,
				loggingIn: false
			}

		default:
			return state
	}
}

export default reducer