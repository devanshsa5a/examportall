import React from 'react'
const ButtonUi = (props) => {
    return (
        <button onClick={props.clicked}>{props.name}</button>
    )
}
export default ButtonUi;