/*
Add your code for Game here
 */


export default class Game {
    // let arr = [];
    constructor (height){
        this.moveCallbacks = [];
        this.winCallbacks=[];
        this.loseCallbacks=[];
        this.height = height;
        let arr = [];
        // in js u don't have to specify length in the array
        this.gs = this.setupNewGameTemp();
    //      this.gs.board =[  8 , 4, 16,  4,
	//    4,  4, 32,  8,
	//    8,  2, 16,  2,
	//    2,  8,  2,  4];// [8,0,0,16,0,0,0,8,0,0,0,0,4,0,16,8];//[0,0,0,8,0,16,16,4,8,0,8,0,0,0,0,0];

    }

    setupNewGame(){
        this.gs.score=0;
        this.gs.won=false;
        this.gs.over=false;
        let arr = [];
        let height = this.height;

        // fill board with 0's
        for(let i=0;i<height*height;i++){
            arr.push(0);
           
        } 
        // generate 2 random numbers on the board randomly
        // first pick a random space
        // pick a random number from 1-10. 
        //if it equals 1 then add a 4
        // otherwise, add a 2  
        let randPosition = Math.floor(Math.random() * height * height);
        //let randNum = Math.floor(Math.random() * 10); 
        let randNum = Math.random(); 
        
        // math.random() - 1 to 10
        if (randNum <= .1){
            // add a 4 
           arr[randPosition] = 4;
        } else{
            // add a 2 
            arr[randPosition] = 2;
        }

        // doing this twice, but not going over the same tile already selected
        let randPosition2 = Math.floor(Math.random() * height * height);
        while(randPosition == randPosition2) {
            randPosition2 = Math.floor(Math.random() * height * height);
        }
            let randNum2 = Math.random(); 
            if (randNum2 <= .1){
                // add a 4 
               arr[randPosition2] = 4;
            } else{
                // add a 2 
                arr[randPosition2] = 2;
            }
        this.gs.board=arr;    
    }
    setupNewGameTemp(){
        let arr = [];
        let height = this.height;
        // in js u don't have to specify length in the array
        let gs = new gameState(arr,0,false,false);

        // fill board with 0's
        for(let i=0;i<height*height;i++){
            arr.push(0);
           
        } 
        // generate 2 random numbers on the board randomly
        // first pick a random space
        // pick a random number from 1-10. 
        //if it equals 1 then add a 4
        // otherwise, add a 2  
        let randPosition = Math.floor(Math.random() * height * height);
        //let randNum = Math.floor(Math.random() * 10); 
        let randNum = Math.random(); 
        
        // math.ranomd() - 1 to 10
        if (randNum <= .1){
            // add a 4 
           gs.board[randPosition] = 4;
        } else{
            // add a 2 
            gs.board[randPosition] = 2;
        }

        // doing this twice, but not going over the same tile already selected
        let randPosition2 = Math.floor(Math.random() * height * height);
        while(randPosition == randPosition2) {
            randPosition2 = Math.floor(Math.random() * height * height);
        }
            let randNum2 = Math.random(); 
            if (randNum2 <= .1){
                // add a 4 
               gs.board[randPosition2] = 4;
            } else{
                // add a 2 
                gs.board[randPosition2] = 2;
            }
        return gs;    
    }

    loadGame(gameState){
        this.gs = gameState;
    }

