let novaVelocidade;
let velocidade = 0;
let condicao = true;

let nome = prompt("Digite o nome da nave");

while (condicao) {
  let escolha = prompt(" 1 - acelerar 5\n 2 - Desacelerar 5\n 3 - Imprimir resultado\n 4 - Sair")
  if(escolha == 1){
    acelerar()
  }
  if(escolha == 2){
    desacelerar()
  }
  if(escolha == 3) {
    if(velocidade < 0)
    {
      alert("Sua velocidade é menor que zero, acelere a nave");
    }else {
      imprimir()
    }
  }

  if(escolha == 4){
    condicao = false;
    alert("Você optou por descer da nave, espero que tenha gostado do passeio");
  }

}


function acelerar(){
  velocidade += 5
  novaVelocidade = velocidade

  return novaVelocidade
}


function desacelerar(){
  velocidade -= 5
  novaVelocidade = velocidade

  return novaVelocidade
}


function imprimir(){
  velocidade -= 5
  novaVelocidade = velocidade
  alert(` O nome da nave é ${nome} e a velocidade atual é ${novaVelocidade} km/s`);
}