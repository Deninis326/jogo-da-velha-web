import React from 'react'
import './Position.css'

const Position = ({positions, gameState, nextPlayer, corner, play, selfPositionOnScreen, symbol }) => {
    return (
        <div className={`position ${corner}`}
            onClick={() => play({ selfPositionOnScreen, positions, gameState, nextPlayer })} >
            {symbol}
        </div>
    )
}

export default Position
