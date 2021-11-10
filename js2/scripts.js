var nome = prompt("Informe seu nome?");
var velocidade = 0;

var velocidade = prompt("Qual velocidade você quer acelerar a nave?");

confirm("Você está usando a velocidade de " + velocidade + " km/s");

if(velocidade < 0)
{
    alert("Nave está parada. Considere partir e aumentar a velocidade");
}

if(velocidade < 40)
{
    alert("Você está devagar, podemos aumentar mais");
}


if(velocidade >= 80)
{
    alert("Velocidade alta. Considere diminuir");
}

if(velocidade >= 100)
{
    alert("Velocidade perigosa. Controle automático forçado.")
}


alert(
    "Nome Piloto: " + nome + "\nVelocidade: " + velocidade);





