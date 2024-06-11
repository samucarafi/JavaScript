const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const c1=document.querySelector('#c1')

btn_c.map((el)=>{
    const btn_lixeira=document.createElement('img')
    btn_lixeira.setAttribute('src','')
    el.addEventListener('click',(evt)=>{
        caixa1.removeChild(evt.target)
    })    

})