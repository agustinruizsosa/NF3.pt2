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
function suma(a,b, c= 10){
    return a+b+c
}
valor1 = 4
valor2 = 5

console.log(suma(valor1,valor2))