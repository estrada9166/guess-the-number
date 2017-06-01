// Define the min and max numbers used to the excercice
var minNumberRandom = 0;
var maxNumberRandom = 300;

// Define a random number to be find
var answer = Math.floor((Math.random() * maxNumberRandom) + 1);

// Create a function and pass the min and max number used on the excercice
// so you can get the average number of both
var findTheNumber = function(minNumber, maxNumber) {
    var averageNumber = Math.floor((minNumber + maxNumber) / 2);
    // finde the average number of both so you can see if it is higher or lower
    if(averageNumber != answer) {
        // if it is higher call again the function but pass as min val the average numer
        // so you can reduce the number list to a half
        if(answer > averageNumber) {
            return findTheNumber(averageNumber, maxNumber);
        } else {
            return findTheNumber(minNumber, averageNumber);
        }
    } else {
        return averageNumber;
    }
}

// Use the same function but pass the result that you want to get
// because you are using random numbers, dificult to pass a test with
// a number you have decided.
var testFindTheNumber = function(testAnswer, minNumber, maxNumber) {
    var averageNumber = Math.floor((minNumber + maxNumber) / 2);
    if(averageNumber != testAnswer) {
        if(testAnswer > averageNumber) {
            return testFindTheNumber(testAnswer, averageNumber, maxNumber);
        } else {
            return testFindTheNumber(testAnswer, minNumber, averageNumber);
        }
    } else {
        return averageNumber;
    }
}


var assertEqualNumbers = function(number, result) {
    // If the number you expected is equal to the result it should pass
    if (number === result){
        console.log("PASS");
    } else {
        console.log("Expected " + number + " but got " + result);
    }
}


var finalResult = findTheNumber(minNumberRandom, maxNumberRandom);
console.log(finalResult);

// Chek if the random number is equal to the one returned by findTheNumber
assertEqualNumbers(answer, finalResult);
assertEqualNumbers(100, testFindTheNumber(100, minNumberRandom, maxNumberRandom));
assertEqualNumbers(196, testFindTheNumber(196, minNumberRandom, maxNumberRandom));
assertEqualNumbers(250, testFindTheNumber(250, minNumberRandom, maxNumberRandom));
assertEqualNumbers(1, testFindTheNumber(1, minNumberRandom, maxNumberRandom));
//should not pass
assertEqualNumbers(100, testFindTheNumber(1, minNumberRandom, maxNumberRandom));






