var database
var bcImg
var gameState = 0
var playerCount = 0  
var form
var game
var player 
var allPlayers
var distance = 0
var car1
var car2
var car3
var car4
var cars = []

function setup(){
    database = firebase.database()

    createCanvas(displayWidth - 20,displayHeight - 30);
    game = new Game()
    game.getState()
    game.Link_start()
}

function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if (gameState === 1) {
        clear()
        game.play()   
    }
   
}
