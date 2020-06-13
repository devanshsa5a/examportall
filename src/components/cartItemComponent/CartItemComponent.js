import PropTypes from "prop-types";
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

CartItemComponent.propTypes = {
    children: PropTypes.any,
    heading: PropTypes.string
}

export default CartItemComponent;