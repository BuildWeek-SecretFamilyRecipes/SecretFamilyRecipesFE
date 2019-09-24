import React from 'react';
// import { deleteRecipe } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const EachRecipe = styled.div` 
display         : flex;
flex-direction  : column;
justify-content : center;
align-items     : center;
width           : 318px;
height          : 250px;
margin          : 30px 15px;
line-height     : 25px;
border          : 2px dotted #1f1f44;
border-radius: 10px;
border-top-right-radius   : 10px;
border-top-left-radius   : 10px;
@media (max-width: 500px) {
height: 280px;
    }
`;

const TitleAndCategory = styled.div`
display         : flex;
flex-direction  : column;
justify-content : center;
align-items     : center;
width           : 318px;
height          : 250px;
background-color: #e3e3e3;
opacity         : 0.9;
border-top-right-radius   : 10px;
border-top-left-radius   : 10px;
`;

const Title = styled.p`
font-size: 22px;
padding: 25px;
display: flex;
justify-content: center;
font-weight: bold;
color: #1f1f44;
`;

const Category = styled.p`
font-size: 20px;
display: flex;
justify-content: center;
font-family: 'Nunito', sans-serif;
font-style: italic;
`;

const Button = styled.button`
margin: 20px 0;
width: 150px;
height: 40px;
font-family: 'Nunito', sans-serif;
background: #6d748c;
color: white;
font-size: 15px;
border-radius: 10px;
outline: none;
:hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  
  }
`;

class Recipe extends React.Component {
    render() {
        return (

            <EachRecipe>
                <TitleAndCategory>
                    <Title> <strong>~ {this.props.recipe.name} ~</strong></Title>
                    <Category>{this.props.recipe.category}</Category>
                </TitleAndCategory>

                <Link to={`/recipes/${this.props.recipe.id}`}><Button>Read Recipe</Button></Link>
            </EachRecipe>
        )
    }
}

export default connect(
    null, {})(
        Recipe);