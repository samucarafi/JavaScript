const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

console.log(dc1)
console.log(dc1.id)//retorna no console o id desta div
console.log(dc1.innerHTML) //retorna o conteúdo html desta div
dc1.innerHTML="Samuel"//altera conteúdo de c1

const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6] //criando um array com elementos do DOM
//Opção para alterar todos elementos utilizando for of
// for (d of arrayElementos)
//     d.innerHTML="Samuel"

//Opção mais otimizada utilizando map
arrayElementos.map((e)=>{
    e.innerHTML="Samuel"
})
