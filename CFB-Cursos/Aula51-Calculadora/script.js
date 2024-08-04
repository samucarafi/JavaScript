const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp= [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display=document.querySelector('.display')
const ton=document.getElementById('ton')
const tlimpar=document.getElementById('tlimpar')
const tigual=document.getElementById('tigual')

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