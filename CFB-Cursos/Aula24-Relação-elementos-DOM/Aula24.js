const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const c1=document.querySelector('#c1')

console.log(caixa1.children)//retorna todas as 6 div filhas da div caixa


console.log(caixa1.children[3])//retorna o quarto filho da caixa

console.log(caixa1.firstElementChild)//retorna o primeiro elemento filho da caixa

console.log(caixa1.lastElementChild)//ultimo elemento da caixa

console.log(document.getRootNode())//retorna o nó raiz que é o document, teria o mesmo retorno se fosse um outro elemento diferente do document. OBS. quando é um método(cor roxa) utiliza parenteses, propriedades não.

console.log(caixa1.hasChildNodes())//retorna true se o elemento possui filhos se não false

if(btn_c[0].children.length>0){//se a quantidade(length) de elementos filhos for 0, significa que não possui nenhum elemento filho, caso contrario possui.
    console.log('Possui filhos')
}else{
    console.log('Não possui filhos')
}
//Método simplificado da expressão acima com condição ternária:
console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Não possui filhos')

caixa1.firstElementChild.innerHTML='Primeiro'//muda o texto do primeiro elemento da caixa1 para Teste

caixa1.children[1].innerHTML='Segundo'// mudando segundo elemento

console.log(c1.parentNode.parentNode)//retorna o avô do elemento c1 neste caso o pai é a div caixa e o avô é main

console.log(c1.parentNode.parentNode.children[0])//retorna o primeiro filho do avô de c1
