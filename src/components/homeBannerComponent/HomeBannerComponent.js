import React from 'react'
import classes from './homeBannerComponent.module.css';

const HomeBannerComponent = () => {
    return (
        <div className={classes.Banner}>
            <div class={classes.BannerContent}>
                <p>Welcome to the bigdata coe test portal</p>
                <p>Recruitment Drive 2k20</p>
                <p>First time walla paste Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi repellendus
            </p>
                <button>Login</button>
                <button>Register</button>
            </div>

        </div>
    )
}

export default HomeBannerComponent;