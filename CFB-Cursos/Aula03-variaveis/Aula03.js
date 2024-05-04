if (true){
    var nome="Samuel"
}
console.log(nome)

/*Neste caso var permite acesso dentro do if, no caso de função var também não permite acessar por fora da mesma.*/

if(true){
    let nome="Samuel"
}
console.log(nome)

//let por sua vez impede esse acesso, permitindo apenas comandos usando essa variável dentro do escopo if. 

const nome="Samuel"
nome="Francisco"// erro
//const não permite que esta variável altere seu valor durante o código, diferentemente de let e var