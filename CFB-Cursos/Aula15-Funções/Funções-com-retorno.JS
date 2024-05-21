function canal(){
    return "Samuel"//retorno da função é uma string, só pode um retorno, e depois do return não são executados nenhum comando.
}

console.log(canal())//se fosse dado apenas o comando da função canal(), não seria impresso nada, foi necessário imprimir atravéz do console.log a função que possui um retorno de string
console.log(canal())
console.log(canal())

function mult(){
    let n1=10
    let n2=2
    let res=n1*n2
    return res
}
console.log(mult())//imprimirá o retorno com resultado da multiplicação

//poderia ter criado também uma variável com a função, ex. let num= mult() e imprimir num ao invés da função

function parImpar(){
    let n1=3
    let n2=3
    let res=n1*n2
    if(res%2== 0){
        return "par"
    } else{
        return "impar"
    }
}
let num= parImpar()
console.log(num)