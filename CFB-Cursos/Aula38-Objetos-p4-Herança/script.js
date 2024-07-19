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
    
}


const c1=new Carro('Normal',4)
c1.ligar()//ligar carro normal
c1.setCor('Preto')//cor preta

const c2=new Militar('Lutador',1,100,50)
c2.atirar()//executar função atirar reduzindo a quantidade de munições
c2.atirar()

//------------------c1---------------------------------------------
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'Sim':'Não')}`)//uso de ternário para responder sim ou não em vez de false e true
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`-----------------------------------------------`)

//-----------------c2------------------------------------
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'Sim':'Não')}`)//uso de ternário para responder sim ou não em vez de false e true
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)