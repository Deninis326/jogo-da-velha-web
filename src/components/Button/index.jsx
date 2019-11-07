import React from 'react'
import './Button.css'

const Button = ({ type, label, action }) => {
    
    return (
        <button
            className={type}
            onClick={() => action()}
            label={'RECOMEÇAR'} > {label} </button>
    )
}

export default Button
