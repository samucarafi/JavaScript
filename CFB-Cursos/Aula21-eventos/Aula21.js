function msg(){
    alert("clicou")
}// ou função anonima com arrow function: const msg=()=>{alert("clicou")} 

const c3=document.getElementById("c3")
const c4=document.getElementById("c4")

c3.addEventListener("click",msg)//o parenteses da função msg neste caso é opcional, essa forma não precisa declarar no HTML

c4.addEventListener("click",()=>{
    alert('clicou')
})

const cursos=[...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{//evt é um pointerevento que indica quem foi clicado, mas para saber a div especifica deve-se usar target cfm abaixo
        const el=evt.target//target é o elemento(div) que foi clicado
        el.classList.add("destaque")//adicionar uma classe destaque
    })
})