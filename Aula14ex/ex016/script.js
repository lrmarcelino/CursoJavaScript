function contar(){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    var numbers = []

   // contagem.innerHTML = `Inicio:${inicio.valueOf} Fim:${fim.valueOf} Passo:${passo.valueOf}`
if(inicio.value.length == 0 || fim.value.length == 0){
    res.innerHTML = `Impossivel contar!`
}else{
    if(passo.value.length <= 0){
        window.alert(`Passo invalido! Considerado passo = 1`)
        passo = 1
    }
    res.innerHTML = `Contando:`
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F914}`
        }
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F914}`
        }
    }
    res.innerHTML += `\u{1F60E}`
}

}