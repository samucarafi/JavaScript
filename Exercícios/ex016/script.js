function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
     if (fano.value.length ==0 || Number(fano.value) > ano){
         window.alert( 'Verifique os dados e tente novamente!')
     } else {
         var fsex = document.getElementsByName('radsex')//radsex0- masculino radsex1-feminino
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute ('id', 'foto')
         if (fsex[0].checked){
             gênero= 'Masculino'
             if (idade >=0 && idade<10){
                img.setAttribute('src', 'criançamas.png')
             } else if(idade < 21){
                img.setAttribute('src', 'jovemmas.png')
             } else if( idade<50){
                img.setAttribute('src', 'adulto.png')
             } else if(idade <130){
                img.setAttribute('src', 'idoso.png')
             } else {
                window.alert( 'Verifique os dados e tente novamente!')
             }
         } else {
             gênero = 'Feminino'
             if (idade >=0 && idade<10){
                img.setAttribute('src', 'criançafem.png')
             } else if(idade < 21){
                img.setAttribute('src', 'jovemfem.png')
             } else if( idade<50){
                img.setAttribute('src', 'adulta.png')
             } else if (idade <130){
                img.setAttribute('src', 'idosa.png')
             } else {
                window.alert( 'Verifique os dados e tente novamente!')
             }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos gênero ${gênero} com ${idade} anos.<br>`
         res.appendChild (img)
     }
 }