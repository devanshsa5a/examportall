import React from 'react'
import classes from './footerComponent.module.css';
const FooterComponent = () => {
    return (
        <div className={classes.FooterSection}>
            <div className={classes.FooterTop}>
                <p className={classes.Item}>
                    Insta
            </p>
                <p className={classes.Item}>
                    Medium
            </p>
                <p className={classes.Item}>
                    Mail</p>
            </div>

            <hr width="70%" />
            <p>BDCoE &copy; Copywright 2020</p>
        </div>
    )

}
export default FooterComponent;