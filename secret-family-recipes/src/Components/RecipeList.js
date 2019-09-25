import React from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { getRecipes, search } from '../Actions'
import './RecipeList.css'

const RecipeLists = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

const Quote = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
`

class RecipeList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		if (!this.props.upToDate) {
			this.props.getRecipes()
		}
	}

	render() {
		console.log('recipelist props', this.props)
		// let recipesToDisplay = []
		// if (this.props.recipes.length > 0) {
		// 	recipesToDisplay = this.props.recipes
		// }
		return (
			<div>
				<div className='main-image'>
					<Quote>
						<p></p>
					</Quote>
				</div>
				<SearchBar />
				<RecipeLists>
				{this.props.filteredRecipes.length === 0 ? (
						<h2>no recipes</h2>
					) : this.props.filteredRecipes.map((recipe) => (
						<Recipe recipe={recipe} />
					))}
				</RecipeLists>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	recipes: state.recipes || [],
	filteredRecipes: state.filteredRecipes || [],
	upToDate: state.recipesAccurate,
	token: state.token
})

export default connect(
	mapStateToProps,
	{ getRecipes, search }
)(RecipeList)