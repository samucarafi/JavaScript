class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
        
    }

    //-----------------------------
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    
    //--------------------------------------
    
    setNome(nome){//metodo (set) para trocar o nome dos objetos 
        this.nome=nome
    }

    setNome(idade){
        this.idade=idade
    }

    //----------------------------------------
    info(){
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