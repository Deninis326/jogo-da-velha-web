import React from 'react'
import './Position.css'

const Position = ({corner, fazerJogada, position, symbol}) => {
    return (
        <div className= {`position ${corner}`}
            onClick={()=> fazerJogada(position)} >
                {symbol}
        </div>
    )
}

export default Position
