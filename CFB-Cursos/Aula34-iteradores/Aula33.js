const valores=[10,8,9]
const it_valores=valores[Symbol.iterator]()//valores iterados
console.log(it_valores.next())//se depois de next que é usado para passar para o proximo valor do array utilizar.value sera impresso apenas o valor correspondente
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
//no ultimo console log os valores acabaram entao o retorno é valor indefinido e done:true pois acabou

const texto ="you"
const it_texto=texto[Symbol.iterator]()//mesma situação mas para string

console.log(texto)
console.log(it_texto.next())//sera iterado letra por letra da string até a ultima que dará indefinido porque ter acabado e done:true
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())