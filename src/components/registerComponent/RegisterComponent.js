import PropTypes from "prop-types";
import React from 'react';
import ButtonUi from '../ui/Button/BottonUI';
import { Link } from 'react-router-dom';

const RegisterComponent = (props) => {
    return (
        <div>
            <h1>This is Register Form</h1>
            <Link to="/"><ButtonUi name='go to Home' clicked={props.closeBackdrop} /></Link>
        </div>
    )
}

RegisterComponent.propTypes = {
  closeBackdrop: PropTypes.func
}

export default RegisterComponent;  