const fs = require('fs');

fs.readFile('./input.txt', { encoding: 'utf8' }, function(err, data) {

    if (err) {
        throw new Error("error reading file");
    }
    dataArray = data.split("\n");
    findMaxCalories(dataArray);
});

function findMaxCalories(dataArray) {
    let maxCaloriesSoFarTop3 = [0, 0, 0];
    let currentElfCalories = 0;

    for (let i = 0; i < dataArray.length; i++) {

        let line = dataArray[i];

        if (line.length == 0) {

            if (currentElfCalories > maxCaloriesSoFarTop3[0]) {
                if (currentElfCalories > maxCaloriesSoFarTop3[1]) {
                    maxCaloriesSoFarTop3[0] = maxCaloriesSoFarTop3[1];
                    if (currentElfCalories > maxCaloriesSoFarTop3[2]) {
                        maxCaloriesSoFarTop3[1] = maxCaloriesSoFarTop3[2];
                        maxCaloriesSoFarTop3[2] = currentElfCalories;
                    } else {
                        maxCaloriesSoFarTop3[1] = currentElfCalories;
                    }
                } else {
                    maxCaloriesSoFarTop3[0] = currentElfCalories;
                }
            }

            currentElfCalories = 0;
        }
        else {
            currentElfCalories += parseInt(line);
        }
    }

    console.log(maxCaloriesSoFarTop3[0] + maxCaloriesSoFarTop3[1] + maxCaloriesSoFarTop3[2]);
}