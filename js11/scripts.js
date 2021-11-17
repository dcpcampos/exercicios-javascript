let spaceship = {
  velocity: 0,
  speedUp: function(acceleration){
    this.velocity += acceleration
  }
}

function registerSpaceship(){
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.type =  prompt("Informe o tipo da nave")
  spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function  accelerate(){
  let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
  spaceship.speedUp(acceleration)
  if(spaceship.velocity > spaceship.maxVelocity)
  {
    alert("VELOCIDADE MAXIMA ULTRAPASSADA!"  + 
    "\nVelocidade da Nave: " + spaceship.velocity + "km/s\n" +
    "Velocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
  }
}

function stoper() {
  alert("Nome: " + spaceship.name + 
  "\nTipo: " +spaceship.type + 
  "\nVelocidade da nave: " + spaceship.velocity + 
  "\nMáxima da Nave: " + spaceship.maxVelocity)
  spaceship.velocity = 0
}

function showMenu(){
  let chosenOption
  do{
    chosenOption = prompt("Você deseja: \n1- Acelerar"  + 
    "\n2- Parar")
    switch(chosenOption){
      case "1":
        accelerate()
        break
      case  "2":
        stoper()
        break
      default: 
        alert("Opção invalida")
    }
  } while (chosenOption != "2") {
    
  }
}

registerSpaceship()
showMenu()