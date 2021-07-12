/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
let sum = a+b;    
return a + ' + ' + b + ' = ' + sum;  
}

// console.log(sumToString(4,5));

/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {

var arr = [];
let diff = endNumber - startNumber + 1;
let i = 0;

for(i=0; i<diff; i++){
    arr[i] = startNumber;
    startNumber++;
}
return arr;

}

// console.log(getIncreasingArray(3,7));



/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {

 var obj = {};   

var min = Math.min(...numbers);

var max = Math.max(...numbers);

// return 'min:' + min + ', ' + 'max:' + max; 
obj.min = min;
obj.max = max;
return obj;

}

// var arr = [3,3,5,21,3215,335,-151,-45];

// console.log(maxAndMin(arr));


/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
//done
 var obj = {};
 // this is an object and you need one for loop and you have to add the object from array into this object and its keys will be the count 
 
 // inside array will be the count of how many times an object shows up

 var i;

//  var count = 0;


for(i=0; i<array.length; i++){
    if(array[i] in obj == false){
        // count = 1;
        obj[array[i]] = 1;
        // if the key isnt in the object then add it and increase count value 
    } 
    else{
        // count++;
        obj[array[i]]++;
        // if it is in object then just increase count of the key. objects are unordered so you can't find its index!  
        // dont use count var because that count var will be used for every single object in array and instead you want
        // to have each key in obj to have its OWN counter var that is why you do obj[array[i]]++; 
       
    }
    
}

return obj;

}

// console.log(countArray(['sir','sir','sir', 'sire']));
// console.log(countArray(['sir','sir','sir','sire','sir','sue',1,2,33,33]));