//Abstract diz respeito a uma class que não pode ser instanciada, so serve de base para outras classes, so pode ser herdadas a outras classes

class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){//essa condição torna a classe abstract, dando erro ao tentar instancia-la
            throw new TypeError('Esta classe não pode ser instânciada')
        }
        if(this.ligar===undefined){//condição que obriga filhos desta classe a implementar o método ligar
            throw new TypeError('É obrigatório implementar o método ligar')
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{//objeto Carro que herda a class abstract carro padrão
    constructor(tipo,estagioTurbo){
        super()//herdar
        this.turbo=new Turbo(estagioTurbo)//novo parametro com a class Turbo atribuida abaixo
        if(tipo==1){
            this.velMax=120
            this.nome='normal'
        }else if(tipo==2){
            this.velMax=160
            this.nome='esportivo'
        }else if(tipo==3){
            this.velMax=200
            this.nome='Super Esportivo'
        }
        this.velMax+=this.turbo.pot
    }
    info(){//função para imprimir informações, abaixo será declarada novamente em um objeto filho a este mostrando a função do polimorfismo
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log('----------------------------')
    }

    ligar(){//se não tivesse essa implementação daria erro
        this.ligado=true
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{//CarroEspecial herda atributos do Carro
    constructor(estagioTurbo){//unica variável que será passada é o estagioTurbo
        super(4,estagioTurbo)//os atributos entre parenteses serão usados na herança da class Carro, mas como não foi atribuido um tipo 4, será feito abaixo
        this.velMax=300+this.turbo.pot
        this.nome='Carro Especial'
    }
    info(){//exemplo de polimorfismo, função com mesmo nome da função do pai, mas com atuação diferente.
        //super.info() pode ser usado para herdar as informações do info do Carro
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel.Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log('----------------------------')
    }
}

const c1=new Carro(1,0)//instanciando Carro, o Carropadrao não pode ser por ser abstract
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)
//const c4=new CarroPadrao() daria erro porser abstract

c1.info()
c2.info()
c3.info()