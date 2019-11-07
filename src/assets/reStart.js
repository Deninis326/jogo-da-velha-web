const reStart = function () {
    this.setState({
        nextPlayer: false,
        positions: ['', '', '', '', '', '', '', '', ''],
        gameState: 0
    })
    
    this.forceUpdate()
}

export default reStart