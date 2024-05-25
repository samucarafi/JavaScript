const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)//quando foi declarado o retorno lá embaixo de somar(valores), estes valores foram atribuidos 1 por 1 a v, somando pela expressão abaixo
            res+=v
        return res
    }
    return somar(valores)
}
console.log(soma(10,5,15))