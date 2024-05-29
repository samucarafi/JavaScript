const colecaoHTML =[ ...document.getElementsByTagName("div")]//retorna uma coleção html se não utilizar o spread[...] para transformar em um array, possibilitando utilizar map e outras operações

colecaoHTML.map((e)=>{
    e.innerHTML="Samuel"
})

