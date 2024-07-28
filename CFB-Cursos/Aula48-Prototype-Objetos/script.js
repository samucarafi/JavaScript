const Nave=function(energia){//objeto funcional
    this.energia=energia
    this.disparos=100
}

const n1=new Nave(100)

Nave.prototype.vidas=3//utilizando prototype para incluir um atributo no objeto Nave, é incluido separadamente na sessão de prototype quando imprimido n1

Nave.prototype.disparar=function(){ //incluindo agora um método
    if(this.disparos>0){
        this.disparos--
    }
   
}

n1.disparar()//executar função disparar
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos )//imprimir quantidade de disparos ainda possíveis

console.log(n1.vidas)//imprimir numero de vidas, atributo incluido com prototype