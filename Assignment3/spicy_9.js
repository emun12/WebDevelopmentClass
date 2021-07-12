/**************************************************************************
 *
 * Functions as first-class citizens
 *
 **************************************************************************/

/**
 * Write and export a function named "repeat" that calls a given function
 *   over and over a specified number of times.
 *
 * @param fn      The function to repetitively call
 * @param n       The number of times to call the function
 * @param params  An array of parameters to pass to every function invocation
 * @return        Returns an array containing the return values obtained
 *                from calling the function
 */
export const repeat = (fn, n, ...params) => {
var obj = [];
// let
var i;
for(i=0; i<n; i++){
    obj[i] = fn(...params);

}

return obj;
};


/**
 * Use the repeat function to log the string "Hello, world!" to the console
 *   10 times.
 */
export const repeatDemo = () => {
    // var printing = console.log;
    repeat(console.log, 10, 'Hello, world!');
};

// console.log(repeatDemo());

/**************************************************************************
 *
 * Function currying
 *
 **************************************************************************/

/**
 * Write and export a function named "multiplyBy" which takes a single number
 *   parameter "num1" and returns a function that takes a different number
 *   parameter "num2". The returned function should calculate and return the
 *   product of num1 and num2.
 */
export const multiplyBy = (num1) => {
    return function(num2){
        return num1 * num2;
        // have to return the actual multiplication result! 
    }

};
// console.log(multiplyBy(2)(5));


/**
 * Use the multiplyBy function to create and export a function named
 *   "tenTimes" that multiplies a number by 10.
 */
export const tenTimes = multiplyBy(10);


/**
 * Write and export a function named "tenTimesFifty" which uses the tenTimes
 *   function to multiply 50 by 10 and returns the result.
 */
export const tenTimesFifty = () => {
    return tenTimes(50);
};


/**************************************************************************
 *
 * Array callback filtering
 *
 **************************************************************************/

/**
 * Write and export a function named "everyEven" which takes an array and a test
 *   function for checking individual elements of the array. The "everyEven"
 *   function should test the even elements of the array and return true only
 *   if at least one of the even elements passes the test.
 *
 * @param arr   An array whose even elements should be tested
 * @param test  A function which takes as input a single element of the array
 *              and returns true or false, such that true means the element
 *              passed the test and false means it failed
 * @return      boolean true if at every even-indexed element passes the test
 *              function
 *
 * Example usage:
 *    everyEven([1, 5, 1, 0, 1], x => x === 1)  <--  returns true
 *    everyEven([1, 1, 0, 1, 1], x => x === 1)  <--  returns false
 */
export const everyEven = (arr, test) => {
let i; 
let count;

for(i = 0; i <arr.length; i=i+2){
    if(test(arr[i]) == true) {
        count = 1;
    } 
    else{
        
        return false;
    }
}
if (count == 1){
    return true;
}


};
// console.log(everyEven([1, 1, 0, 1, 1], x => x === 1));
// console.log(everyEven([1, 5, 1, 0, 1], x => x === 1));

/**
 * Write and export a function named "someEven" which takes an array and a test
 *   function for checking individual elements of the array. The "someEven"
 *   function should test the even elements of the array and return true only
 *   if at least one of the even elements passes the test.
 *
 * @param arr   An array whose even elements should be tested
 * @param test  A function which takes as input a single element of the array
 *              and returns true or false, such that true means the element
 *              passed the test and false means it failed
 * @return      boolean true if at least one even-indexed element passes the
 *              test function
 *
 * Example usage:
 *    someEven([4, 3, 2, 1, 0], x => x === 3)  <--  returns false
 *    someEven([1, 0, 1, 0, 1], x => x === 0)  <--  returns false
 *    someEven([1, 1, 1, 1, 0], x => x === 0)  <--  returns true
 *    someEven([0, 0, 0, 0, 0], x => x === 0)  <--  returns true
 */
export const someEven = (arr, test) => {
    let i = 0; 
    let count = 0;
    
    for(i = 0; i <arr.length; i = i+2) {
        if(test(arr[i]) == true) {
            count++;
            // if at least one of the even indexed ones are true then count should be greater than 0.  
        } 
        
    }

    if(count > 0){
        return true;
    }
    return false;
    
};    
 
