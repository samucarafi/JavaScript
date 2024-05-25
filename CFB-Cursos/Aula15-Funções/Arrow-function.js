//const soma=function(v1,v2){return v1+ v2}

const soma=(v1,v2)=>{return v1+v2}// mesma função do comentário anterior, mas no formato arrow function


console.log(soma(4,5))

const add=n=>n+10 // neste caso como não possui o return na expressão da function e é apenas uma linha, não precisa estar entre chaves

console.log(add(10))

const nome=n=> {return n}//no caso de apenas 1 parâmetro não precisa de parenteses
