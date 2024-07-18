function Pessoa(pnome,pidade){//neste caso o uso de function não se usa mais construction, as propriedades vão dentro dos parenteses
    this.nome=pnome,//coloca virgula após cada atribuição
    this.idade=pidade,

    //-----------------------------
    this.getNome=function(){//muda também a forma de receber os elementos
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    
    //--------------------------------------
    
    this.setNome=function(nome){//metodo para trocar o nome dos objetos 
        this.nome=nome
    },

    this.setNome=function(idade){
        this.idade=idade
    },

    //----------------------------------------
    this.info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log('Idade: '+ this.idade)
        console.log('------------------------')
    }
}
let pessoas=[]
const btn_add=document.getElementById('btn_add')
const res=document.querySelector('.res')

const addPessoa=()=>{
    res.innerHTML=''//limpar elemento antes de adicionar para não repetir nomes impressos
    pessoas.map((p)=>{//percorrer array
        const div=document.createElement('div')//criar uma div
        div.setAttribute('class','pessoa')// atribuir uma class
        div.innerHTML=`Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}`//pegar nome e idade digitados e imprimir na div
        res.appendChild(div)//atribuir div como filha do elemento res
    })
}

btn_add.addEventListener('click', (evt)=>{
    const nome=document.querySelector('#f_nome')//pegar nome digitado
    const idade=document.querySelector('#f_idade')// pegar idade digitada
    const p=new Pessoa(nome.value, idade.value)
    pessoas.push(p)// adcionar ao array pessoas o nome e idade digitados
    nome.value=''//limpar a caixa de nome
    idade.value=''//limpar a caixa de idade
    nome.focus()//cursor ficar na caixa nome após adicionar
    addPessoa()
})