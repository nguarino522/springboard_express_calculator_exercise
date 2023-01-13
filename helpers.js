// converting numbers pulled from request to an integer number array and check if it is valid
function convertNumsAndValidate(stringNums) {
    let nums = stringNums.split(',').map(num => Number(num))
    for (let n of nums) {
        let i = 0;
        if (Number,isNaN(n)) {
            return new Error(
                `The value at index ${i} is not a valid number.`
            );
        }
        i++;
    }
    return nums;
}


// function to find mean from num array
function findMean(nums) {
    if (nums.length === 0) return 0;
    let sum = 0;
    for (let n of nums) {
        sum = n + sum
    }
    return sum / nums.length;
}


// function to find median from num array
function findMedian(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median;
}


// function to find mode from num array
function findMode(nums) {
    let numOccurObj = getNumOccurCount(nums);
    let maxFreq = Math.max(...Object.values(getNumOccurCount(nums)));
    let mode = [];
    for (let key in numOccurObj) {
        if (numOccurObj[key] === maxFreq) {
            mode.push(Number(key));
        }
    }
    if (mode.length === 1) {
        return Number(mode[0]);
    } else {
        return mode;
    }
}

// helper function to find mode
function getNumOccurCount(nums) {
    let entryCounts = {};
    nums.forEach(n => {
        entryCounts[n] = (entryCounts[n] || 0) + 1;
    });
    return entryCounts;
}

module.exports = {findMean, findMedian, findMode, convertNumsAndValidate};