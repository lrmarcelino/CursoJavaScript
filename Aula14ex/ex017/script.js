function tabuada(){
    var numero = window.document.getElementById('txtnumero')
    var tab = window.document.getElementById('seltab')
    var res = window.document.getElementById('res')

    if(numero.value.length == 0){
        window.alert(`É necessário digitar um numero!`)
        res.innerHTML = `Error!`
    }else{
        tab.innerHTML = ''
        for(index = 1; index <= 9 ; index++){
            let item = document.createElement('option')
            item.text = `${index} x ${numero.value} = ${index*numero.value}`
            tab.appendChild(item)
            //res.innerHTML += `<p>${index} x ${numero.value} = ${index*numero.value}</p>`
        }
    }

}
