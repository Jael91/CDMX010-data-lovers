//import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';

//import data from './data/pokemon/pokemon.js';
import data from './pokemon/pokemon.js';

console.log(data.pokemon);

let card = document.getElementById('pokedexContainer1');
let pokedex = document.getElementById('pokedexContainer2');

let pokemonName = [];
let pokemonNum = [];
let pokemonImag = [];


//imprimiendo en pantalla nombre del primer Pokemón
const allPokemon = data.pokemon;
let firstPokemon = allPokemon('name');
console.log(firstPokemon)
card.innerHTML = firstPokemon.name;




const buttonStart = document.getElementById('btnStart');
buttonStart.addEventListener('click', showNames);


//imprimiendo en pantalla los nombres de todos los Pokémon
function showNames() {
  const allPokemon = data.pokemon;
    for (let i = 0; i < allPokemon.length; i++) {
    pokemonName[i] =  allPokemon[i].name;
  }
  console.log(pokemonName)
  pokedex.innerHTML = pokemonName;
}
