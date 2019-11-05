import React from 'react'
import './Alerta.css'

import Button from '../Button'

const Alerta = ({texto,display,restart}) => {
    return (
        <div className='alerta' style={{display:display}}>
            <div>{texto}</div>
            <Button label={'restart'} action={restart}/>
        </div>
    )
}

export default Alerta
