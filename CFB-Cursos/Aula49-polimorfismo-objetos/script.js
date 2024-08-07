class Carro{//objeto Carro
    constructor(tipo,estagioTurbo){
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
        console.log('----------------------------')
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

const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()