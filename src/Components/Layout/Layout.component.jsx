import React from 'react';
import classes from './Layout.styles.css';

//Component imports
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.component';
const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, sideDrawer, backdrop</div>
      <main className={classes.Content}>
        <BurgerBuilder />
      </main>
    </Aux>
  )
}

export default layout;
