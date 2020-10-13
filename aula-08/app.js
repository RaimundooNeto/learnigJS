// Function declaration

//Hoisting = issamento, ou puxar pra cima

function sayHi () {
    console.log('Hi!')
}

// Function expression

const showFood = function () {
    console.log('pizza')
}

// sayHi() //invocar a função

// showFood()



//Argumentos, parâmetrose default parameters

const myFunc = function (name) {
    console.log(`Oi, ${name}!`)
}

myFunc('Neto')