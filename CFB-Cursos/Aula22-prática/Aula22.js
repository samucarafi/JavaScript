const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const btn=document.querySelector('#btn_copiar')
const todosCursos=[...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle('selecionado')//o toggle verifica se possui neste exemplo a classe selecionado, se não ao clicar é adicionado, se possui ao clicar é removido
    })
})


btn.addEventListener('click',()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados=[...document.querySelectorAll('.curso:not(.selecionado)')]//da classe cursos, retorne os elementos que não possui a classe selecionado(:not() tira o que possui entre parenteses )
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)//appendChild adiciona filhos ao caixa 2 percorrendo 1 a 1 pelo map
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})