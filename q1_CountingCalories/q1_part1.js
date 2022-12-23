const fs = require('fs');

fs.readFile('./input.txt', { encoding: 'utf8' }, function(err, data) {

    if (err) {
        throw new Error("error reading file");
    }
    dataArray = data.split("\n");
    findMaxCalories(dataArray);
});

function findMaxCalories(dataArray) {
    let maxCaloriesSoFar = 0;
    let currentElfCalories = 0;

    for (let i = 0; i < dataArray.length; i++) {

        let line = dataArray[i];

        if (line.length == 0) {
            currentElfCalories = 0;
        }
        else {
            currentElfCalories += parseInt(line);
            if (currentElfCalories > maxCaloriesSoFar) {
                maxCaloriesSoFar = currentElfCalories;
            }
        }
    }

    console.log(maxCaloriesSoFar);
}