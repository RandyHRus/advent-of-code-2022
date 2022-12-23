const fs = require('fs');

const WIN_CONDITIONS = {
    A: "Y",
    B: "Z",
    C: "X"
}

const DRAW_CONDITIONS = {
    A: "X",
    B: "Y",
    C: "Z"
}

const CHOICE_SCORES = {
    X: 1,
    Y: 2,
    Z: 3
}

const WIN_SCORE = 6;
const DRAW_SCORE = 3;

fs.readFile('./input.txt', { encoding: 'utf8' }, function(err, data) {

    if (err) {
        throw new Error("error reading file");
    }
    dataArray = data.split("\n");
    findTotalScore(dataArray);
});

function findTotalScore(dataArray) {

    let totalScore = 0;

    for (let data of dataArray) {

        opponentChoice = data.split(" ")[0];
        strategyChoice = data.split(" ")[1];

        let isWin = WIN_CONDITIONS[opponentChoice] == strategyChoice;

        if (isWin) {
            totalScore += WIN_SCORE;
        } else {
            let isDraw = DRAW_CONDITIONS[opponentChoice] == strategyChoice;
            if (isDraw) {
                totalScore += DRAW_SCORE;
            }
        }

        totalScore += CHOICE_SCORES[strategyChoice];
    }

    console.log(totalScore);

}