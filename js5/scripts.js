let shipName = prompt("Digite o Nome da Nave")
let totalWarps = 0
let enterWarp = confirm("\nDeseja entrar em dobra espacial?\n\n1- Sim\n2- Não\n")
if (enterWarp) {
    let totalWarps = 1
    let NextWarp = confirm("\nDeseja realizar a próxima dobra?\n\n1- Sim\n2- Não\n")
    while (NextWarp) {
        NextWarp = confirm("\nDeseja realizar a próxima dobra?\n\n1- Sim\n2- Não\n")
        totalWarps++
    }
    alert("\nNome da Nave: " + shipName + "\nNúmero de dobra espacial realizada: " + totalWarps + "\n")
} else {
    alert("\nNome da Nave: " + shipName + "\nNenhuma dobra espacial foi realizada.\n")
}