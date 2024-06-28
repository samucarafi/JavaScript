const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_array=[16,12,16,15,17,11]
p_array.innerHTML="[ "+elementos_array+" ]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret =elementos_array.some((e,i)=>{//verifica se algum elemento do array estão em conformidade com a condição, retornando true ou false
        if(e<18){//caso falso mostrar a string abaixo, neste caso vai dar ultima posição como não conforme porque não encontrou nenhum numero maior que 18
            resultado.innerHTML="Array não conforme na posição "+ i
        }
        return e>=18//retorno caso true e condição (maior que 18 anos)
    })
    if(ret){//caso a condição acima for true escreve ok na tela
        resultado.innerHTML='OK'
    }
})

