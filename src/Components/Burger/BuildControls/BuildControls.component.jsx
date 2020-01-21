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
      {controls.map(ingredient => {
        return <BuildControl 
                  key={ingredient.label} 
                  label={ingredient.label} 
                  added={()=>props.addIngredient(ingredient.type)} />
      })}
    </div>
  )
}

export default buildControls;
