/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */

// const { convertAndValidateNumsArray } = require("../Downloads/express-routing-solution/helpers");
function createFrequencyCounter(arr) {
    return arr.reduce(function (accumulator, next) {
        accumulator[next] = (accumulator[next] || 0) + 1;
        return accumulator;
    }, {});
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
    for (let i = 0; i < numsAsStrings.length; i++) {
        let valNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valNumber)) {
            return new Error(`The value ${numsAsStrings[i]} at index ${i} is not a valid number`)
        }
        result.push(valNumber)
    }
    return result;
}

function findMean(arr) {
    if (nums.length === 0) return 0;
    return nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) / arr.length

}

function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
    let count = 0;
    let mostFrequent;
    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            freqCounter = key;
            count = freqCounter[key];
        }
    }
    return mostFrequent;
}

function findMedian(nums) {

    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}

module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
};

