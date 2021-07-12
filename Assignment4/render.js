/**
 * Course: COMP 426
 * Assignment: a04
 * Author: Esther Mun
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */

// $(document).ready(function() {
//     // $("#demo").renderHeroCard();
//     $("#demo").on('load', function() {
//         renderHeroCard();
//     });
    
//     alert($("demo").on('load', function() {
//         renderHeroCard();
//     }));
// });

// $(document).ready(function(){
//     // $("#demo").click(renderHeroCard(heroicData));
//     let d1 = $("#demo");

//     // let heroName = function(hero){

//     // }
//     // d1.hover(function(){
//     //     $(this).html("testing 2");
//     // });
    

//     // let roo = function(hero) {
//     //     return <p>${hero.name}</p>;
//     // }    

//     // d1.hover(function(){
//     //     $(this).roo(heroicData);
//     // })
// // d1.renderHeroCard();

// });
/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;


// var firstName = hero.first; 
// // alert('This works!');
//     // var firstName = $("<h></h>").text("AVENGER");
// return firstName;
// let obj = {};
// for(let i = 0; i<2; i++){
// obj.push(hero[i]);
// }
// return obj.first;
// return <p>${hero.name}</p>;`
// return "Hello";
    let first = hero.firstSeen;

    return ` <div class = "boxCard" style = ${hero.color} >
            <center>
               <h1> ${hero.first} ${hero.last} </h>
               <h2> ${hero.name}  </h>
               
            </center>   
            </div>   
            <center>
            <div style = "background: ${hero.backgroundColor}">
                <img  src= ${hero.img}>    
                <p> <span style="color:${hero.color}"> Description: </span> ${hero.description} </p>  
                <p> First Seen on: ${first.getMonth() + '/' + first.getFullYear()} </p>  
                <button> edit </button>                       
            </center>    
            </div>
            `



};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
    let first = hero.firstSeen;
    // let dates = first.toISOString().substring(0,10);
    // first.setSeconds(0,0);
    let dates = first.toISOString().split('T');
    let dates1 = dates[0];
    // split creates an array and the objects where it is split goes into index 0 & 1
    
    // example from OH on how to render
    // let card = document.createElement('div');
    // card.innerHTML = `${hero.name}`;

    

    return ` 
        <div>
            <form>
                <label for="first"> First Name: </label>
                <input type = "text" id = "first" value=${hero.first}>
                <label for="last"> Last Name: </label>
                <input type ="text"  id= "last" value=${hero.last}>
                <label for="full"> Full Name: </label>
                <input type="text  id="full" value=${hero.name}>


                <label for="date"> First Seen Date: </label>
                <input type="date" id="date" value = ${dates1}>
                    
                <label for="description"> Description: </label>
                <input id="description" value=${hero.description}>  </input>
                
                <div>
                    <button type="submit"> cancel </button>
                    <button type="submit"> save </button>
                </div>

                <label for="anything"> Textarea: </label>
                <textarea id="anything" rows="10" cols="50">  </textarea>
                 
            </form>               
        </div>       
    `
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
       
    // TODO: Generate the heroes using renderHeroCard()
    for(let i=0; i<heroes.length; i++){
        $root.append(renderHeroCard(heroes[i]));
    }
    // $root.append(...heroes);
    // TODO: Append the hero cards to the $root element
    

    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
    // let edit = renderHeroEditForm(randomHero);

    // TODO: Append the hero edit form to the $root element
    $root.append(renderHeroEditForm(randomHero));
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
   
});
