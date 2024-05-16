// for(inicialização; condição; controle ou contador){}
for( let i=0; i<10; i++ ){
    if(i%2==0){
    console.log(i+" é par" )
    }else{
    console.log(i + " é ímpar")}
}

//for in n é a posição dos elementos do array
let num = [10, 20, 30, 40, 50]
for(n in num){
    console.log("Posição "+n+" valor "+ num[n])   
}
// o mesmo que for(let i =0; i<num.length; i++){ console.log("Posição "+i+" valor "+ num[i])}

//for off n é os elementos diretos de num
for(n of num){
    console.log(n)
}

//para objetos do DOM
const objs = document.getElementsByTagName("div")
for (o in objs){
    console.log(o)// devolve a posição das div
}
for (o of objs){
    console.log(o) //devolve no console do navegador o conteúdo das div
}