// console.log(someEven([1, 0, 1, 0, 1], x => x === 0)); // false
 console.log(someEven([1, 0, 1, 0, 1], x => x === 1)); // true 
// console.log(someEven([1,5,2,0,3], x => x === 1)); //true
// console.log(someEven(1,5,1,0,3, x => x === 1));

// console.log(someEven([4, 3, 2, 1, 0], x => x === 3));
// console.log(someEven([1, 0, 1, 0, 1], x => x === 0));
// console.log(someEven([1, 1, 1, 1, 0], x => x === 0));
// console.log(someEven([0, 0, 0, 0, 0], x => x === 0));



/**
 * Write and export a function named "filter" which takes an array and a test
 *   function for checking individual elements of the array. The "filter"
 *   function should test the elements of the array and return true only
 *   if all of the odd elements pass the test.
 *
 * @param arr   An array whose elements should be tested
 * @param test  A function which takes as input a single element of the array
 *              and returns true or false, such that true means the element
 *              passes the test and false means it fails the test
 * @return      {fail: [], pass: []} an object with two keys: "pass" and "fail". The value
 *              of "pass" should be an array containing all the elements of arr
 *              which passed the test. The value of "fail" should be an array
 *              containing all the elements of arr which failed the test.
 *
 * Example usage:
 *    filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y')
 *       -->  { pass: ['yes', 'yellow'], fail: ['nope', 'maybe'] }
 *    filter([1, 90, 5, 31], x => x % 2 === 1)
 *       -->  { pass: [1, 5, 31], fail: [90] }
 */
export const filter = (arr, test) => {
    let i;
    let obj = {};
    let passed = [];
    let failed = [];  
    //everyEven function needs to be used

    for(i=0; i<arr.length; i++){
        if(test(arr[i]) === true){
            passed.push(arr[i]);           
        } 
        else{
            failed.push(arr[i]); 
        }
    }

    obj.pass = passed;
    obj.fail = failed;
    return obj;

};

// console.log(filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
// console.log(filter([1, 90, 5, 31], x => x % 2 === 1));





/**
 * Write and export a function named "allEvensAreOdd" which takes as input an
 *   array and returns true only if all of the even elements in the array are
 *   odd numbers. Use the "everyEven" function in this function.
 */
export const allEvensAreOdd = (arr) => {
   

    let i = 0;
    let count = 0;
    for(i=0; i<arr.length; i=i+2){
        if(everyEven(arr, x => (x % 2) !== 0 )){
            count = 1;
        }
    }

    if(count == 1){
        return true;
    }
    return false;
};

// console.log(allEvensAreOdd([1,0,1,0,1])); // true
// console.log(allEvensAreOdd([0,1,0,1,0])); //false

/**
 * Write and export a function named "anEvenIsOdd" which takes as input an
 *   array and returns true if at least one of the even-indexed elements in the
 *   array is an odd number. Use the "someEven" function in this function.
 */
export const anEvenIsOdd = (arr) => {

    let i = 0;
    let count = 0;
    for(i=0; i<arr.length; i=i+2){
        if(someEven(arr, x =>(x % 2) !== 0)) {
            count++;
        }
    }

    if(count > 0){
        return true;
    }
    return false;

};


/**
 * Write and export a function named "hasExactly" which takes an array, a test
 *   function for checking individual elements of the array, and a number n.
 *   The "hasExactly" function should return true only if exactly n elements
 *   pass the test. You must use the filter function.
 */
export const hasExactly = (arr, test, n) => {
    // let count = 0;

    let obj1 = {};
    obj1 = filter(arr, test); 
    //filter gives an object with two keys and each key's value is an array
    
    // let passNum = obj[pass] 
    let arr1 = [];
    arr1 = filter(arr,test)['pass'];
    // console.log(arr1);

    
    let length = arr1.length;
    

    if(length === n) {
        return true;
       
    }

    return false;

    
};

console.log(hasExactly([1,2,3,4,5,6], x => x > 3, 3)); //true