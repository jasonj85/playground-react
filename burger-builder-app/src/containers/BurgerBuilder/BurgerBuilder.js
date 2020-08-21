import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        canOrder: false,
        ordering: false
    }

    updateCanOrderState(ingredients) {
        const sum = Object.keys(ingredients).map(iKey => {
            return ingredients[iKey];
        }).reduce((sum, el) => {
            return sum + el;
        });

        this.setState({canOrder: sum > 0});
    }

    addIngredientHandler = (type) => {
        const existingCount = this.state.ingredients[type];
        const updatedCount = existingCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addedPrice;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updateCanOrderState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const existingCount = this.state.ingredients[type];

        // make sure there is an ingredient left to remove
        if (existingCount > 0) {
            const updatedCount = existingCount - 1;

            const updatedIngredients = {
                ...this.state.ingredients
            };

            updatedIngredients[type] = updatedCount;
            const minusPrice = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - minusPrice;

            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            });

            this.updateCanOrderState(updatedIngredients);
        }
    }

    orderHandler = () => {
        this.setState({ordering: true});
    }

    orderCancelHandler = () => {
        this.setState({ordering: false});
    }

    orderContinueHandler = () => {
        alert('You have continued');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.ordering} modalClosed={this.orderCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        orderCancelled={this.orderCancelHandler}
                        orderContinued={this.orderContinueHandler} 
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    canOrder={this.state.canOrder}
                    price={this.state.totalPrice}
                    ordered={this.orderHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;