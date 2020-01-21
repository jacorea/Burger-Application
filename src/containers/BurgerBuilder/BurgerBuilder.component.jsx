import React, { Component } from 'react';
import './BurgerBuilder.styles.css';
import Aux from '../../hoc/Aux';

//imported components 
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';

const INGREDIENT_PRICES = {
  salad: 0.00,
  cheese: 0.10,
  meat: 1.25,
  bacon: 0.50
}

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1, 
      cheese: 1, 
      meat: 1
    }, 
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    //getting value count of ingredients
    const oldCount = this.state.ingredients[type];
    //updating count by 1
    const updatedCount = oldCount + 1;
    //Need to make copy of state rather than updating ingredient state directly
    const updatedIngredients = {...this.state.ingredients};
    //updating value count of ingredients each time button is clicked
    updatedIngredients[type] = updatedCount;

    //How much adding to totalPrice per ingredient added
    const priceAddition =  INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    //new price after adding ingredient
    const newPrice = oldPrice + priceAddition;
    //updating ingredients and totalPrice state
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice });

  }

  removeIngredientHandler =(type) => {

  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredientHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
