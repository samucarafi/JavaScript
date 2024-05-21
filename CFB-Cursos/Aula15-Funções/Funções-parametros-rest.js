function soma(...valores){//parametro rest, representado por ... . não especifica a quantidade de parâmentros.
    let tam=valores.length
    let res=0
    for(let v of valores){
    res+= v//soma o valor da posição i ao res até passar por todos parâmetros
    }
    return res
}
console.log(soma(10,5,2))