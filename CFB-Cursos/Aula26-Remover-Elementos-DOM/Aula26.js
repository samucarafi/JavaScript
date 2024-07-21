const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const c1=document.querySelector('#c1')

btn_c.map((el)=>{//percorrer todos elementos div curso
    const btn_lixeira=document.createElement('img')//criar elemento de imagem na constante btn_lixeira
    btn_lixeira.setAttribute('src','./lixeira.png')//atribuir uma imagem à constante
    btn_lixeira.setAttribute('class','btn_lixeira')//atribuir uma class chamada btn_lixeira à constante que foi configurada no arquivo css

    el.appendChild(btn_lixeira)//atribuido uma imagem de lixeira a cada elemento div curso
    
    btn_lixeira.addEventListener('click',(evt)=>{//atribuir evento de click na lixeira
        caixa1.removeChild(evt.target.parentNode)//ao clicar na lixeira sera retirada da caixa 1 seu respectivo filho correspondente ao pai da lixeira, representada por evt.target.parentNode
    })    

})