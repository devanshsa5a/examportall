import React from 'react'
import classes from './navhomecomponent.module.css';

const NavHomeComponent = () => {
    return (
        <div className={classes.Nav}>
            <div class="logo">
                <div class="item">
                    <p>BigDataCOE</p>
                </div>
            </div>
            <div className={classes.LeftContent}>
                <div className={classes.Item}>
                    <p>Register</p>
                </div>
                <div className={classes.Item}>
                    <p>Login</p>
                </div>
                <div className={classes.Item}>
                    <p>About</p>
                </div>
                <div className={classes.Item}>
                    <p>Home</p>
                </div>
            </div>
        </div>
    )
}

export default NavHomeComponent;