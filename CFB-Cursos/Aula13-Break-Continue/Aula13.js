//break pausa o loop, já o continue continua o loop cancelando apenas a iteração atual

//LOOP
let n=0 
let max=100

console.log("Uso do Break")

while(n<max){
    console.log(n)
    if(n>=10){
        break
    }
    n++
}
console.log('FIM')

//CONTINUE

n=0
let pares=0
console.log("Uso do Continue")
for(let i=n; i<max; i++){
    
    if(i%2!=0){
        console.log("Número ímpar "+ i)
        continue//quando i não for par executa o continue logo pula a interação e não soma + 1 em pares, se for par executa pares ++ e não executa o continue
        
    }
    pares++
    console.log("Número par " + i)
}
console.log("Quantidade de pares " + pares)

console.log('FIM')