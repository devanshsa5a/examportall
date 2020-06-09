import React from 'react'
import classes from './navhomecomponent.module.css';

const NavHomeComponent = () => {
    return (
        <div className={classes.Nav}>
            <div className="logo">
                <div className={classes.Item}>
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