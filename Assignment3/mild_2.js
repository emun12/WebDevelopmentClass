/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
   //not done
   var obj = {};
   var type;
   if(typeof(variable) === 'string'){
      type = 'string';
   }
   //typeof is a function that gives the type of a variable. 

   if(typeof(variable) === 'number'){
      type = 'number';
   }
   if(typeof(variable) === 'undefined'){
      type = 'undefined';
   }
   if(typeof(variable) === 'object'){
      type = 'object';
   }
   if(typeof(variable) === 'boolean'){
      type = 'boolean';
   }
   if(typeof(variable) === 'function'){
      type = 'function';
   }
   if(typeof(variable) === 'symbol'){
      type = 'symbol';
   }
   if(typeof(variable) === 'bigint'){
      type = 'bigint';
   }
   
   var value = arguments[0] = variable;
   //arguments is like an array object and you can find the values of things by using this keyword. 

   obj.type = type;
   obj.value = variable; 

   return obj;

   // return 'type:' + type + ', value:' + value; 

   

}

// console.log(identifyVariable(4));

/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
export function identifyArray(array) {
   var arr = [];
   var i;

   for(i=0; i<array.length; i++) {
      arr[i] =  identifyVariable(array[i]);
   }

   return arr;
}

// console.log(identifyArray(['some', 3, [3, 4], false]));
// maybe issue with [3,4] it doesn't return in terminal as an array in values:


/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
   //done!
   delete object[key];
   // uses delete operator to get rid of the key value from the object given in the parameters.
   
}




/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
export function removeKeyNonDestructive(object, key) {

   var obj = {};
   // first you need to get all the keys you need to keep and put it inside a new object
   
   // take the values of those keys in original object  and put in new object so you can return that new object 
   for(var i in object){
       obj[i] = object[i];
   }    

   // now delete the key in new object
   removeKey(obj, key);


   return obj;


}

// let obj1 = {
//    name: 'Mr. Boss',
//    title: 'boss',
//    age: 33,
//    password: 'pass123'
// };
// console.log(removeKeyNonDestructive(obj1, 'password'));


/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object now looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
export function removeKeys(object, keyList) {

var obj = {};
 // take the values of those keys in original object  and put in new object so you can return that new object 
 for(var i in object){
   obj[i] = object[i];
}    


var i;

for(i = 0; i<keyList.length; i++){
   if(keyList[i] in obj == true){
      removeKey(obj, keyList[i]);
   }
}

return obj;

}


// let obj = {
//    name: 'Mr. Boss',
//    title: 'boss',
//    age: 33,
//    password: 'pass123'
// };

// console.log(removeKeys(obj, ['password', 'age']));