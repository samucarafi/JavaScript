class Npc{
    static alerta=false//utilização de static no atributo alerta, significa que tal atributo é relacionado a class e não às instâncias da class(np1 np2 e np3)
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?'Sim':'Não')}`)//imprimir alerta de todos npc declarados abaixo 1 2 e 3 sim para ativado e não para não ativado
        console.log(`---------------------`)

    }
    static alertar=function(){
        Npc.alerta=true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(10)

Npc.alertar()//através do static todos componentes da class Npc serão aterados seu alerta para true através da função alertar

npc1.info()
npc2.info()
npc3.info()