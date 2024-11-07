function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        //Bom dia!
        img.src = "FotoManha.png"
        document.body.style.background = 'khaki'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = "FotoTarde.png"
        document.body.style.background = 'lightblue'
    }else{
        //Boa noite!
        img.src = "FotoNoite.png"
        document.body.style.background = 'darkslategray'
    }
}
