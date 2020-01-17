import React, { Component } from 'react';
import './BurgerBuilder.styles.css';
import Aux from '../../hoc/Aux';

//imported components 
import Burger from '../../components/Burger/Burger.component';

export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger Control Component</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
