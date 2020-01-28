import React from 'react';
import classes from './Layout.styles.css';

//Component imports
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.component';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        <BurgerBuilder />
      </main>
    </Aux>
  )
}

export default layout;
