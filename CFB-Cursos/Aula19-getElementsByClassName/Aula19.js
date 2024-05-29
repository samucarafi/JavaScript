const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementsByClassName("curso")[0]//Selecionar um elemento em especifico da classe curso, neste caso o primeiro [0]

cursosTodos.map((el)=>{
    el.classList.add("destaque")
})
cursoEspecial.innerHTML='CURSO ESPECIAL'