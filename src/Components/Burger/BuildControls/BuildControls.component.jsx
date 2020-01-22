import React from 'react';

import BuildControl from '../BuildControls/BuildControl/BuildControl.component';

import classes from './BuildControls.styles.css';


//Build controls to map through
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(ingredient => {
        return <BuildControl 
                  key={ingredient.label} 
                  label={ingredient.label} 
                  added={()=>props.addIngredient(ingredient.type)}
                  substract={()=>props.subIngredient(ingredient.type)}
                  disabled ={props.disabled[ingredient.type]} />
      })}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}  
        onClick={props.ordered}
      >ORDER NOW</button>
    </div>
  )
}

export default buildControls;
