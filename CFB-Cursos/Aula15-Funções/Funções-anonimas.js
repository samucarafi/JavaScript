const f=function(v1,v2){
    return v1+v2
}
console.log(f(10,5))

const fun=function (...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(fun(10,20,40))

const func=new Function ("v1","v2", "return v1+v2")//função construtor anônima

console.log(f(10,5))