    move(direction){


    let arr = this.gs.board;
    let height = this.height;
        if(direction=="right"){
            
           

            let tmprow = [];
            for(let i=0; i<this.height; i++){
             
                tmprow = [];

                //fill array with non zero values
                for(let j=0; j<this.height; j++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                tmprow = tmprow.reverse();
                //clear board's row
                for(let j=0;j<this.height;j++){
                    arr[i*height+j]=0;
                }
                
                //populate board with non zero values
                for(let j=0;j<tmprow.length;j++){
                    arr[i*height+(height-j-1)]=tmprow[j];
                }

            }
            let tmparr = Array.from(arr);   
            for(let i=0; i<this.height; i++){
                for(let j=this.height-1; j>0; j--){
                    if(tmparr[this.height*i + j] == tmparr[this.height*i + (j-1)] && arr[this.height*i + j] == arr[this.height*i + (j-1)]){
                        arr[i*height + j - 1] = arr[i*height+j] + arr[i*height+j-1]; 
                        arr[i*height + j] = 0;
                        this.gs.score = this.gs.score + arr[i*height+j] + arr[i*height+j-1]; 
                    }
                }

            }
            //let tmprow = [];
            for(let i=0; i<this.height; i++){
             
                tmprow = [];

                //fill array with non zero values
                for(let j=0; j<this.height; j++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                tmprow = tmprow.reverse();
                //clear board's row
                for(let j=0;j<this.height;j++){
                    arr[i*height+j]=0;
                }
               
                //populate board with non zero values
                for(let j=0;j<tmprow.length;j++){
                    arr[i*height+(height-j-1)]=tmprow[j];
                }

            }
        } 
        else if(direction=="left"){
            

            
            let tmprow = [];
            for(let i=0; i<this.height; i++){
             
                tmprow = [];
                
                //fill array with non zero values
                for(let j=0; j<this.height; j++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                    
                }
                
                // tmprow = tmprow.reverse();
                //clear board's row
                for(let j=0;j<this.height;j++){
                    arr[i*height+j]=0;
                }
         
                //populate board with non zero values
                for(let j=0;j<tmprow.length;j++){
                    arr[i*height+j]=tmprow[j];
                }
                

            }
           
            let tmparr  = Array.from(arr);
            for(let i=0; i<this.height; i++){
                for(let j=0; j<this.height-1; j++){
                    if(tmparr[this.height*i + j] == tmparr[this.height*i + (j+1)] && arr[this.height*i + j] == arr[this.height*i + (j+1)]){
                        arr[i*height + j] = arr[i*height+j] + arr[i*height+j+1]; 
                        arr[i*height + j + 1] = 0;
                        
                        this.gs.score = this.gs.score + arr[i*height+j] + arr[i*height+j+1]; 
                     } 
                     
                }
            }
           

            for(let i=0; i<this.height; i++){
             
                tmprow = [];

                //fill array with non zero values
                for(let j=0; j<this.height; j++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                // tmprow = tmprow.reverse();
                //clear board's row
                for(let j=0;j<this.height;j++){
                    arr[i*height+j]=0;
                }
               
              //populate board with non zero values
                for(let j=0;j<tmprow.length;j++){
                    arr[i*height+j]=tmprow[j];
                }

            }
            

        } 
        else if(direction=="up"){

            let tmprow = [];
            for(let j=0; j<this.height; j++){
             
                tmprow = [];

                //fill array with non zero values
                for(let i=0; i<this.height; i++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                // tmprow = tmprow.reverse();
                //clear board's row
                for(let i=0;i<this.height;i++){
                    arr[i*height+j]=0;
                }
       
                //populate board with non zero values
                for(let i=0;i<tmprow.length;i++){
                    arr[i*height+j]=tmprow[i];
                }

            }
            let tmparr = Array.from(arr);
            for(let i=0; i<height-1; i++){
                for(let j=0;j<height;j++){
                    if(tmparr[i*height+j] == tmparr[(i+1)*height + j] && arr[i*height+j] == arr[(i+1)*height + j]){
                        arr[i*height+j] = arr[i*height+j] + arr[(i+1)*height + j];
                        arr[(i+1)*height +j] = 0;
                        this.gs.score = this.gs.score + arr[i*height+j] + arr[(i+1)*height + j];
                    }
                }
            }


            for(let j=0; j<this.height; j++){
             
                tmprow = [];

                //fill array with non zero values
                for(let i=0; i<this.height; i++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                // tmprow = tmprow.reverse();
                //clear board's row
                for(let i=0;i<this.height;i++){
                    arr[i*height+j]=0;
                }
            
                //populate board with non zero values
                for(let i=0;i<tmprow.length;i++){
                    arr[i*height+j]=tmprow[i];
                }

            }


        } 
        else if (direction=="down"){
            let tmprow = [];
            for(let j=0; j<this.height; j++){
             
                tmprow = [];

                //fill array with non zero values
                for(let i=0; i<this.height; i++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                tmprow = tmprow.reverse();
                //clear board's col
                
                for(let i=0;i<this.height;i++){
                    arr[i*height+j]=0;
                }

                for(let i=0;i<tmprow.length;i++){
                    arr[(height-1-i)*height+(j)]=tmprow[i];
                }

            }
            let tmparr = Array.from(arr);
            for(let i=height-1; i>0; i--){
                for(let j=0;j<height;j++){
                    if(tmparr[i*height+j] == tmparr[(i-1)*height + j] && arr[i*height+j] == arr[(i-1)*height + j]){
                        arr[(i-1)*height+j] = arr[i*height+j] + arr[(i-1)*height + j];
                        arr[i*height +j] = 0;
                       this.gs.score = this.gs.score + arr[i*height+j] + arr[(i-1)*height + j];
                    }
                }
            }
            // shifts the whole board
            for(let j=0; j<this.height; j++){
             
                tmprow = [];

                //fill array with non zero values
                for(let i=0; i<this.height; i++){        
                    if(arr[this.height*i+j]!=0){
                        tmprow.push(arr[this.height*i+j]);
                    }  
                }
                tmprow = tmprow.reverse();
                //clear board's col
                
                for(let i=0;i<this.height;i++){
                    arr[i*height+j]=0;
                }
                
               
                //populate board with non zero values
                for(let i=0;i<tmprow.length;i++){
                    arr[(height-1-i)*height+(j)]=tmprow[i];
                }

            }
        }
        
        this.addTile(arr);
        this.checkWin(arr);
        this.checkLost(arr);
         

        // callback for move event
        for(let j=0; j<this.moveCallbacks.length; j++){
            this.moveCallbacks[j](this.gs);
            // this.onMove(function) 
        }


    }

    // toString(){
    //     let arr = Array.from(this.gs.board); 
    //     for(let i=0;i<this.height;i++){
    //      
    //     } 
    //     return this.gs.board;
    // }

    addTile(arr){
        let available = [];
        // the 0's
        for(let i=0; i<arr.length;i++){
            if(arr[i]==0){
                available.push(i);
            }
        }

        let randNum = Math.floor(Math.random() * available.length);
        let index = available[randNum];
        if (randNum <= 1){
            // add a 4 
           arr[index] = 4;
        } else{
            // add a 2 
            arr[index] = 2;
        }
         
    }

    getScore(game){
       return game.gs.score;
    }
    
    onMove(callback){
        this.moveCallbacks.push(callback);

    }

    onWin(callback){
        // you have a spot in the array that is 2048
        this.winCallbacks.push(callback);

    }

    checkWin(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i] == 2048){
                this.gs.won = true;
                //something with onWin();
            } 
        }
        for(let j=0; j<this.winCallbacks.length; j++){
            this.winCallbacks[j](this.gs);
            // this.onMove(function) 
        }
    }


    onLose(callback){
        this.loseCallbacks.push(callback);
    }

    checkLost(tarr){
        // if there is a 0 anywhere in the board, the game is not over.
        let isLost = true;


        let resetarr = Array.from(this.gs.board);
        let arr = Array.from(tarr);
        let height = this.height;
        for(let i =0;i<arr.length;i++){
            if (arr[i]==0){
                isLost=false;
            }
        }
        let tmparr = Array.from(arr);   
            for(let i=0; i<this.height; i++){
                for(let j=this.height-1; j>0; j--){
                    if(tmparr[this.height*i + j] == tmparr[this.height*i + (j-1)] && arr[this.height*i + j] == arr[this.height*i + (j-1)]){
                        arr[i*height + j - 1] = arr[i*height+j] + arr[i*height+j-1]; 
                        arr[i*height + j] = 0;
                        isLost = false;
                    }
                }
            }

            arr = Array.from(resetarr);
            tmparr  = Array.from(arr);
            for(let i=0; i<this.height; i++){
                for(let j=0; j<this.height-1; j++){
                    if(tmparr[this.height*i + j] == tmparr[this.height*i + (j+1)] && arr[this.height*i + j] == arr[this.height*i + (j+1)]){
                        arr[i*height + j] = arr[i*height+j] + arr[i*height+j+1]; 
                        arr[i*height + j + 1] = 0;
                        
                        isLost = false;
                     } 
                     
                }
            }
            arr = Array.from(resetarr);
            tmparr = Array.from(arr);
            for(let i=0; i<height-1; i++){
                for(let j=0;j<height;j++){
                    if(tmparr[i*height+j] == tmparr[(i+1)*height + j] && arr[i*height+j] == arr[(i+1)*height + j]){
                        arr[i*height+j] = arr[i*height+j] + arr[(i+1)*height + j];
                        arr[(i+1)*height +j] = 0;
                        isLost = false;
                    }
                }
            }
            
            arr = Array.from(resetarr);
            tmparr = Array.from(arr);
            for(let i=height-1; i>0; i--){
                for(let j=0;j<height;j++){
                    if(tmparr[i*height+j] == tmparr[(i-1)*height + j] && arr[i*height+j] == arr[(i-1)*height + j]){
                        arr[(i-1)*height+j] = arr[i*height+j] + arr[(i-1)*height + j];
                        arr[i*height +j] = 0;
                      isLost = false;
                    }
                }
            }

            
        // have to check if any merges can happen even if the board is full
  

        for(let j=0; j<this.loseCallbacks.length; j++){
            this.loseCallbacks[j](this.gs);           
        }
        
        this.gs.over = isLost;


    }

    getGameState(){
        return this.gs;
    }
}


class gameState{

    constructor(board,score,won,over){
        this.board = board;       
        this.score = score;
        this.won = won;
        this.over = over; 
    }
}

