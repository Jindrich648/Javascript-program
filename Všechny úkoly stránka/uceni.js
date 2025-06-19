let firstName = "David"

//délka
console.log(firstName.length)

//velká písmena
console.log(firstName.toUpperCase())

//malá písmena
console.log(firstName.toLowerCase())

//zahrnuje
let sentence = "David se učí javascript"
let word = "David"
console.log(sentence.includes(word))

//odstranění bílých znaků
let secondName = "Šetek"
console.log(secondName.trim())


let password = "1234admin"

//kontrola délky
if(password.length > 13){
    console.log("Velmi silné heslo")
} else if (password.length >=8 && password.length <=13){
    console.log("Silné heslo")
} else {
    console.log("Slabé heslo")
}

//neobsahuje 1234
if(password.includes("1234")){
    console.log("Heslo nesmí obsahovat 1234")
} else {
    console.log("Heslo je v pořádku")
}

let number = 3.1438
console.log(number.toFixed(2))
// zaokrouhlování celá čísla
console.log(Math.round(number))
// zaokrouhlí vždy dolů
console.log(Math.floor(number))
// zaokrouhlí vždy nahoru
console.log(Math.ceil(number))

//náhodné číslo
console.log(Math.random() * 10)
console.log(Math.ceil(Math.random() * 10))

// náhodné číslo z intervalu
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min)) + min)

//hození 6 kostkami
let number1 = Math.ceil(Math.random() * 6)
let number2 = Math.ceil(Math.random() * 6)
let number3 = Math.ceil(Math.random() * 6)
let number4 = Math.ceil(Math.random() * 6)
let number5 = Math.ceil(Math.random() * 6)
let number6 = Math.ceil(Math.random() * 6)

let sum = number1 + number2 + number3 + number4 + number5 + number6

console.log(`Součet je: ${sum}`)
if(sum >= 25){
    console.log("Vítěz")
} else {
    console.log("Zkus znovu své štěstí")
}

//pole array
let employees = ["David", "Martin", "Jana"] // index0 , index1, index2 atp

console.log(employees)
console.log(employees[0])
console.log(employees[1])
console.log(employees[2])

let data = ["Anna", 12, true, false, 13.5]

console.log(data[0])

//délka pole 
console.log(employees.length)
console.log(data.length)
//vypsání posledního v poli
console.log(data[data.length-1])

let passwords = ["david123", 123, "123david"]
let randomPass = Math.ceil(Math.random()*3)
console.log(randomPass)
let index = passwords.length - randomPass
console.log(index)

console.log(passwords[index])

let testArray = ["test1", "test2", "test3"]
console.log(testArray[0])
testArray[0] = "Nový prvek v poli"
console.log(testArray)
// přidání posledního prvku pole
let myArray = ["jedna", "dva", "tri"]
myArray.push("Čtyři")
console.log(myArray)
// odstařnení posledního prvku pole
myArray.pop()
console.log(myArray)
// přidání prvního prvku
myArray.unshift("Nultý")
console.log(myArray)
// odstranění prvního prvku
myArray.shift()
console.log(myArray)
// odstranění v poli
let myScondArray = ["Jedna", "Dva", "Tři"]
myScondArray.splice(1, 1)
console.log(myScondArray)
// přidání v poli 
let myThirdArray = ["Jedna", "Dva", "Čtyři"]
myThirdArray.splice(2, 0, "Tři")
console.log(myThirdArray)

/*let firstNamePrompt = prompt("Zadej jméno")
console.log(firstName) */



let nameArray = []

nameArray.push(prompt("Přidej jméno"))
nameArray.unshift(prompt("Přidej jméno na začátek"))
console.log(nameArray)


let employeesTwo = ["David", "Harry", "Hermiona", "Ron"]

employeesTwo.forEach(function(){
    console.log("testujeme")
})

employeesTwo.forEach(function(person){
    console.log(person)
})

employeesTwo.forEach(function(person, index){
    console.log(index)
})

let toDo = ["Vyvenčit", "Vymalovat", "koupit", "svačina"]
toDo.forEach(function(activitions, index){
    console.log(index + 1)
    console.log(activitions)
})

let toDo1 = ["Vyvenčit", "Vymalovat", "koupit", "svačina"]
toDo.forEach(function(activitions, index){
    let numberos = index + 1
    console.log(`${numberos}. ${activitions}`)
})

for(let i = 0; i <= 5; i++){
    console.log("Testovací text")
}

for(let j = 3; j >=0; j--){
    console.log("Další test")
}

for(let k = 0; k < employees.length ;k++){
    console.log(employees[k])
}

let toDo3 = ["sestříhat", "uklidit", "vyluxovat"]

for(let i = 0; i < toDo3.length; i++){
    console.log(i)
    console.log(toDo3[0])
    console.log(`${i+1}: ${toDo3[i]}`)
}

let emptyArray = []
for(let j = 0; j < 5; j++){
    emptyArray.push(j)
}

console.log(emptyArray)

let employeesThree = ["David", "Harry", "Hermiona", "Ron"]
console.log(employeesThree.indexOf("David"))

if(employeesThree.indexOf("David") === -1 ){
    console.log("Uživatel nebyl nalezen")
} else {
    console.log("Uživatel byl nalezen")
}

let books = [, {
    title: "Harry Potter",
    author: "J. K. Rowling",
    published: 1997
}, {
    title: "Harry Potter",
    author: "J. K. Rowling",
    published: 1998
}, {
    title: "Harry Potter",
    author: "J. K. Rowling",
    published: 1999
}]

let numberOfClicks = 0
function clickCounter(){
     numberOfClicks ++
    document.getElementById("clickCounter").innerText= `skore: ` + numberOfClicks;
    return totalNumberOfClicks
}

let randomNumber = Math.random()
console.log(randomNumber)