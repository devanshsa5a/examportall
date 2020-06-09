import React from 'react';
import classes from './navTestComponent.module.css';


const NavTestComponent = () => {
    return (
        <div className={classes.Nav}>
            <div className={classes.Logo}>
                <div className={classes.Item}>
                    <p>BigDataCOE</p>
                </div>
            </div>
            <div className={classes.LeftContent}>
                <div className={classes.Item}>
                    <p>Submit Test</p>
                </div>
                <div className={classes.Item}>
                    <p>Timmer</p>
                </div>
            </div>
        </div>
    )
}

export default NavTestComponent;