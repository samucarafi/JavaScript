const caixa=document.querySelector('#caixa')

let musicas=new Set(['musica1','musica boa','musica10'])//coleção set não permite entradas duplicadas

musicas.add('musica muito legal')
musicas.add('musica1')//não será adicionado porque já possui 
musicas.delete('musica1')
//musicas.clear() usada para limpar todos elementos

musicas.forEach((el)=>{//percorre todos elementos de set e imprime cada um na caixa
    caixa.innerHTML+=el +'<br>'
})

for (let m of musicas){//faz mesma coisa que o anterior mas usando for of
    caixa.innerHTML+=m +'<br>'
}