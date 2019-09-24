import React from "react";
import { editRecipe, getRecipe } from "../Actions";
import { connect } from "react-redux";
import styled from "styled-components";
import Recipe from "./Recipe";
import "./EditRecipeForm.css";


const RecipeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
height: 750px;
`;

const EditInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 600px;
  background-color: #e3e3e3;
  opacity: 0.9;
  @media (max-width: 800px) {
  width: 500px;
  height: 650px;
  }
  @media (max-width: 500px) {
  width: 400px;
  height: 650px;
}
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  /* margin: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
color: #0e1111 ;
font-size: 15px;
padding : 0 10px;
`;

const EachInput = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
  font-family: 'Crimson Text', serif;
font-size: 15px;
margin: 10px;
@media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0 0;
`;

const Button = styled.button`
margin: 20px;
width: 180px;
height: 40px;
background: #6d748c;
color: white;
font-size: 15px;
outline: none;
:hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  }
`;

class EditRecipeForm extends React.Component {
    state = {
        id: "",
        name: "",
        source: "",
        ingredients: "",
        instructions: ""
    };

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })
        this.props.getRecipe(this.props.match.params.id);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    editRecipe = event => {
        event.preventDefault();
        this.props.editRecipe(this.state);
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    };

    cancelEdit = event => {
        event.preventDefault();
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    };


    render() {
        if (this.state.id !== this.props.recipe.id) {
            this.setState({
                id: this.props.recipe.id,
                name: this.props.recipe.name,
                source: this.props.recipe.source,
                ingredients: this.props.recipe.ingredients,
                instructions: this.props.recipe.instructions
            })
        }

        return (
            <div>
                <div className="editImage">
                    <RecipeForm>
                        <EditInput>
                            <p className='title'>Make it even better...</p>
                            <EachInput>
                                <div className='items'>
                                    <p>NAME :</p></div>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="name"
                                    value={this.state.name}
                                    name="name"
                                />
                            </EachInput>

                            <EachInput>
                                <div className='items'>
                                    <p>SOURCE :</p></div>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="source"
                                    value={this.state.source}
                                    name="source"
                                />
                            </EachInput>

                            <EachInput>
                                <div className='items'>
                                    <p>INGREDIENTS :</p></div>
                                <textarea className='ingredientsInput'

                                    onChange={this.handleChange}
                                    placeholder="ingredients"
                                    value={this.state.ingredients}
                                    name="ingredients"
                                ></textarea>
                            </EachInput>

                            <EachInput>
                                <div className='items'>
                                    <p>INSTRUCTIONS :</p></div>
                                <textarea className='instructionsInput'

                                    onChange={this.handleChange}
                                    placeholder="instructions"
                                    value={this.state.instructions}
                                    name="instructions"
                                ></textarea>
                            </EachInput>
                            <ButtonDiv>

                                <Button
                                    className="button"
                                    type="submit"
                                    onClick={event => this.editRecipe(event)}
                                >
                                    {" "}
                            Update Recipe{" "}
                                </Button>
                                <Button onClick={event => this.cancelEdit(event)}>Cancel</Button>
                            </ButtonDiv>
                        </EditInput>
                    </RecipeForm>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe
});

export default connect(
    mapStateToProps,
    { editRecipe, getRecipe }
)(EditRecipeForm);