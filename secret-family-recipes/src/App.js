import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import { connect } from 'react-redux'
import Signup from './Components/Signup'

// @tablet: (max-width: 800px)
// @phone: (max-width: 500px)
// @small-desktop: (max-width: 1265px)

const AppDiv = styled.div`
	max-width: 1265px;
	height: 100%;
	margin: 0 0;
	font-family: 'Cherry Swash', cursive;
	@media (max-width: 1265px) {
		width: 100%;
	}
	@media (max-width: 800px) {
		width: 100%;
	}
`

const Header = styled.header`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 45px;
	width: 1265px;
	font-family: 'Mitr', sans-serif;
	background-color: #D35269;
	@media (max-width: 1265px) {
		width: 100%;
	}
	@media (max-width: 800px) {
		width: 100%;
		justify-content: center;
	}
	@media (max-width: 500px) {
		width: 100%;
		justify-content: center;
	}
`

const SubHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	margin: 20px;
	color: #558B6E;
	@media (max-width: 800px) {
		font-size: 20px;
		justify-content: center;
	}
	@media (max-width: 500px) {
		font-size: 15px;
		justify-content: center;
	}
`

const MenuBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	font-size: 20px;
	border-top: solid 1px #1f1f44;
	border-bottom: solid 1px #1f1f44;
	@media (max-width: 1265px) {
		width: 100%;
	}
	@media (max-width: 800px) {
		width: 100%;
		justify-content: center;
	}
	@media (max-width: 500px) {
		width: 100%;
		justify-content: center;
		padding-left: 0;
	}
`

const NavP = styled.p`
	padding: 0 25px;
	color: white;
	:hover {
		color: #a00000;
	}
	@media (max-width: 500px) {
		font-size: 15px;
	}
`

const MenuP = styled.p`
	padding: 0 25px;
	color: #a00000;
	:hover {
		color: #1f1f44;
	}
	@media (max-width: 500px) {
		font-size: 15px;
	}
`

const MainContent = styled.div`
	width: 85%;
	margin: 0 auto;
	@media (max-width: 1265px) {
		justify-content: center;
		width: 100%;
		align-items: center;
	}
	@media (max-width: 800px) {
		justify-content: center;
		width: 100%;
		align-items: center;
	}
	@media (max-width: 500px) {
		justify-content: center;
		width: 100%;
		align-items: center;
	}
`

const Footer = styled.footer`
	height: 45px;
	width: 1265px;
	background-color: #D35269;
	margin-top: 50px;
	@media (max-width: 1265px) {
		width: 100%;
		justify-content: center;
	}
	@media (max-width: 800px) {
		width: 100%;
		justify-content: center;
	}
	@media (max-width: 500px) {
		width: 100%;
		justify-content: center;
	}
`

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	logout = () => {
		localStorage.removeItem('token')
		window.location.href = '/login'
	}

	render() {
		return (
			<AppDiv>
				<Header>
					{localStorage.getItem('token') ? null : (
						<Link to='/login' style={{ textDecoration: 'none' }}>
							<NavP> LOG IN </NavP>
						</Link>
					)}

					{localStorage.getItem('token') ? null : (
						<Link to='/signup' style={{ textDecoration: 'none' }}>
							<NavP> SIGN UP </NavP>
						</Link>
					)}

					{localStorage.getItem('token') ? (
						<NavP onClick={(event) => this.logout()}>
							{' '}
							LOG OUT{' '}
						</NavP>
					) : null}
				</Header>

				<MainContent>
					<SubHeader>
						<h1>Secret Family Recipes</h1>
					</SubHeader>

					<MenuBar>
						<Link to='/recipes' style={{ textDecoration: 'none' }}>
							<MenuP>View Recipes</MenuP>
						</Link>
						<Link
							to='/addRecipe'
							style={{ textDecoration: 'none' }}>
							<MenuP>Add Recipe</MenuP>
						</Link>
					</MenuBar>

					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
					{/* <PrivateRoute exact path='/' component={Home} /> */}
				</MainContent>
				<Footer>
					<p></p>
				</Footer>
			</AppDiv>
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