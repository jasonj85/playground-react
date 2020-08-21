import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(iKey => {
        return [...Array(props.ingredients[iKey])].map((_, i) => {
            return <BurgerIngredient key={iKey + i} type={iKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please add ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;