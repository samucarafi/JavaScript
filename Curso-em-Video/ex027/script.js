   var num = document.getElementById('fnum')
    var lista = document.getElementById('flista')
    var res = document.getElementById('res')
    let valores = []
    
    
    function isNumero(n){
        if(Number(n) >=1 && Number(n)<=100){
            return true
        } else{
            return false
        }

    }
    function inlista (n, l) {
        if (l.indexOf(Number(n)) != -1){
            return true
        }else {
            return false
        }
    }
    function adicionar(){
        if (isNumero(num.value) && !inlista(num.value, valores)){
         valores.push(Number(num.value))
         var item = document.createElement('option')
         item.text = `Valor ${num.value} adicionado `
         item.value = `tab${valores.length}`
         lista.appendChild (item)
         res.innerHTML= ''
        } else{
            window.alert('Valor inválido ou já encontrado na lista.')
        }
        num.value = ''
        num.focus()
        valores.sort()
       }
      
    function Finalizar() {
      if (valores.length ==0){
         window.alert ('Adicionar valores antes de finalizar!')
      }else{
      let tot = valores.length
      let soma = 0
      let media = 0
      a = tot-1
      let maior = valores[0]
      let menor = valores [0]
      for (let pos in valores){
         soma += valores[pos]
         if (valores[pos]> maior)
            maior = valores[pos]
         if (valores [pos]< menor)
            menor = valores[pos]
      }
      media = (soma/tot)
      res.innerHTML = ''
      res.innerHTML = `Ao todo temos ${tot} números cadastrados <br>`
      res.innerHTML += `O maior valor informado foi ${maior} <br>`
      res.innerHTML += `O menor valor informado foi ${menor} <br>`
      res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
      res.innerHTML += `A média dos valores digitados é ${media} <br>`
      }
    }