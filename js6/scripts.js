let spaceship = prompt("Informe o nome da nave")
let newSpaceship = ""
let char = prompt("Qual caractere do nome " + spaceship + " você deseja substituir?")
let charsub = prompt("Qual o caracterer que você deseja colocar no lugar de " +  char)

for (let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == char)
    {
        newSpaceship += charsub;
    }

    else {
        newSpaceship += spaceship[i];
    }
    
}


alert("O nome da nave é " + newSpaceship);