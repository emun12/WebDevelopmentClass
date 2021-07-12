import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */ 

/*
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */


export function searchHighPower(car_data, minHorsepower, minTorque) {

 let arr = [];   
 arr = car_data.filter(car => (car.horsepower >= minHorsepower) && (car.torque >= minTorque));

return arr.sort((car1, car2) => (car2.horsepower - car1.horsepower));



};

// console.log(searchHighPower(40, 200));



/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let arr = [];   
    arr = car_data.filter(car => (car.highway_mpg >= minHighway) && (car.city_mpg>= minCity));
   
   return arr.sort((car1, car2) => (car2.highway_mpg - car1.highway_mpg));
   
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let arr = [];
    arr = car_data.filter(car => car.id.toUpperCase().includes(searchTerm.toUpperCase()));
    // have to do toUpperCase() so that searching and sorting ignores case in the string!

    return arr.sort((car1, car2) => car2.id.toUpperCase().indexOf(searchTerm.toUpperCase()) - car1.id.toUpperCase().indexOf(searchTerm.toUpperCase()));
    // decreasing order because car2 - car1
 
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {

   
    let arr = [];
   
    let index = 0;
    arr = car_data.filter(car => {
        for(index=0;index<years.length;index++){
          
                if( car.year === years[index]){
                   return true;     
                }
            }
         
    });

    //  for(i=0;i<years.length;i++){
    // // arr = car_data.filter(car => car.year.includes(years[i]));
               
    // }
   
      // in doesn't work because the year key already exists and you can't check if a num year is a key - that's not what it wants 
     // arr = car_data.map(car => car.year == years);

   
//   return arr.length; this checks if you have the correct output length
   return arr.sort((car1, car2) => (car2.year - car1.year));

}

// console.log(searchByYear(mpg_data, [2009,2011]));

