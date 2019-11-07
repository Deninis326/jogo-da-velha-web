const play = function ({ selfPositionOnScreen, positions, gameState, nextPlayer }) {

    const newState = { selfPositionOnScreen, positions, gameState, nextPlayer }

    if (gameState === 0) {
        if (positions[selfPositionOnScreen - 1] === '') {
            if (nextPlayer) {
                newState.positions[selfPositionOnScreen - 1] = 'X'
            }
            else {
                newState.positions[selfPositionOnScreen - 1] = 'O'
            }
            
            newState.nextPlayer = !nextPlayer
        }

        else {
            console.log('ja foi escolhido')
        }
    }
    
    this.setState({...newState})
}

export default play