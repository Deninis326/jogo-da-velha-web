import React from 'react'
import './PlayZone.css'

import Position from '../Position'
import Button from '../Button'

const PlayZone = ({ positions, gameState, nextPlayer, play, reStart }) => {
    return (
        <div className='play-zone'>

            {gameState === 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
                let corner = ''
                if (e === 1) corner = 'position-corner-top-left'
                if (e === 3) corner = 'position-corner-top-right'
                if (e === 7) corner = 'position-corner-bottom-left'
                if (e === 9) corner = 'position-corner-bottom-right'

                return <Position symbol={positions[i]} selfPositionOnScreen={e} play={play} key={e} corner={corner} positions={positions} gameState={gameState} nextPlayer={nextPlayer} />
            })}

            <Button type={'button-playzone'} label={'RECOMEÇAR'} action={reStart} />
        </div>
    )
}

export default PlayZone
