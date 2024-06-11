const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const c1=document.querySelector('#c1')
const cursos=['HTML','CSS','JAVASCRIPT','PHP','REACT','MYSQL']

cursos.map((el,indice)=>{//função para adicionar uma div a cada elemento do array cursos acima, além de atribuir um id atrelado ao indice, uma classe finalizando com a inclusão dentro da div caixa1
    const novosElementos=document.createElement('div')
    novosElementos.innerHTML=el
    novosElementos.setAttribute('id','c'+indice)
    novosElementos.setAttribute('class','curso c1')
    caixa1.appendChild(novosElementos)
})

const novoElemento=document.createElement('div')
novoElemento.innerHTML='ReacNative'
novoElemento.setAttribute('id','c7')
novoElemento.setAttribute('class','curso c1')

caixa1.appendChild(novoElemento)