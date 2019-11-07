const player1Win = JSON.stringify(['O', 'O', 'O'])
const player2Win = JSON.stringify(['X', 'X', 'X'])
let gameState = 0

const checkWhoWon = ({ combination, id }) => {
    if (JSON.stringify(combination) === player1Win) {
        return 1
    }

    if (JSON.stringify(combination) === player2Win) {
        return 2
    }
}

const checkResult = function (positions) {
    if (!positions.some(e => e === '')) {
        gameState = 3
        this.setState({ gameState })
        
        return
    }

    const possibleWinCases = [
        { combination: [positions[0], positions[1], positions[2]], id: 'r1' },
        { combination: [positions[3], positions[4], positions[5]], id: 'r2' },
        { combination: [positions[6], positions[7], positions[8]], id: 'r3' },

        { combination: [positions[0], positions[3], positions[6]], id: 'c1' },
        { combination: [positions[1], positions[4], positions[7]], id: 'c2' },
        { combination: [positions[2], positions[5], positions[8]], id: 'c3' },

        { combination: [positions[0], positions[4], positions[8]], id: 'd1' },
        { combination: [positions[2], positions[4], positions[6]], id: 'd2' },
    ]

    const combinationsChecked = possibleWinCases.filter(winCase => {
        const { combination } = winCase

        if (JSON.stringify(combination) === player1Win) {
            return true
        }

        if (JSON.stringify(combination) === player2Win) {
            return true
        }

        return false
    })

    if (combinationsChecked.length === 0) {
        return
    }
    
    gameState = checkWhoWon(combinationsChecked[0])

    this.setState({ gameState })
}


export default checkResult    