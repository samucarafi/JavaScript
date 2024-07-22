const f_tipoMilitar=document.querySelector('#f_tipoMilitar')
const f_tipoNormal=document.querySelector('#f_tipoNormal')
const f_blindagem=document.querySelector('#f_blindagem')
const f_municao=document.querySelector('#f_municao')
const carros=document.querySelector('#carros')
const btn_addCarro=document.querySelector('#btn_addCarro')
const f_nome=document.querySelector('#f_nome')
const f_portas=document.querySelector('#f_portas')

let a_carros=[]

const removerCarro=(quem)=>{//função para remover carro
    a_carros=a_carros.filter((el)=>{//o array carros mudará conforme filtro de cada elemento conforme retorno abaixo
        return el.nome!=quem//retorna ao array carros novo apenas os carros com nome diferente ao do botão clicado
    })
}

f_tipoMilitar.addEventListener('click',()=>{
    f_nome.value=''
    f_portas.value='0'
    f_blindagem.removeAttribute('disabled')//habilita edição destes valores pois é militar
    f_municao.removeAttribute('disabled')//habilita edição destes valores pois é militar
})
f_tipoNormal.addEventListener('click',()=>{
    f_blindagem.setAttribute('disabled','disabled')//desabilita edição destes valores pois não é militar
    f_municao.setAttribute('disabled','disabled')//desabilita edição destes valores pois não é militar
   
    console.log('teste')
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=''
    a_carros.forEach((c)=>{//percorrer o array carros 
    const div=document.createElement('div')//criar elemento div
    const btn=document.createElement('button')//criar botao de remover
    btn.innerHTML='remover'//nomear botão
    btn.addEventListener('click',(evt)=>{
        const quemRemover=evt.target.parentNode.dataset.nome
        removerCarro(quemRemover)
        gerenciarExibicaoCarros()
    })
    div.setAttribute('class','carro')//atribuir class com nome carro
    div.setAttribute('data-nome',c.nome)//atributo de data-nome com o respectivo nome do carro
    div.innerHTML+=`Nome: ${c.nome} <br>`//escrever na div o nome dos carros
    div.innerHTML+=`Portas: ${c.portas} <br>`//escrever na div quantidade de portas
    div.innerHTML+=`Blindagem: ${c.blindagem} <br>`//escrever na div quantidade de portas
    div.innerHTML+=`Munição: ${c.municao} <br>`//escrever na div quantidade de portas
    div.appendChild(btn)//colocar botão dentro da div
    carros.appendChild(div)//atribuir a div criada a div com id carros
    })
}


btn_addCarro.addEventListener('click',()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value,f_portas.value)//cria um carro(objeto), passando os valores de nome e portas do input
        a_carros.push(c)//adiciona o carro ao array carros
    }else{
        const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()//executa função de percorrer o array, criar div com nome dos carros no resultado

    //depois de adicionar zerar todos valores 
    f_nome.value=''
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
})


class Carro{ //class PAI
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined//cor vazio
    }
    ligar=function(){//função para ligar
        this.ligado=true
    }
    desligar=function(){//função para desligar
        this.ligado=false
    }
    setCor=function(cor){//função para selecionar cor
        this.cor=cor
    }
}

class Militar extends Carro{//a class filho (militar) herdará todos elementos da class Carro através do extends
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)//puxa da class do pai os parâmetros entre parênteses
        this.blindagem=blindagem
        this.municao=municao
        this.setCor('Verde')//cor padrão verde
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}
class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}

