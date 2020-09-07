// Boolean
let maBoolean = true

// L'Array
let monArray = []

// L'Objet
let personne = {

}

// Le String
let monString = "String"

// L'Integer
let monInt = 14

// L'objet et sa methode
// let personne2 = {
//     nom : "Plummer",
//     prenom: "Liam",
//     methode(nom){
//         console.log(`Bonjour, ${nom}`)
//     }
// }
// personne2.methode("Liam")

// La function

// const multi = (x,y) => {
//     console.log(x * y)
// }
// multi(9,5)

// La condition
// if (monInt > 8) {
//     console.log(`${monInt} est supperieure a 8`);
// }
// else{
//     console.log(`${monInt} est inferieure a 8`);
// }

// La boucle
// for (let i = 0; i <= 9; i++) {
//     console.log(i)  
// }



// L'objet date
// let date = new Date
// console.log(date)
// let day = date.getDay()
// let month = date.getMonth()
// let year = date.getFullYear()
// console.log(`${day}\\${month}\\${year}`)


// string to String
// const majescule= (string) =>{
//     console.log(string.toUpperCase());
// } 
// majescule("test")

// string to StrinG
// const maj = (string) =>{
//     string = string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase() + string.substr(-1,1).toUpperCase()
//     string = string.replace(string.substr(-2,1),"")
//     console.log(string)
// }
// maj("Essai")


// La Longuer 
// let long = prompt("Entrez un mot")
// alert(long.length)

// Le chiffre aléatoire p1
// let random = () =>{
//     alert(Math.floor(Math.random() * 100))
// }
// random()

// Le chiffre aléatoire p2
let random2 = ()=>{
    let x = +prompt("Entrez un chiffre")
    console.log(x)
    let y = +prompt("Entrez un chiffre")
    console.log(y)
        alert(Math.floor(Math.random() * x) + y)
}
random2()

// Le type
// let val = () => {
//     let valeur = prompt("Entrez une valeur")
//     switch (valeur) {
//         case valeur === monString:
//             console.log("Votre valeur est de type string")
//             break;
    
//         default:
//             break;
//     }
// }
// val()
