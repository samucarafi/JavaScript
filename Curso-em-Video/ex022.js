/*let valores = [8, 1, 3, 6, 5]
for(var n=0;n<valores.length;n++){
console.log(valores[n])} ou */
let valores = [8, 1, 3, 6, 5]
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}