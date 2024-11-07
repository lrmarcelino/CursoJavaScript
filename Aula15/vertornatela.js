let valores = [8, 1, 6, 4 ,2, 9]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let index = 0; index < valores.length; index++){
    console.log(`A posição ${index} tem o valor ${valores[index]}`)
}
*/

for(let index in valores){
    console.log(`A posição ${index} tem o valor ${valores[index]}`)
}

console.log(`Vetor de 6 é:${valores.indexOf(2)}`)