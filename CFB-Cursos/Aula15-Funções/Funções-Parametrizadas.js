console.log("Função soma")

function soma(n1=0, n2=0){//valores padrões = 0 caso não seja dado o valor abaixo.
    console.log(n1+n2)
}

soma(4,5) //n1=4 e n2=5
soma(20)// n1=20 e n2=0(padrão utilizado)


console.log("Função adicionar")
let valor=0
console.log(valor)

function add(v){
    valor+=v
}

add(10)//Adiciona 10 ao valor
console.log(valor)

add(5)// Adiciona 5 ao valor além do 10
console.log(valor)