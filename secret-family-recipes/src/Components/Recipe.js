import React from 'react'
// import { deleteRecipe } from '../Actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EachRecipe = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 318px;
	height: 250px;
	margin: 30px 15px;
	line-height: 25px;
	border: 2px solid #2E0014;
	border-radius: 10px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	@media (max-width: 500px) {
		height: 280px;
	}
`

const TitleAndCategory = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 318px;
	height: 250px;
	background-color: #2E0014;
	// opacity: 0.9;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`

const Title = styled.p`
	font-size: 22px;
	padding: 25px;
	display: flex;
	justify-content: center;
	font-weight: bold;
	color: #FFFF;
`

const Category = styled.p`
	font-size: 20px;
	display: flex;
	justify-content: center;
	font-family: 'Nunito', sans-serif;
	color: #FFFF;
	font-style: italic;
`

const Button = styled.button`
	margin: 20px 0;
	width: 150px;
	height: 40px;
	font-family: 'Nunito', sans-serif;
	background: #FFFF;
	border: 2px solid #2E0014;
	color: #2E0014;
	font-size: 15px;
	border-radius: 10px;
	outline: none;
	:hover {
		// background-color: white;
		// color: #6d748c;
		border: none;
	}
`

class Recipe extends React.Component {
	render() {
		return (
			<EachRecipe>
				<TitleAndCategory>
					<Title>
						{' '}
						<strong>{this.props.recipe.title}</strong>
					</Title>
					<Category>{this.props.recipe.category}</Category>
				</TitleAndCategory>

				<Link to={`/recipes/${this.props.recipe.id}`}>
					<Button>Read Recipe</Button>
				</Link>
			</EachRecipe>
		)
	}
}

export default connect(
	null,
	{}
)(Recipe)