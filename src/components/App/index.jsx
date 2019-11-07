import React from 'react'
import './App.css'

import PlayZone from '../PlayZone'
import Alerta from '../Alerta'

import play from '../../assets/play'
import reStart from '../../assets/reStart'
import checkResult from '../../assets/checkResult'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nextPlayer: false,
            positions: ['', '', '', '', '', '', '', '', ''],
            gameState: 3
        }

        this.checkResult = checkResult
        this.play = play
        this.reStart = reStart
        
        this.checkResult = this.checkResult.bind(this)
        this.play = this.play.bind(this)
        this.reStart = this.reStart.bind(this)
    }

    render() {
        const { play, reStart } = this
        console.log(this.state.gameState)

        return (
            <div className='app'>
                <h1 className='titulo'>Jogo da Velha</h1>
                <PlayZone {...this.state} play={play} reStart={reStart} />
                <Alerta texto={'Empate'} display={(this.state.gameState === 3 ?  'block':'none')} reStart={reStart} />
                <Alerta texto={'Jogador 1 Venceu'} display={(this.state.gameState === 1 ? 'block':'none')} reStart={reStart} />
                <Alerta texto={'Jogador 2 Venceu'} display={(this.state.gameState === 2 ? 'block':'none')} reStart={reStart} />
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.gameState === 0 ) {
            return true
        }

        return false
    }

    componentDidUpdate() {
        if (this.state.gameState === 0) {
            this.checkResult(this.state.positions)
        }
    }
}

export default App