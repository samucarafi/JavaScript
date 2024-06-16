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

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+ indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso//criar nova div com o nome curso

    const comandos=document.createElement("div")
    comandos.setAttribute('class','comandos')//criar nova div para incluir um input radio

    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)//atribuir o input radio a respectiva div

    novoElemento.appendChild(comandos) //atribuir div com radio como filha da div principal do curso

    return novoElemento   //retorno da função
}

cursos.map((el,chave)=>{
    
    const novoElemento=criarNovoCurso(el)//criar uma div para cara curso no array de cursos
    caixaCursos.appendChild(novoElemento)//atribuir os cursos criados anteriormente como elementos filhos da caixa principal
    indice++//a cada curso adicionado aumentar 1 no indice

})

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado= todosRadios.filter((ele,ind,arr)=>{
        return ele.checked//retorna um array com o radio selecionado
    })
    return radioSelecionado[0]//retorna o elemento selecionado no radio para isso foi utilizado [0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    try{const cursoSelecionado= rs.parentNode.previousSibling.textContent 
    alert('Curso selecionado '+ cursoSelecionado)} catch{
        alert('Nenhum Curso Selecionado')//try e catch utilizado da mesma forma que o if anteriomente, tenta encontrar o curso selecionado, caso dê erro significa que não foi selecionado um curso, logo cria um alerta para selecionar.
    }

})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()//rs é o elemento selecionado no radio através da função radioselecionado
    if(rs==undefined){alert('Nenhum Curso Selecionado')}//quando não possuiu nenhum radio selecionado a resposta é undefined, logo mostrará um alerta
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()//o radio selecionado com o comando.remove() removera sua div parent parente(avô)
})

btnAdicionarNovoCursoAntes.addEventListener('click',()=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado= rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)}
        else{alert('Nenhum Curso Digitado')
        }}catch{
        alert('Nenhum Curso Selecionado')
        }
})

btnAdicionarNovoCursoDepois.addEventListener('click',()=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado= rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else{alert('Nenhum Curso Digitado')
        }
    }catch{//Neste caso de adicionar depois, a única diferença foi utilizar o nextsibling, pois ai será acionado o curso antes do curso seguinte ao selecionado, ou seja, depois deste.
        alert('Nenhum Curso Selecionado')
    }
})