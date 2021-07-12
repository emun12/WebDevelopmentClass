/**
 * Course: COMP 426
 * Assignment: a07
 * Author: Esther Mun
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */


import Game from "./game.js"
 //document.createElement method


export const updateBoard = function(game) {
    for (let i=0;i<16;i++){
        $('#table1 tr').find('td').eq(i).html(game.gs.board[i]);
    }
 
    for(let j=0; j<16; j++){
        $('#h2').eq(j).html(game.gs.score);
    }

 
       if(game.gs.over == true){
        let para=document.createElement("P");
        para.innerHTML = "The Game is over! Press reset.";
        document.getElementById("h4").appendChild(para);
       
       }

       if(game.gs.won == true){
        let para2=document.createElement("P");
        para2.innerHTML = "You Won! Press reset to play again.";
        document.getElementById("h5").appendChild(para2);
      
       } 
       
};

export const renderBoard = function(game) {


    return `<div >
            <center>
               <h class="header1"> 2048 Game </h>
               <h1 class="header1"> Your Score is:  </h1>
               <h2 id="h2"> Your Score is:   </h2>
                <h3 class="header2"> Use the arrow keys (left, right, up, down) to move the tiles around. Your goal is to combine the tiles to get a 2048 tile. </h3>

              <h4 id="h4"> </h4>
              <h5 id="h5"> </h5>

               
            </center>   
            </div>   
            <center>
            <table class="tables5" id="table1">
            <tr>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>                
            </tr>
            <tr>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>                
            </tr>
            <tr>
                <td class="horizontal"> 0 </td>
                <td class="horizontal"> 0 </td>
                <td class="horizontal">  0 </td>
                <td class="horizontal">  0</td>                
            </tr>
            <tr>
                <td class="horizontal">0 </td>
                <td class="horizontal">0 </td>
                <td class="horizontal">0 </td>
                <td class="horizontal">0 </td>                
            </tr>
            </table>

            
         </div>

                <button type = "button" class="resets" id="button1"> reset </button>                       
            </center>    
        </div>


            `

};


export const loadIntoDOM = function(game) {
    const $root = $('#root');
    
    $root.append(renderBoard(game));
    updateBoard(game);

    for (let i=0;i<16;i++){
        $('#table1 tr').find('td').eq(i).html(game.gs.board[i]);
        // $('#table1').html(game.gs.score);
    }

    for(let j=0; j<16; j++){
        $('#h2').eq(j).html(game.gs.score);
    }



};



$(function() {
    // const $root = $('#root');
    let new_game = new Game(4); 
    loadIntoDOM(new_game);

    window.addEventListener("keydown", function(key){
    let score; 
    if(key.keyCode == "37"){
      
        new_game.move("left");

        updateBoard(new_game);

    }
    else if(key.keyCode == "38"){

        new_game.move("up");

        updateBoard(new_game);
    }
    else if(key.keyCode == "39"){
      
        new_game.move("right");

        updateBoard(new_game);
    }
    else if(key.keyCode == "40"){
      
        
        new_game.move("down");

        updateBoard(new_game);


    }
    })



    document.getElementById("button1").addEventListener("click", function(key){
    new_game.setupNewGame();
    document.getElementById("h4").innerHTML = "";
    // removes message by replacing with empty string once you click "reset"
    document.getElementById("h5").innerHTML = "";
    // removes message by replacing with empty string once you click "reset"
    updateBoard(new_game);    

    })



});







