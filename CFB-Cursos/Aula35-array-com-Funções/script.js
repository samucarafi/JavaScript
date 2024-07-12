let valores=[1,2]
const op=[//um array com várias funções
    (val)=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res=1
        for(v of val){
            res*=v
        }
        return res
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]
console.log(op[0](valores))//imprime a soma dos elementos de valores
console.log(op[1](valores))//imprime a multiplicação dos elementos de valores
op[2](valores)//imprime todos elementos de valores