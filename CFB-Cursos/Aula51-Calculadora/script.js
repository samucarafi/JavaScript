const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp= [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display=document.querySelector('.display')
const ton=document.getElementById('ton')
const tlimpar=document.getElementById('tlimpar')
const tigual=document.getElementById('tigual')
const tcpy=document.getElementById('tcpy')
const calc=document.getElementById('calc')
const calc_aba=document.getElementById('calc_aba')
const seta=document.getElementById('seta')

let sinal=false//controla para não permitir dois sinais consecutivos, ao apertar um sinal irá para true e ao apertar limpar ou um numero volta a false

let decimal=false

teclasNum.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal=false
        if(evt.target.innerHTML==','){//quando clicar na virgula não repetir mais, acionando o decimal como true

            if(!decimal){
                decimal=true
                if(display.innerHTML=='0'){//no caso de inserir uma virgula no início não retirar o 0 e sim complementar apenas com a virgula 0,
                    display.innerHTML='0.'
                }else{
                    display.innerHTML+='.'
                }
            }
        }else{
            if(display.innerHTML=='0'){//limpa 0 inicial do display 
                display.innerHTML=''
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if(!sinal){//se sinal for false ira permitir digitar outro
            sinal=true
            decimal=false
            if(display.innerHTML=='0'){//limpa o zero inicial da calculadora
                display.innerHTML=''
            }
            if(evt.target.innerHTML=='x'){//troca o x por * no display
                display.innerHTML+='*'
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click',(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML='0'
})

tigual.addEventListener('click',(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)//eval calcula automaticamente através da impressão do display seu calculo.
    display.innerHTML=res
})

tcpy.addEventListener('click',(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)//comando para copiar texto do display para area de transferencia e conseguir colar em outro lugar ou app
    //No caso de estar copiando algo de algum imput e para mobile utilizar a forma a seguir:
    //teste.select()//apenas mobile(selecionar texto do imput)
    //teste.setSelectionRange(0,999999)//apenas mobile(determinar intervalo de seleção,colocar valor alto)
    //navigator.clipboard.whiteText(text.value)
})

calc_aba.addEventListener('click',(evt)=>{
    calc.classList.toggle('calc_exibir')//ao clicar na aba colocar a class calc_exibir se ela não tiver atribuida ao calc ou tirar caso contrário
    if(calc.classList.contains("calc_exibir")){//verifica se está aberto a aba
        seta.innerHTML='arrow_left'//se sim seta para esquerda
    }else{
        seta.innerHTML='arrow_right'//se não seta para direita
    }
})