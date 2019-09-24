import React from "react"
import { connect } from 'react-redux'
import { registerUser, loginUser } from '../Actions'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Login.css'

const Input = styled.input`
	width: 260px;
	height: 35px;
	margin: 5px 0;
	font-size: 13px;
	border-style: none;
	border-bottom: #6d748c 1px solid;
	padding: 5px;
	font-weight: bold;
	outline: none;
`

const LoginForm = styled.div`
	width: 400px;
	margin: 50px auto;
	height: 300px;
	display: flex;
	font-family: 'Crimson Text', serif;
	flex-direction: column;
	align-items: center;
	border: 1px solid lightgrey;
	padding: 20px;
	background-color: #D35269;
	opacity: 0.9;
	@media (max-width: 800px) {
		width: 350px;
		height: 300px;
	}
	@media (max-width: 500px) {
		width: 250px;
		height: 300px;
	}
`

const Button = styled.button`
	width: 260px;
	height: 35px;
	margin: 5px 0;
	font-weight: bold;
	font-family: 'Crimson Text', serif;
	background: #FFFF;
	color: #D35269;
	font-size: 20px;
	outline: none;
	:hover {
		background-color: white;
		color: #6d748c;
		border: 2px solid #6d748c;
	}
`

const LoginButton = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	}

	handleChanges = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		})
	}

	registerUser = (e) => {
		e.preventDefault()
		this.props.registerUser(this.state.credentials)
	}

	loginUser = (e) => {
		e.preventDefault()
		this.props.loginUser(this.state.credentials)
	}

	render() {
		if (localStorage.getItem('token')) {
			this.props.history.push('/recipes')
		}

		return (
			<div>
				<div className='image'>
					<LoginForm>
						<h1>Welcome Back</h1>
						<Input
							type='text'
							name='username'
							placeholder='Username'
							value={this.state.credentials.username}
							onChange={this.handleChanges}
						/>
						<Input
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.credentials.password}
							onChange={this.handleChanges}
						/>
						<LoginButton>
							<Link to='/recipes'>
								<Button
									onClick={(event) => this.loginUser(event)}>
									Login
								</Button>
							</Link>
						</LoginButton>
					</LoginForm>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn
})

export default connect(
	mapStateToProps,
	{ registerUser, loginUser }
)(Login)