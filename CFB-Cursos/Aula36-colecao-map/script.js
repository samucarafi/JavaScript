const caixa=document.querySelector('#caixa')

let mapa=new Map()// criando uma coleção map

mapa.set("curso","JavaScript")//adicionando chave e valores com set
mapa.set(10,'CFBCursos')
mapa.set(1,100)
mapa.set('canal',10)

mapa.delete(1)//deleta um elemento do map com chave no valor '1'

let pes='canal'
if(mapa.has(pes)){//ver se tem a chave canal no map mapa
    caixa.innerHTML='A chave existe na coleção com o valor: '+ mapa.get(pes)//pega o valor da chave pes='canal'
}else{
    caixa.innerHTML='A chave não está na coleção<br>'
}
caixa.innerHTML+='<br>O tamanho da coleção é '+mapa.size +'<br>'//tamanho da coleção através do size

caixa.innerHTML+=mapa.get('curso')//obtem valor da chave curso (javascript)
caixa.innerHTML+='<br>Todos elementos: <br>'

mapa.forEach((el)=>{//percorre todo map um por um
    caixa.innerHTML+= el+'<br>'
})