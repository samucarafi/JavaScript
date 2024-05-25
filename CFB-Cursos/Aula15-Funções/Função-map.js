const cursos =['HTML', 'CSS', 'JavaScript', 'React']
let c=cursos.map((el,i)=>{//primeiro parâmetro el é um elemento e o segundo parâmetro o índice correspondente a este parâmetro
    console.log("Curso: "+ el + " - Posição do curso:"+ i)
    return el
})
console.log(c)// imprime todos elementos retornados na função



const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2

let num=['1','2','3','4','5'].map(converterInt)//converte para numeros inteiros pela função  converterInt
console.log(num)

num=num.map(dobrar)//dobra elementos com a função dobrar
console.log(num)