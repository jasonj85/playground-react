import React from 'react';
import classes from './PizzaImage.css';

const pizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg} />
  </div>
);

export default pizzaImage;