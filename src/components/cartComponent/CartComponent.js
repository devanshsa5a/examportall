import React from 'react'
import classes from './cartComponent.module.css'
import CartItemComponent from '../cartItemComponent/CartItemComponent';

const CartComponent = () => {
    return (
        <div className={classes.CartSection}>
            <CartItemComponent heading='heading1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor quidem, aperiam explicabo corporis
            debitis officiis error libero accusamus! Vitae cupiditate fugit ab molestias porro maiores eos,
                distinctio ad. Doloremque.</CartItemComponent>
            <CartItemComponent heading='heading2' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor quidem, aperiam explicabo corporis
            debitis officiis error libero accusamus! Vitae cupiditate fugit ab molestias porro maiores eos,
                distinctio ad. Doloremque.</CartItemComponent>
            <CartItemComponent heading='heading3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor quidem, aperiam explicabo corporis
            debitis officiis error libero accusamus! Vitae cupiditate fugit ab molestias porro maiores eos,
                distinctio ad. Doloremque. </CartItemComponent>
        </div>

    )
}

export default CartComponent;