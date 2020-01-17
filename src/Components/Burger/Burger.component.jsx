import React from 'react';
import classes from './Burger.styles.css';

//importing components 
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.component';

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {/* <BurgerIngredients type="bacon" /> */}
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default burger;
