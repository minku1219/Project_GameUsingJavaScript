//Game Constants & Variables

let direction={x:0,y:0};
const foodsound=new Audio('food.mp3');
const gameoversound=new Audio('gameover.mp3');
const movesound=new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let speed=2;
let lastPaintTime = 0;
let snakearr=[
    {x:13,y:15}
]
food ={x:6,y:7};

// Game Functions

function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime -lastPaintTime)/1000<1/speed);
    {
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}


function gameEngine(){
    //Part 1: Updating the Snake Array

    //Part 2: Display the Snake and Food

    //Display the Snake
    board.innerHtml="";
    snakearr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridcolumnstart=e.x;
        snakeElement.style.gridrowstart=e.y;
        snakeElement.classList.add('snake');
        if(index==0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Display the Food

        foodElement=document.createElement('div');
        foodElement.style.gridcolumnstart=food.x;
        foodElement.style.gridrowstart=food.y;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}





// Main Logic Starts Here

window.requestAnimationFrame(main);