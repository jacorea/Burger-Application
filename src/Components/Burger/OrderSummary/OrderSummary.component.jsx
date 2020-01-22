import React from 'react';
import Aux from '../../../hoc/Aux';

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
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>PURCHASE</button>
    </Aux>
  )
}

export default orderSummary;
