//promise possibilita continuar execução de outros codigos, esperando algum retorno necessário, sendo executado posteriormente, é uma promessa de execução
const numero=document.getElementById('numero')
const btn_promessa=document.getElementById('btn_promessa')

btn_promessa.addEventListener('click',(evt)=>{

    numero.innerHTML='Processando...'//antes de realizar a lógica já estará na tela e depois de 3 segundos o promise mostra a resposta

    promessa()//execução da função com a promise

    .then((retorno)=>{//se deu certo, promessa fica subtendida não precisando antecedor o ponto
        numero.innerHTML=retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })
    .catch((retorno)=>{//se deu errado
        numero.innerHTML=retorno
        numero.classList.add('erro')
        numero.classList.remove('ok')
    })
})

const promessa=()=>{//função com o promise

let p=new Promise((res_ok,res_nao_ok)=>{//criando uma Promise com nome promise e com resolve chamado res_ok e reject com res_nao_ok
    let resultado=true//para mudar resultado para deu tudo errado basta mudar para false
    let tempo=3000//tempo para execução

    setTimeout(()=>{//esperar um tempo para executar
        if(resultado){
            res_ok('Deu tudo certo')
        }else{
            res_nao_ok('Deu tudo errado')
        }
    },tempo)
})
return p


}

numero.innerHTML='Esperando...'