/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

const cat = {
  age: 4,
  name: 'Agata',
  color: 'branco e preto',
  bestfriends: ['Neto', 'Lene'],
  sound: () => 'miau'
}


console.log(cat)

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

const messageCat = `Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestfriends[0]}" e "${cat.bestfriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`

console.log(messageCat)
/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

console.log(cat.age +2)

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/

const addCatFriends = friend => cat.bestfriends.push(friend)

addCatFriends('Zezito')

console.log(cat.bestfriends)

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

const addCatColor = addcolor => cat.color += `, ${addcolor}`

addCatColor('roxo')

console.log(cat)

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

const isObject = obj => typeof obj === 'object' ? true : false


console.log(isObject(cat))

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

const dog = {
  age: 2,
  name: 'Doguinho',
  color: 'preto',
  bestfriends: ['Neto', 'Lene'],
  sound: () => 'au au'
}

const sumAgePets = (obj1, obj2) => {
  const sumAge = obj1.age +obj2.age
  const messageSumAgePets = `A soma das idades de ${cat.name} e ${dog.name} é ${sumAge}.`
  return messageSumAgePets
}

console.log(sumAgePets(cat,dog))

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = car => {
  const SUVcars = ['Honda HR-V','Jeep Renegade','Hyundai iX35','Ford EcoSport']
  return SUVcars.includes(car)
}

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const myFunc = type => {
  const variableTypes ={
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.',
    default: 'Tipo não encontrado'
  }
  
  return variableTypes[type] || variableTypes.default
}

console.log(myFunc(''))
console.log(myFunc(null))