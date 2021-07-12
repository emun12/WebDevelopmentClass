import keypress from 'keypress';
import Game from "./engine/game.js";
import gameState from "./engine/game.js";
//keypress(process.stdin);


/**
 * The code in this file is used to run your game in the console. Use it
 * to help develop your game engine.
 *
 */

let game = new Game(4);
//console.log(game.toString());

//console.log(game.setupNewGame());

console.log(game.toString());
//console.log(game.move("up"));
console.log("kinda words2");
let cnt=0;
//while (game.gs.over==false){
    //game.move("up");
    //game.move("down");
    //game.move("left");
    console.log(cnt);
    game.move("down");
    console.log(game.toString());
    console.log(game.gs.over);
    //game.gs.over=true;
    cnt=cnt+1;
//}
// console.log(game.move("up"));
// console.log(game.toString());
// console.log(game.move("right"));
// console.log(game.toString());
// console.log(game.move("right"));
// console.log("kinda words");
// console.log(game.toString());
game.onMove(gameState => {
    console.log(game.toString());
    // console.log(game.gameState);
});

game.onWin(gameState => {
    console.log('You won with a gameState of...', gameState)
});

game.onLose(gameState => {
    console.log('You lost! :(', gameState)
    console.log(`Your score was ${gameState.score}`);
});

process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'right':
            game.move('right');
            break;
        case 'left':
            game.move('left');

            break;
        case 'down':
            game.move('down');

            break;
        case 'up':
            game.move('up');
            break;
    }
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});


process.stdin.setRawMode(true);
process.stdin.resume();

