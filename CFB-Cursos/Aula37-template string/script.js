const caixa=document.querySelector('#caixa')
const carros=['POLO', 'GOLF', 'HRV','T-CROSS']



const curso='JavaScript'
const canal='CFB Cursos'
const frase= `Este é o curso de ${curso} do canal ${canal}`//template string, para quebrar linha usar <br> no caso de console.log usar \n



caixa.innerHTML=frase

let ol='<ul>'//criando uma lista não ordenada
carros.map((el)=>{//percorrendo o array carros
    ol += `<li>${el}</li>`//adicionando cada carro como uma lista 
})

ol+=`</ul>`//finalizando a lista

caixa.innerHTML+=ol//adicionando a caixa