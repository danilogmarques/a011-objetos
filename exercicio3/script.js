const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const novopokemon = {
    ...pokemon1}
    novopokemon.nome = "Squirtle"
    novopokemon.tipo = "agua"

console.log(novopokemon)

// b) adicionando propriedades 

pokemon1.ataques = [];
console.log(pokemon1);

const arrayAtaques =
{
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100,}

pokemon1.ataques.push(arrayAtaques)

// c) adicionando propriedade ataque á cópia do objeto original 

novopokemon.ataque = {
    nome: " jato de agua",
    dano: 40,
    tipo: "agua",
    precisao: 100,}

    console.log(novopokemon)

// d) adicionando propriedades ao objeto original

pokemon1.ataque = {
    nome: "Folha navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100,}

    console.log(pokemon1)
    
    




