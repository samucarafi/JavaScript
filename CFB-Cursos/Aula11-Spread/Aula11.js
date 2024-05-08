const jogador1={nome:"Samuel", energia:100, vidas:3, magia:150}
const jogador2={nome:"Aristela", energia:100, vidas:3, velocidade:80}
const jogador3={...jogador1, ...jogador2}//... é o spread e juntou as informações de jogador1 e 2, incluindo o que um possui e o outro não em jogador3

console.log(jogador3)

const soma=(v1, v2, v3)=>{
    return v1 + v2 +v3
}
let valores=[1,5,4]
    console.log("A soma de " +valores+" é "+ soma(...valores))//Aqui o spread é importante pois sem o mesmo não retornaria o valor da soma, devendo ser espalhado os valores através do ...

const objs1=document.getElementsByTagName("div")// ficará como elemento html.

const objs2=[...document.getElementsByTagName("div")]// usando o spread para pegar as div, se transforma em uma array, e deve se colocar entre [], tendo muito mais opções de funções.

objs2.forEach(element => {
    element.innerHTML="Samuel"
})// não seria possivel com objs1

//as duas próximas execuções só é possivel observar pelo navegador
console.log(objs1)
console.log(objs2)