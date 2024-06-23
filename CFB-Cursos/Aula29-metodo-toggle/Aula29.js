const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JAVASCRIP','PHP', 'REACT', 'MYSQL','REACTNATIVE']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById('nomeCurso')
let indice=0

const tirarSelecao=()=>{//função para retirar a class selecionado de todos elementos.
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+ indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso//criar nova div com o nome curso
    
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()//tira a class selecionado de todos elementos, permitindo selecionar apenas um na proxima função
        evt.target.classList.toggle('selecionado')//quando um curso for clicado muda o estilo para a class selecionado e quando clica novamente perde a class(isso não é mais percebido por causa da função anterior), utilizando o método toggle
    })

    return novoElemento   //retorno da função
}

cursos.map((el,chave)=>{
    
    const novoElemento=criarNovoCurso(el)//criar uma div para cara curso no array de cursos
    caixaCursos.appendChild(novoElemento)//atribuir os cursos criados anteriormente como elementos filhos da caixa principal
    indice++//a cada curso adicionado aumentar 1 no indice

})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]//retorna o curso com a class selecionado garantindo que é apenas 1 com o array [0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    try{
    alert('Curso selecionado '+ cursoSelecionado().innerHTML)} catch{
        alert('Nenhum Curso Selecionado')//try e catch utilizado da mesma forma que o if anteriomente, tenta encontrar o curso selecionado, caso dê erro significa que não foi selecionado um curso, logo cria um alerta para selecionar.
    }

})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const cs=cursoSelecionado()//rs é o elemento selecionado no radio através da função radioselecionado
    if(cs==undefined){alert('Nenhum Curso Selecionado')}//quando não possuiu nenhum curso com class selecionado a resposta é undefined, logo mostrará um alerta
    cs.remove()//o curso selecionado com o comando.remove() será removido
})

btnAdicionarNovoCursoAntes.addEventListener('click',()=>{
    try{
        if(nomeCurso.value!=''){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())}
        else{alert('Nenhum Curso Digitado')
        }}catch{
        alert('Nenhum Curso Selecionado')
        }
})

btnAdicionarNovoCursoDepois.addEventListener('click',()=>{
    try{
        if(nomeCurso.value!=''){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{alert('Nenhum Curso Digitado')
        }
    }catch{//Neste caso de adicionar depois, a única diferença foi utilizar o nextsibling, pois ai será acionado o curso antes do curso seguinte ao selecionado, ou seja, depois deste.
        alert('Nenhum Curso Selecionado')
    }
})