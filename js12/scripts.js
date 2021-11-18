class SpacialStation {
  spacheshipHitch(name, crew, hitched, openDoors) {
      this.spacheShipName = name
      this.crewQuantity = crew
      this.isHitched = hitched
      this.isOpen = openDoors
  }
}

let spaceshipList = new Array()

let hitchSpaceship = () =>{
  let spaceShipName = prompt("Digite o nome da nave")
  let spaceShipCrew = Number(prompt("Digite a quantidade de tripulantes"))
  let hitch = new SpacialStation()
  hitch.spacheshipHitch(spaceShipName, spaceShipCrew, true,true)
  spaceshipList.push(spaceShipName)
}

let printSpaceship= function(){
  let list = spaceshipList.join("\n")
  alert("Lista de  naves: \n"  + list)
}

function showMenu(){
  let chosenOption
  do{
    chosenOption = prompt("Você deseja: \n1- Realizar Engate"  + 
    "\n2- Imprimir Naves"+ "\n3-Sair do programa")
    switch(chosenOption){
      case "1":
        hitchSpaceship()
        break
      case  "2":
        printSpaceship()
        break
      case "3": 
        break
      default:
        alert("Opção inválida")
    }
  } while (chosenOption != "3") {
    
  }
}

showMenu()