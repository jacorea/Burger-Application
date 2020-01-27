import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.component';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map((ingKey,i) => {
      return (
        <li key={ingKey+i}>
          <span style= {{textTransform: 'Capitalize', fontWeight: 'bold'}}>{ingKey} - </span>
            {props.ingredients[ingKey]}
        </li>
      )
    })
  return (
    <Aux>
      <h3>Burger Order Summary</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger" >CANCEL</Button>
      <Button clicked={props.purchaseContinued}   btnType="Success" >PURCHASE</Button>
    </Aux>
  )
}

export default orderSummary;
