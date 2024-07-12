const caixa=document.querySelector('#caixa')

let cores=['azul','verde','vermelho'['claro','escuro']]//foi colocado manualmente um array dentro de outro array, para acessar um determinado usar cores[3][1] por exemplo é o claro
let cursos=['HTML','CSS','JAVASCRIPT']//posso adicionar o array cors dentro deste array[...'javascript',cores], ocupando apenas um indice deste, para imprimir uma cor especifica tera que dizer dois indices, ex cursos[3][1] que equivale ao azul, ja o array dentro de cores use cursos[3][3][1] equivale ao claro

cursos.push('C++')//adiciona no final do array
cursos.pop()//remove o ultimo indice do array neste caso C++
cursos.unshift("Python")//adiciona elemento no inicio do array
cursos.shift()//remove o primeiro elemento do array


cursos.map((el)=>{
    let p=document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
})