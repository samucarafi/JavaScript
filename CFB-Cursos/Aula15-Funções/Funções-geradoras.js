function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é "+ nome+", seu esporte favorito é "+ esporte
}
const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Samuel').value)
console.log(itp.next('Vôlei').value)

function* contador(){
    let i=0
    while(true){
        yield i++
    }
}
const itco=contador()
console.log(itco.next().value)// cada console executa a função uma vez e incrementa 1
console.log(itco.next().value)
console.log(itco.next().value)
console.log(itco.next().value)
console.log(itco.next().value)
console.log(itco.next().value)
