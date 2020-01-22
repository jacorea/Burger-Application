import React, { Component } from 'react';
import './BurgerBuilder.styles.css';
import Aux from '../../hoc/Aux';

//imported components 
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';
import Modal from '../../components/UI/Modal/Modal.component';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component';


const INGREDIENT_PRICES = {
  salad: 0.00,
  cheese: 0.10,
  meat: 1.25,
  bacon: 0.50
}

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0, 
      cheese: 0, 
      meat: 0
    }, 
    totalPrice: 4,
    purchasable: false,
    purchaseReady: false
  }

  purchaseStatus = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey]
      })
      .reduce((sum,el) =>{
        return sum + el
      }, 0);
      this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({purchaseReady: true });
  }

  cancelOrderHandler = () => {
    this.setState({purchaseReady: false });
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
    this.purchaseStatus(updatedIngredients);
  }

  removeIngredientHandler =(type) => {
      //getting value count of ingredients
      const oldCount = this.state.ingredients[type];
      //updating count by 1
      if( oldCount <= 0) {
        return;
      }
      const updatedCount = oldCount - 1;
      //Need to make copy of state rather than updating ingredient state directly
      const updatedIngredients = {...this.state.ingredients};
      //updating value count of ingredients each time button is clicked
      updatedIngredients[type] = updatedCount;
  
      //How much adding to totalPrice per ingredient deducted
      const priceDeduction =  INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      //new price after adding ingredient
      const newPrice = oldPrice - priceDeduction;
      //updating ingredients and totalPrice state
      this.setState({ingredients: updatedIngredients, totalPrice: newPrice });
      this.purchaseStatus(updatedIngredients);
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchaseReady} modalClosed={this.cancelOrderHandler}>
          <OrderSummary  ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          subIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable = {this.state.purchasable}  
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;
