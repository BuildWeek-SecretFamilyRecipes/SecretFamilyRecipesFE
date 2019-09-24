import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import { getRecipes } from '../Actions';
import './RecipeList.css';

const RecipeLists = styled.div`
    display        : flex;
    justify-content: center;
    flex-wrap      : wrap;
    `;

const Quote = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    `;


class RecipeList extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        this.props.getRecipes();
        console.log(this.props)
        let recipesToDisplay = [];
        if (this.props.filteredRecipes.length > 0) {
            recipesToDisplay = this.props.filteredRecipes;
        }
        else {
            recipesToDisplay = this.props.recipes;
        }
        return (
            <div>

                <div className='main-image'>
                    <Quote>
                        <p></p>
                    </Quote>
                </div>
                <SearchBar />
                <RecipeLists>
                    {recipesToDisplay.map(recipe => <Recipe recipe={recipe} />)}
                </RecipeLists>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes || [],
    filteredRecipes: state.filteredRecipes || [],
    token: state.token
})

export default connect(
    mapStateToProps, { getRecipes })(RecipeList);