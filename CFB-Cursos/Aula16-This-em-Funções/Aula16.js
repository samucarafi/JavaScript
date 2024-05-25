function aluno(nome, nota){
    this.nome=nome//em vez de utilizar uma outra variável para receber o parâmetro nome, o operador this possibilita utilizar o mesmo nome
    this.nota=nota

    //a utilização de setTimeout desta forma tradicional de função anonima sombreia os valores definidos acima de this.nome e this.nota.
    this.dados_anonimo=function(){
        setTimeout(function(){//setTimeout utilizado para esperar um tempo para executar a função.
            console.log(this.nome)
            console.log(this.nota)
        }, 2000) //2000 é o tempo que irá esperar, equivale a 2s
    }

    //utilizar arrow function contorna o problema e consegue identificar this.nome e this.nota
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
const al1=new aluno("Samuel", 100)

al1.dados_anonimo()
al1.dados_arrow()

