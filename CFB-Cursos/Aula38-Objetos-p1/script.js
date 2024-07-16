class Pessoa{
    constructor(){
        this.nome='Samuel'
    }
}

let p1=new Pessoa()//ao utilizar new, executa o constructor, como o construtor de pessoa não tinha parâmetro entre () ao se mencionar aqui também não se usa

console.log(p1.nome)// imprime a propriedade nome da variável.

class Pessoa1{
    constructor(pnome){//neste caso foi utilizado um parâmetro em contructor.
        this.nome=pnome
    }
}

let p2=new Pessoa1('Pedro')//quando atribuido a class deverá ser colocado um parâmetro entre () com o valor de nome.
let p3=new Pessoa1(100)

console.log(p2.nome)
console.log(p3.nome)


