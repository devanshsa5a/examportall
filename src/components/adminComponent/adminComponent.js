import React from 'react'
import classes from './adminComponent.module.css';

const AdminComponent = () => {
    return (
        <div>
            <h2>Admin login for BDCoE Member</h2>
            <hr width="70%" />
            <form action="/" method="post">
                <div className={classes.Imgcontainer}>
                    <img src="../Bdcoe/BDCoE.png" alt="bdcoe" className={classes.Avatar} />
                </div>
                <div className={classes.Container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button className={classes.Cancelbtn} type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}

export default AdminComponent;