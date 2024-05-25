let el=document.getElementsByTagName("div")
el=[...el]//espalhar os elementos para conseguir trabalhar com eles.
el.map((e,i)=>{
    e.innerHTML="Cursos"//altera elemento por elemento o texto para Cursos.
})

// Outra forma de imprimir os elementos da div
// const el=document.getElementsByTagName('div')
// const val= Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)
