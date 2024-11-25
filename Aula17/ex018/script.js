let numero = window.document.getElementById('txtnumero')
let numberList = window.document.getElementById('numberList')
let num_calc = []

function inLista(n, l){
    if(l.indexof(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function AddNumber(){
  var i

    if (numero.value.length == 0) {
        window.alert(`Campo vazio! Escreva um numero entre 0 e 100`)
    }else if (numero.value > 100 || numero.value < 1) {
        window.alert(`O numero está fora da faixa determinada`)
    }else if (inLista(numero.value, numberList)){
        window.alert(`O numero já está na listaj`)
    }else{
        num_calc.push(Number(numero.value))

        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado`
        numberList.appendChild(item)
        i++
    }
    numero.value = ''
    numero.focus()
}

function Calcular(){

    
}