
const filtroMaior18=(valor,indice,array)=>{
    if(valor >= 18) 
    return valor
}

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter(filtroMaior18)//filter com uma função interna retornando as idades acima de 18
const menor=idades.filter((val)=>{//função desenvolvida dentro do proprio filter.
    if (val<18)
    return val
})

console.log(idades)
console.log(maior)
console.log(menor)