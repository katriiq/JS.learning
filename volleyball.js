function game() {
    let pointsA = 0;
    let pointsB = 0;
    let finisgCondition = true

    while (continueCondition) {
        if (getRandomInt()) {
            pointsA++
        } else {
            pointsB++
        }

    }
}

function getRandomInt() {
    let rnd = Math.random();
    return Math.round(rnd)
}
function getContinueCondition(teamA, teamB) {
    const FinishPoints = 24
    if (teamA <= FinishPoints && teamB <= FinishPoints) {
        return true
    }
    else {
        return false
    }
    const diff = Math.abs(teamA - teamB)
    return diff < 2
}
game()