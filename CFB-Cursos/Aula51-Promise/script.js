//promise possibilita continuar execução de outros codigos, esperando algum retorno necessário, sendo executado posteriormente, é uma promessa de execução
const numero=document.getElementById('numero')

let resultado=false
let tempo=3000

setTimeout(()=>{
    resultado=true
},tempo)

if(resultado){
    numero.innerHTML='Deu tudo certo'
    numero.classList.remove('erro')
    numero.classList.add('ok')
}else{
    numero.innerHTML='Deu tudo errado'
    numero.classList.add('erro')
    numero.classList.remove('ok')
}

numero.innerHTML='Processando...'