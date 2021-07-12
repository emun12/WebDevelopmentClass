import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
var sum = 0;
var i;

for(i=0; i<array.length; i++){
    sum += array[i];
}
return sum;

}

// console.log(getSum([1,2,3]));

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */

export function getMedian(array) {
    var median;

    array.sort(function(a,b){ 
        return a - b;
      });
// Array.prototype.sort(array); another option
// this sorts the array from smallest to largest numbers.

    var arrlength = array.length / 2;
    var middle = Math.floor(arrlength);
// finds the middle index and rounds it to the smallest number to get exactly half

    if((array.length % 2) != 0){

        median = array[middle];
        // if the array has an odd numbered length, you have to add the two surrounding numbers 
    // and divide by 2 to get the exact decimal median number. 
 
    }
    else{
        median = (array[middle] + array[middle-1]) / 2;
       //if the array has a length that is even numbered then just use the middle number as the median.
    }

return median;
   


}

// console.log(getMedian([3,2,5,6,2,7,4,2,7,5]));



/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {

var obj = {};

let length = array.length;

var sum = getSum(array);
var mean = getMean(array);
var median = getMedian(array);
var min = Math.min(...array);
var max = Math.max(...array);
var variance = getVariance(array, mean); 
var stdev = Math.sqrt(variance);


obj.min = min;
obj.median = median;
obj.max = max;
obj.variance = variance;
obj.mean = mean;
obj.length = length;
obj.sum = sum;
obj.standard_deviation = stdev;

//return 'length:' + length + ' sum:' + sum + ' mean:' + mean + ' median:' + median + ' min:' + min + ' max:' + max + ' variance:' + variance + ' standard_deviation:' + stdev;
return obj;
}

// console.log(getStatistics([3,2,4,5,5,5,2,6,7]));
// console.log(getStatistics([1,3,12,15,41,54]));

// helper functions

export function getMean(array){
    var sum = 0;
    var i;
    var mean;

    for(i=0; i<array.length; i++){
        sum += array[i];
    }

    mean = sum/array.length;
    return mean;
}
// console.log(getMean([1,2,3,4,5]))

export function getVariance(array, mean) {
    return array.map(function (sample) {
        return Math.pow(mean - sample, 2);
    })
        .reduce(function sum(m, v) {
            m += v;
            return m;
        }, 0) / array.length;
}