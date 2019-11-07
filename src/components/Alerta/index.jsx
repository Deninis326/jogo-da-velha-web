import React from 'react'
import './Alerta.css'

import Button from '../Button'

const Alerta = ({ texto, display, reStart }) => {
    return (
        <div className='alerta' style={{ display: display }}>
            <div>{texto}</div>
            <Button label={'restart'} action={reStart} />
        </div>
    )
}

export default Alerta
