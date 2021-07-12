import mpg_data from "./data/mpg_data.js";
import {getStatistics, getMean} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    // avgMpg: mpg_data.map(car => getMean(car.city_mpg) && getMean(car.highway_mpg)),
    // avgMpg: mpg_data.filter(getMean(mpg_data.highway_mpg) && getMean(mpg_data.city_mpg)) ,
    avgMpg: avgH(),

    allYearStats: getStatistics(mpg_data.map(car => car.year)),
    // allYearStats: Object.values(mpg_data).getStatistics(mpg_data.year) ,  
    // get statistics on an array but right now it is getting statistics on just ONE car
    // mpg_data.filter(car => getStatistics(car.year))

    ratioHybrids: ratio()
    
};

export function avgH(){
    // helper function for avgMpg highway mpg
    // let obj = {};
    let high = 0;
    let city = 0;
    for(let i=0; i<mpg_data.length; i++){
        high += mpg_data[i].highway_mpg;
        city += mpg_data[i].city_mpg;
    }

    return {highway:high/mpg_data.length, city:city/mpg_data.length};
}



export function ratio() {
    // helper function for ratioHybrids
    // use filter
    // length of number of hybrids
    //divide by total num of entries
    let count = 0;
    

    for(let i=0; i<mpg_data.length; i++){
      if(mpg_data[i].hybrid){
             count++;
        }
   }
    
   return count/mpg_data.length;
}

// console.log(allCarStats.avgMpg);
// console.log(allCarStats.allYearStats);
// console.log(allCarStats.ratioHybrids);

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 * 
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: maker(),
    avgMpgByYearAndHybrid: undefined
};
// console.log(moreStats.makerHybrids);
console.log(moreStats.avgMpgByYearAndHybrid);


export function maker(){
    let hybrids = [];
    hybrids = mpg_data.filter(car => car['hybrid'] == true);

    let arr = [];
    // this will be the final array with all of the objects
   
    let index = 0;

    for(let i=0; i<hybrids.length;i++){
        if(arr.some(e => e.make == hybrids[i].make)
        ){
            
                
            index = arr.findIndex(x => (x.make === hybrids[i].make)); 
            arr[index].hybrids.push(hybrids[i].id);
            

        } 
        else{
            
            
            let newObj = {make:{}, hybrids:[]};
            newObj['make'] = hybrids[i].make;
            newObj['hybrids'] = [hybrids[i].id];
            // by putting brackets between [hybrids[i].id] it makes an array so later on you can keep pushing new ids onto this array
            arr.push(newObj); 

        }
        // arr.push(obj);

    } 
    arr.sort((car1, car2) => car2['hybrids'].length - car1['hybrids'].length);
    // console.log(arr);
    return arr;
    // supposed to return 12 if you do arr.length

}
