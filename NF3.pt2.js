//1
//
// nom = "Agustín"
// cognom = "Ruiz"
//
// function mostrarNomCognom( n, c) {
//     console.log (n + " " + c)
// }
//
// mostrarNomCognom(nom,cognom)

//2
// valor = 10
// function  tipoParametre(param) {
//     console.log(typeof param)
// }
// tipoParametre(valor)

//3
// const dada = new Date()
// function data(data) {
//     console.log(data)
// }
// data(dada)

//E4
// function valorRaro (){
//     var valor = 10
//     console.log(valor)
//
// }
// console.log(valor)

//E5
// text = "ola"
// contador = 0
// function  mostrarVocals(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//             contador++
//         }
//     }
//     console.log("La paraula " + string + " te  " + contador + " vocals ")
//
// }
// mostrarVocals(text)

//E6
// function suma(a,b, c= 10){
//     return a+b+c
// }
// valor1 = 4
// valor2 = 5
//
// console.log(suma(valor1,valor2))

//E7
// function siete (){
//     data(dada)
//     return suma(valor1,valor2,valor3)
// }
// console.log(siete())

//E8
// enter1 = 10
// enter2 = 20
//
// function vuit ( un, dos){
//     if (un || dos === 30){
//         return true
//     }else if (un + dos === 30) {
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(vuit(enter1,enter2))

//E9
enter1 = 10
enter2 = 20
var retornaTrue = ( un, dos) =>{
    if (un || dos === 30){
        return true
    }else if (un + dos === 30) {
        return true
    }else {
        return false
    }
}

console.log(retornaTrue(enter1,enter2))