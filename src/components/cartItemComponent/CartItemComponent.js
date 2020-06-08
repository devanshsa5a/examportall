import React from 'react'
import classes from './cartItemComponent.module.css';

const CartItemComponent = (props) => {
    return (
        <div className={classes.Cart}>
            <img src="..." alt="img" />
            <p>{props.heading}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default CartItemComponent;