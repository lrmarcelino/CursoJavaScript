function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector(`div#res`)

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Menino.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemMenino.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Senhor.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Menina.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemMenina.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Senhora.jpg')
            }
        }
        res.innerHTML = `Determinamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}