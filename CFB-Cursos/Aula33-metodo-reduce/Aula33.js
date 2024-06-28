const p_array = document.getElementById("array")
const btnReduzir = document.getElementById("btnReduzir")
const resultado = document.getElementById("resultado")

const elementos_array=[1,2,3,4,5]
let ant= []
let atu=[]
p_array.innerHTML="[ "+elementos_array+" ]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML=elementos_array.reduce((anterior, atual, pos)=>{// o reduce difere dos outros por possuir o elemento anterior ao atual do array, desta forma ele não pega o primeiro elemento pois não possui elemento anterior a este(posição 0) devendo ser operado separadamente antes caso necessário
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior//o retorno será a soma do atual com o anterior, o anterior neste caso sempre será o fruto da soma realizada anteriormente. neste exemplo começa em 2+1=3 depois 3(atual)+3(anterior resultado da soma)=6, 4(atual)+6(anterior)=10 e 5+10=15 (resultado final)
    })
    resultado.innerHTML+="<br> Valor anterior "+ ant
    resultado.innerHTML+="<br>Valor atual "+ atu
})

