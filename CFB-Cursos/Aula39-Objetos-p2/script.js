class Carro{
    canal='CFB Curso'//propriedade fora do constructor que pode ser utilizada
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=300
        }else if(ptipo==2){
            this.tipo='Utilitário'
            this.velmax=100
        }else if(ptipo==3){
            this.tipo='Passeio'
            this.velmax=160
        }else{
            this.tipo='Militar'
            this.velmax=180
        }
    }

    //-----------------------------
    getNome(){// metodo entitulado de getNome para retorna o nome dos objetos c1 c2 c3 ou c4 
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    //-------------------------------------
    getInfo(){//array com todas informações
        return [this.nome, this.tipo, this.velmax]
    }
    //--------------------------------------
    
    setNome(nome){//método para trocar o nome dos objetos 
        this.nome=nome
    }

    setNome(tipo){
        this.tipo=tipo
    }

    setNome(velmax){
        this.velmax=velmax
    }

    //----------------------------------------
    info(){//metodo dentro da class para imprimir os dados a seguir.
        console.log(`Nome: ${this.nome}`)//com template string
        console.log('Tipo: '+ this.tipo)
        console.log('V. Max: '+ this.velmax)
        console.log(`Canal: ${this.canal}`)//chama a propriedade canal que foi criada fora do constructor, normalmente.
        console.log('------------------------')
    }
}



let c1=new Carro('Rapidão',1)//ao atribuir classe deve-se colocar as duas propriedades atribuidas no contructor pnome e ptipo.
let c2=new Carro('Super Luxo',2)
let c3=new Carro('Bombadão',4)
let c4=new Carro('Carrego tudo',3)

//------------------------------------

c1.setNome('Super Veloz')//altera o nome de c1 para Super Veloz através do set

//------------------------------------------

c1.info()//executa as impressoes do metodo com os dados de c1 e o canal que está fora do constructor como exemplo
c2.info()

//-------------------------------------------

console.log(c3.getNome())//utilizando o metodo getNome, imprimirá o nome de c3

//----------------------------------------

console.log(c3.getInfo()[0])//retorna o nome de c3 através do metodo getInfo que contem um array