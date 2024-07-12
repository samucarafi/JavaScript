let digitos=[...document.getElementsByName('digito')]
let resultado=document.getElementById('resultado')
const btnSoma=document.getElementById('soma')
const btnDiminuir=document.getElementById('diminuir')
const btnMultiplicar=document.getElementById('multiplicar')
const btnDividir=document.getElementById('dividir')

btnSoma.addEventListener('click',()=>{
    let res=Number(digitos[0].value)+Number(digitos[1].value)
    resultado.value=res
})


btnDiminuir.addEventListener('click',()=>{
    let res=Number(digitos[0].value)-Number(digitos[1].value)
    resultado.value=res
})

btnMultiplicar.addEventListener('click',()=>{
    let res=Number(digitos[0].value)*Number(digitos[1].value)
    resultado.value=res
})

btnDividir.addEventListener('click',()=>{
    let res=Number(digitos[0].value)/Number(digitos[1].value)
    resultado.value=res
})