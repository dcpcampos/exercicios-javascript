class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }
    set spaceshipType(type) {
        this.type = type
    }
    set spaceshipTypeQuantity(quantity) {
        this.quantity = quantity
    }
    set speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - 0.17))
    }
}

let spaceshipName, spaceshipCrewQuantity, spaceship, spaceshipTypeQuantity, spaceshipType

function spaceshipCreate() {
    spaceshipName = prompt("Digite o nome da nave")
    spaceshipCrewQuantity = Number(prompt("Digite a quantidade de tripulantes"))
    spaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity)
    spaceshipTypeQuantity, spaceshipType
    do {
        spaceshipType = prompt("A nave é de batalha ou transporte?")
        if (spaceshipType != null) spaceshipType = spaceshipType.toUpperCase()
        switch (spaceshipType) {
            case "BATALHA":
                spaceshipTypeQuantity = Number(prompt("Informe quantas armas a nave tem disponível:"))
                spaceship.spaceshipType = spaceshipType
                spaceship.spaceshipTypeQuantity = spaceshipTypeQuantity
                break
            case "TRANSPORTE":
                spaceshipTypeQuantity = Number(prompt("Informe quantos lugares a nave comporta:"))
                spaceship.spaceshipType = spaceshipType
                spaceship.spaceshipTypeQuantity = spaceshipTypeQuantity
                break
            default:
                alert("Tipo de nave inválido!")
        }
    } while (spaceshipType != "BATALHA" && spaceshipType != "TRANSPORTE")
}

function options() {
    let acceleration
    let chosenOption
    while (chosenOption != 3) {
        chosenOption = Number(prompt("O que deseja fazer?\n1- Acelerar a nave\n2- Trocar a Nave\n3- Imprimir e sair"))
        switch (chosenOption) {
            case 1:
                acceleration = Number(prompt("Para qual velocidade em km/s deseja acelerar a nave?"))
                spaceship.speedUp = acceleration
                break
            case 2:
                spaceshipCreate()
                break
            case 3:
                alert("Nome: " + spaceship.name + "\n" +
                    "Quantidade de tripulantes: " + spaceship.crewQuantity + "\n" +
                    "Velocidade atual: " + spaceship.currentVelocity + "km/s")
                break
            default:
                alert("Opção Inválida! Tente novamente.")
        }
    }
}

spaceshipCreate()
options()