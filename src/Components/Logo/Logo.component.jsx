import React from 'react';
import classes from './Logo.styles.css';
import burgerLogo from '../../../src/assets/Images/burger-logo.png';

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} />
    </div>
  )
}

export default logo;
