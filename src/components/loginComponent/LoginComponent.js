import PropTypes from "prop-types";
import React from 'react';
import ButtonUi from '../ui/Button/BottonUI';
import { Link } from 'react-router-dom';

const LoginComponent = (props) => {
    return (
        <div>
            <h1>This is Login Form</h1>
            <Link to="/Test"><ButtonUi name='go to test' clicked={props.closeBackdrop} /></Link>
        </div>
    )
}

LoginComponent.propTypes = {
    closeBackdrop: PropTypes.func
}

export default LoginComponent;  