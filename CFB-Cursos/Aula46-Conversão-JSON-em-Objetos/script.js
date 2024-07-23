const pessoa={
    nome:'Samuel',
    canal:'CFB Cursos',
    cursos:'JavaScript',
    aulas:{
        aula01:'Introdução',
        aula02:'Variáveis',
        aula03:'Condicional'
    }
}

console.log(pessoa)//imprime todo objeto
console.log(pessoa.nome)//imprime a propriedade nome
console.log(pessoa.aulas)//imprime todas as aulas
console.log(pessoa.aulas.aula01)// imprime a aula1

const s_json_pessoa=JSON.stringify(pessoa)//transforma o objeto em string formato JSON(formato para back-end)
console.log(pessoa)//imprime objeto
console.log(s_json_pessoa)//imprime string no formato JSON

const o_json_pessoa=JSON.parse(s_json_pessoa)//transforma a string JSON em objeto novamente