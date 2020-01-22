import React from 'react'
import classes from './Backdrop.styles.css';

const backdrop = (props) => {
  return (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
  )
}

export default backdrop;
