import React from 'react'
import './App.css'
import RecipeList from './Components/RecipeList'
import AddRecipeForm from './Components/AddRecipeForm'
import RecipeDetails from './Components/RecipeDetails'
import { Route, Link, NavLink, Redirect } from 'react-router-dom'
import EditRecipeForm from './Components/EditRecipeForm'
import styled from 'styled-components'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import { connect } from 'react-redux'
import Signup from './Components/Signup'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user_id')
		window.location.href = '/login'
	}

	render() {
		return (
			<>
				<header>
					<h1>Secret Family Recipes</h1>
					<Route
						path={['/recipes', '/addRecipe', '/editRecipe']}
						render={() => (
							<nav>
								<NavLink
									to='/recipes'
								>All Recipes</NavLink>
								<NavLink
									to='/addRecipe'
								>Add Recipe</NavLink>
								<a onClick={(event) => this.logout()}>Log Out</a>
							</nav>
						)}
					/>
					<Route
						exact
						path='/login'
						render={() => (
							<nav>
								<NavLink
									to='/signup'
								>Sign Up</NavLink>
							</nav>
						)}
					/>
					<Route
						exact
						path='/signup'
						render={() => (
							<nav>
								<NavLink
									to='/login'
								>Log In</NavLink>
							</nav>
						)}
					/>
				</header>

				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route
					exact
					path='/recipes/share/:id'
					component={RecipeDetails}
				/>
				<PrivateRoute
					exact
					path='/recipes'
					component={RecipeList}
				/>
				<PrivateRoute
					exact
					path='/recipes/:id'
					component={RecipeDetails}
				/>
				<PrivateRoute
					path='/addRecipe'
					component={AddRecipeForm}
				/>
				<PrivateRoute
					path='/editRecipe/:id'
					component={EditRecipeForm}
				/>
				{
					localStorage.getItem('token') ? (
						<Redirect from="/" to="/recipes" />
					) : (
							<Redirect from="/" to="/login" />
						)
				}
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn
})

export default connect(
	mapStateToProps,
	{}
)(App)