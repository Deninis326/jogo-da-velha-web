import React from 'react'
import './App.css'

import PlayZone from '../PlayZone'
import Alerta from '../Alerta'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            whichPlayer: false,
            wasSelect: [false, false, false, false, false, false, false, false, false],
            symbols: ['', '', '', '', '', '', '', '', ''],
            gameFinished: false,
            gameDrawed: false,
            alertDisplay: 'none',
            bolaWin:false,
            bolaWinDisplay:'none',
            cruzWin:false,
            cruzWinDisplay:'none'
        }

        this.initialState = this.state
    }

    fazerJogada = (position) => {
        if (this.state.gameFinished === false) {
            let wasSelect = this.state.wasSelect
            let symbols = this.state.symbols

            if (!wasSelect[position - 1]) {
                if (this.state.whichPlayer) {
                    symbols[position - 1] = 'X'

                }
                else {
                    symbols[position - 1] = 'O'

                }

                wasSelect[position - 1] = true
                this.setState({ wasSelect })
                this.setState({ whichPlayer: !this.state.whichPlayer })
            } else {
                console.log('ja foi escolhido')
            }
        }
    }

    restart = () => {
        this.setState({
            whichPlayer: false,
            wasSelect: [false, false, false, false, false, false, false, false, false],
            symbols: ['', '', '', '', '', '', '', '', ''],
            gameFinished: false,
            gameDrawed: false,
            alertDisplay: 'none',
            bolaWinDisplay:'none',
            cruzWinDisplay:'none'
        })
    }

    checkVencedor = () => {
        const bolaVencedor = JSON.stringify(['O', 'O', 'O'])
        const cruzVencedor = JSON.stringify(['X', 'X', 'X'])

        const estadoGameLinha1 = JSON.stringify(this.state.symbols.slice(0, 3))
        const estadoGameLinha2 = JSON.stringify(this.state.symbols.slice(3, 6))
        const estadoGameLinha3 = JSON.stringify(this.state.symbols.slice(6, 9))

        const estadoGameColuna1 = JSON.stringify([this.state.symbols[0], this.state.symbols[3], this.state.symbols[6]])
        const estadoGameColuna2 = JSON.stringify([this.state.symbols[1], this.state.symbols[4], this.state.symbols[7]])
        const estadoGameColuna3 = JSON.stringify([this.state.symbols[2], this.state.symbols[5], this.state.symbols[8]])

        const estadoGameDiagonal1 = JSON.stringify([this.state.symbols[0], this.state.symbols[4], this.state.symbols[8]])
        const estadoGameDiagonal2 = JSON.stringify([this.state.symbols[2], this.state.symbols[4], this.state.symbols[6]])


        if (estadoGameLinha1 === bolaVencedor || estadoGameLinha1 === cruzVencedor) {
            switch (estadoGameLinha1) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameLinha2 === bolaVencedor || estadoGameLinha2 === cruzVencedor) {
            switch (estadoGameLinha2) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameLinha3 === bolaVencedor || estadoGameLinha3 === cruzVencedor) {
            switch (estadoGameLinha3) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameColuna1 === bolaVencedor || estadoGameColuna1 === cruzVencedor) {
            switch (estadoGameColuna1) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameColuna2 === bolaVencedor || estadoGameColuna2 === cruzVencedor) {
            switch (estadoGameColuna2) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameColuna3 === bolaVencedor || estadoGameColuna3 === cruzVencedor) {
            switch (estadoGameColuna3) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameDiagonal1 === bolaVencedor || estadoGameDiagonal1 === cruzVencedor) {
            switch (estadoGameDiagonal1) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }

        if (estadoGameDiagonal2 === bolaVencedor || estadoGameDiagonal2 === cruzVencedor) {
            switch (estadoGameDiagonal2) {
                case bolaVencedor: console.log('O GANHOU'); this.setState({ gameFinished: true, bolaWinDisplay:'block'}); break
                case cruzVencedor: console.log('X GANHOU'); this.setState({ gameFinished: true, cruzWinDisplay:'block'}); break
                default: console.log('O jogo nao acabou')
            }
        }
    }

    checkDraw = () => {
        if (!this.state.symbols.some(e => e === '')) {
            console.log('JOGO EMPATADO')
            this.setState({ alertDisplay: 'block', gameDrawed: true })
        }
    }

    render() {
        const { fazerJogada, restart } = this
        return (
            <div className='app'>
                <h1>Joga da Velha</h1>
                <PlayZone {...this.state} fazerJogada={fazerJogada} restart={restart} />
                <Alerta texto={'EMPATE !!!'} display={this.state.alertDisplay} restart={restart} />
                <Alerta texto={'Player 1 Venceu'} display={this.state.bolaWinDisplay} restart={restart} />
                <Alerta texto={'Player 2 Venceu'} display={this.state.cruzWinDisplay} restart={restart} />
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.gameDrawed || this.state.gameFinished) {
            return false
        }

        return true
    }

    componentDidUpdate() {
        if (this.state.gameFinished === false) {
            this.checkVencedor()
            this.checkDraw()
        }
    }
}

export default App
