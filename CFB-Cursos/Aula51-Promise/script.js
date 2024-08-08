//promise possibilita continuar execução de outros codigos, esperando algum retorno necessário, sendo executado posteriormente, é uma promessa de execução
const numero=document.getElementById('numero')

let promise=new Promise((res_ok,res_nao_ok)=>{//criando uma Promise com nome promise e com resolve chamado res_ok e reject com res_nao_ok
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

promise.then((retorno)=>{//se deu certo
    numero.innerHTML=retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promise.catch((retorno)=>{//se deu errado
    numero.innerHTML=retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
})

numero.innerHTML='Processando...'//antes de realizar a lógica já estará na tela e depois de 3 segundos o promise mostra a resposta
