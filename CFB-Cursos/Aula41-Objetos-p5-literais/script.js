//diferente dos anteriores, este exemplo não pode ser referenciado o mesmo objeto para varias utilizações diferentes, mas toda alteração do objeto ocupara a mesma parte da memória

const Pessoa={
    nome:'Samuel',//separar por virgulas
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    }
}
const p2=Pessoa
p2.nome='João'// neste caso altera Pessoa também assim console.log(Pessoa.nome) e console.log(p2.nome) será joão

p2['nome']='Gabriel'// o nome pode ser mudado também através desta forma

Pessoa.setNome('Rafael')//alterando o nome de pessoa através da função do objeto

console.log(Pessoa.nome)
console.log(p2.getNome())//utilizando a função criada no objeto Pessoa para imprimir o nome em p2
