const p_array = document.getElementById("array")
const txt_pesquisar = document.getElementById("txt_pesquisar")
const btnPesquisar = document.getElementById("btnPesquisar")
const resultado = document.getElementById("resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML="[ "+elementos_array+" ]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"// normalmente já fica como valor não encontrado
    elementos_array.find((e, i)=>{//o metodo find percorre todo array e retorna true quando satisfaz alguma condição
        if(e==txt_pesquisar.value){//condição, numero digitado estar dentro do array. se fosse uma string como array é importante utilizar e.touppercase e e txt.pesquisa.value.toUpperCase para transformar ambos em caixa alta e considerar escrita tanto maiuscula ou minuscula
            resultado.innerHTML="Valor encontrado "+ e +" na posição "+ i
            return e
        }
    })
})