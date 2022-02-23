class Form{

    constructor(){

        this.input = createInput("como tu se chama meu parça")
        this.button = createButton("não tem nada aqui")
        this.greeting = createElement("h2")
    }

    hide(){

        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }


display(){
    var title = createElement("h2")
    title.html("Não tem jogo aqui")
    title.position(displayWidth/2 - 50,0)
    this.input.position(displayWidth/2 - 40,displayHeight/2 - 80)
    this.button.position(displayWidth/2 + 30,displayHeight/2)
    this.button.mousePressed(()=>{

        this.input.hide()
        this.button.hide()
         player.name = this.input.value()
        playerCount = playerCount + 1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("fala ae "+player.name+" tô fazendo umas tramoias qq tu acha de da um help bro") 
        this.greeting.position(displayWidth/2 - 70,displayHeight/4)
    })
}

}