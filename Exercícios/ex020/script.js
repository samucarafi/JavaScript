function gerar () {
   var numero = document.getElementById('numero')
   var seltab = document.getElementById('seltab')
   if (numero.value.length ==0){
      window.alert('Por favor, digite um número.')
   } else {
      var n =Number(numero.value)
      var t = 1
      seltab.innerHTML = ''
         while(t<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${t} = ${t*n} `
            item.value = `tab${t}`
            seltab.appendChild (item)
            t++
         }
      
   }
}