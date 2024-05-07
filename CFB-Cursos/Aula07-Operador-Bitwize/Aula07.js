let n1=11 //Em binário 1011
let n2=14 //Em binário 1110

let res1=n1 & n2 // operação bitwize, retorna 10 pois verifica quais posições possui 1 em n1 e n2 simultaneamente, no caso de 1 e 0 retorna 0, imprimindo no final o número decimal equivalente.

let res2=n1 | n2 // neste caso se o número binário correspondente de n1 ou n2 tiver 1 em determinada posição ela será levada ao resultado.

let res3= n1<<1 //desloca os bits para esquerda e preenche o espaço com 0, neste caso 1011 vira 10110, isso dobra o valor em decimal

let res4=n1>>1 // mata o bit da direita e adiciona um 0 a esquerda, 1011 vira 0101=5 ou metade no binário

// pode ser diferente de 1 depois de << ou >> isso fará dividir novamente ou dobrar novamente movendo mais de 1 bit

console.log(res1) // resulta 1010 = 10
console.log(res2) // resulta 1111 = 15
console.log(res3) // resulta 10110 = 22 dobra o valor
console.log(res4)