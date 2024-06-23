const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_array=[21,25,17,20,18,18,22]
p_array.innerHTML="[ "+elementos_array+" ]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret =elementos_array.every((e,i)=>{//verifica se todos elementos do array estão em conformidade com a condição, retornado true ou false
        if(e<18){//caso falso mostrar a string abaixo
            resultado.innerHTML="Array não conforme na posição "+ i
        }
        return e>=18//retorno caso true e condição (maior que 18 anos)
    })
    if(ret){//caso a condição acima for true escreve ok na tela
        resultado.innerHTML='OK'
    }
})

