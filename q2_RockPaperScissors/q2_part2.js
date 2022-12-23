const fs = require('fs');

const WIN_RESPONSE = {
    A: "B",
    B: "C",
    C: "A"
}

const DRAW_RESPONSE = {
    A: "A",
    B: "B",
    C: "C"
}

const LOSE_RESPONSE = {
    A: "C",
    B: "A",
    C: "B"
}

const CHOICE_SCORES = {
    A: 1,
    B: 2,
    C: 3
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

        let response_choice;
        if (strategyChoice == "X") {
            response_choice = LOSE_RESPONSE[opponentChoice];
        } else if (strategyChoice == "Y") {
            response_choice = DRAW_RESPONSE[opponentChoice];
            totalScore += DRAW_SCORE;
        } else if (strategyChoice == "Z") {
            response_choice = WIN_RESPONSE[opponentChoice];
            totalScore += WIN_SCORE;
        }

        totalScore += CHOICE_SCORES[response_choice]

    }

    console.log(totalScore);

}