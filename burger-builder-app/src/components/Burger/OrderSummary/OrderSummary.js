import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(iKey => {
            return (
                <li key={iKey}>
                    <span style={{ textTransform: 'capitalize' }}>{iKey}</span>:{props.ingredients[iKey]}
                </li>); 
        });

    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>You have chosen the following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Price of Burger: £{props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.orderCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.orderContinued}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;