const caixa1=document.querySelector('#caixa1')
const btn_c1=document.querySelector('#c1')
const cursos=[...document.querySelectorAll('.curso')]

caixa1.addEventListener("click", (evt)=>{
    console.log('clicou')
})

btn_c1.addEventListener("click", (evt)=>{
    evt.stopPropagation()//o evento de click da caixa1 acima deixa de considerar quando se clica na primeira div com nome HTML com este comando
})

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopImmediatePropagation()// neste caso para a propagação de todas div curso
    })
})