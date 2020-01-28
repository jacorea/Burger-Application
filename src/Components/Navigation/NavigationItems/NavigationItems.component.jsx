import React from 'react';
import classes from './NavigationItems.styles.css';

import NavItem from '../NavigationItems/NavigationItem/NavigationItem.component';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems} >
      <NavItem link="/a" active >BurgerBuilder</NavItem>
      <NavItem link="/b" >CheckOut</NavItem>
    </ul>
  )
}

export default navigationItems
