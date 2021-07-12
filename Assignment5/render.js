/**
 * Course: COMP 426
 * Assignment: a05
 * Author: Esther Mun
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Copy your code from a04 to render the hero card
    let first = hero.firstSeen;
//add id property
//take out doctype html 
 // <button id = "${hero.id}" class="edit" > edit </button>   
    return `
            
            <div class = "boxCard" style = ${hero.color}>
                         
               
           
            <p> ${hero.first} ${hero.last} </p>
            <p> ${hero.name}  </p>
           
            <div style = "background: ${hero.backgroundColor}">   </div>
                <img src= ${hero.img} alt="hero pic">    
                <p> <span style="color:${hero.color}"> Description: </span> ${hero.description} </p>  
                <p> First Seen on: ${first.getMonth() + '/' + first.getFullYear()} </p>  
                      
                <button class="edits" hID ="${hero.id}" id=${hero.id} type = "button"> edit </button>
                
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
    // TODO: Copy your code from a04 to render the hero edit form
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

    
////button id = "${hero.id}" underneath CANCEL button
    return ` 
        <div>
            <form>

                <label for="first"> First Name: </label>
                <input type = "text" id = "first" value=${hero.first}>

                <label for="last"> Last Name: </label>
                <input type ="text"  id= "last" value=${hero.last}>

                <label for="fullOne"> Full Name: </label>
                <input type="text"  id="fullOne" value=${hero.name}>

                <label for="date"> First Seen Date: </label>
                <input type="date" id="date" value = ${dates1}>
                    
                <label for="description"> Description: </label>
                <input id="description" value=${hero.description}>  

                
                <button class = "cancels" hID ="${hero.id}"  type= "button" id = "cancels_${hero.id}" value = "button"> Cancel </button>
                
                <button type= "submit" class = "submits"  hID ="${hero.id}" id = "submits_${hero.id}" value="submit"> Save </button>
               
                <label for="anything"> Textarea: </label>
                <textarea id="anything" rows="10" cols="50">  </textarea>
                 
            </form>     
            
        </div>     
        
    `
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */


export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
    

       let heroes;
       
        for(let i=0; i<heroicData.length; i++){
            
    
            if(heroicData[i].id == event.target.getAttribute("hID") ){
    
                heroes = heroicData[i];
                

            }
        }

        // $(`#${id}_card`).replaceWith(renderHeroEditForm(heroes));
        event.target.parentNode.remove();
        $('#root').append(renderHeroEditForm(heroes));

    
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead
   
    let heroes;
    for(let i=0; i<heroicData.length; i++){
            
        if(heroicData[i].id == event.target.getAttribute("hID") ){

            heroes = heroicData[i];

            // console.log(heroes);
            
        }
    }
    event.target.parentNode.parentNode.remove();
    // $('#root').remove(renderHeroEditForm(heroes));
    // event.target.parentNode.remove();
    //remove edit form card

    $('#root').append(renderHeroCard(heroes));



};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
event.preventDefault();
//prevents from refreshing

let fullName = $("#fullOne").val();
let first = $("#first").val();
let last = $("#last").val();
let description = $("#description").val();
let date =$("#date").val().concat("T00:00:00"); 
// have to concat to change time zone to match the one in the autograder

// console.log(date);
// let date2 = new Date('1995-12-17T00:00:00');
// console.log(date);
// let date2 = new Date(date);
// console.log(date2);
let heroes; 
for(let i=0; i<heroicData.length;i++){
    if(heroicData[i].id == event.target.getAttribute("hID")){
        
         heroicData[i].first = first;
         heroicData[i].last = last;
         heroicData[i].description = description;
         heroicData[i].name = fullName;
         heroicData[i].firstSeen = new Date(date);
        //  console.log(heroicData[i].firstSeen);
         
         heroes = heroicData[i];
        //  console.log(heroicData[i].firstSeen);
        //  console.log(heroicData[i]);

    }
}
// hero.name = document.getElementById("fullOne").value


//     let heroes;
//     heroes = heroicData.filter(hero => hero.id == event.target.getAttribute("hID"))[0];
//     //array of the heroes that have the matching ID. Just one object inside the array

//     heroes.name = $("#fullOne").val();
//     heroes.first = $("#first").val();
//     heroes.last = $("#last").val();
//     heroes.description = $("#description").val();
//     // heroes.date = new Date($("#date").val()); 
//     heroes.date = $("#date").val();

// //     // heroicData[heroes.id-1].first = $("#first").val();


// // console.log(heroes);
// // //find hero in heroicData that has same first name as heroes first name

// for(let i=0; i<heroicData.length; i++){
//     console.log("test");
//     if(heroicData[i].id === event.target.getAttribute("hID")){
//         heroes = heroicData[i];
//         // if statement doesn't work
//         // changing heroicData array 
//         console.log("hi");
//        heroes.name = $("#fullOne").val();
//         heroes.first = $("#first").val();

        
        
//         console.log(heroicData[i]);
//     } 
// }
    
    //make every property in heroicdata[#] = heroes property




    // have to update object's properties in heroicData array
    //update edits
    // $('#root').append(renderHeroCard(heroes));
    // //.append  & html to call it like an array
    // //call actual id of the hero card
    // //render card submission at index
    // //inserts display card 

    // $('#root').remove(renderHeroEditForm(heroes));
   //remove hero's edit form card
   event.target.parentNode.remove();
   //removes hero's edit form


   $('#root').append(renderHeroCard(heroes));


};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part

    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part

          
    
    for(let i=0; i<heroes.length; i++){
        $root.append(renderHeroCard(heroes[i]));
        
    }
    // $root.append(renderHeroEditForm(heroes));
    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button

    // $('#edits').on("click", handleEditButtonpress());
    // $('#button').click( handleEditButtonpress());

    // $('#edits').on('click', handleEditButtonPress(heroes));
    $root.on("click", ".edits", handleEditButtonPress);
    $root.on("click", ".cancels", handleCancelButtonPress);
    $root.on("click", ".submits", handleEditFormSubmit);
    // $(".edit").on("click", handleEditButtonPress());
    //$("[id*='edits']")
    // .on ^ 


    // no heroes parameter?
    // $root.on('click', handleEditButtonPress(heroes));

    //  const button = document.querySelector("button");
    //  button.addEventListener("click", handleEditButtonPress());

    //  addEventListener(button, "click", handleEditButtonPress());

   


     
    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form
    // $("editButton").on("click",  handleEditFormSubmit());
    // $('#button').click( handleEditFormSubmit());

    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);


    // // ${document}.on(click, .heroes, function(){
    //     handleeditbuttonpress(this)
    // })
});
