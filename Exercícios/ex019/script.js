function contar () {
   var inicio = document.getElementById('inicio')
   var fim = document.getElementById('fim')
   var passo = document.getElementById('passo')
   var res = document.querySelector('div#res')
   if (inicio.value.length ==0||fim.value.length == 0){
      res.innerHTML = 'Impossível contar'
   } else {
      res.innerHTML='Contando:<br> '
      var i =Number(inicio.value)
      var f = Number(fim.value)
      var p = Number (passo.value)
         if(passo.value <= 0){
            window.alert('Passo inválido. Considerando passo=1')
            p=1
         }
         if(i<f){
            //contagem crescente
            for(var c = i; c <= f; c+=p){
               res.innerHTML += `${c} 👉`
            }
         } else{
            //contagem regressiva
            for(var c = i;c>=f; c -=p){
               res.innerHTML += `${c} 👉`
            }
         }
      res.innerHTML += '🏁'
   }
}