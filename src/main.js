//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(data);

// ESTA FUNCION CREA LAS TARJETAS DE CADA POKEMON DESDE JS ${pokemon.img}
function createCard(pokemon) {
  let card = `
    <div class="pokemon-card">
      <img src="" alt="">
      <div class="circulo"></div>   
      <h5 class="pokemon-id">${pokemon.id}</h5>
      <h5 class="pokemon-nombre">${pokemon.name}</h5>
      <h5 class="tipo">${pokemon.type}</h5>
    </div>
  `;

  return card;
};


<<<<<<< HEAD
// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON DESDE JS 
function setCards() {
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  data.pokemon.forEach(poke => emptyCard += createCard(poke));

  containerCards.innerHTML = emptyCard;
};

setCards();

// tarea: domContentLoaded
// tarea: window.addEventListener
=======
//variable del elemento HTML donde me mostrara el Pokémon
let pokeDom=document.querySelector('.pokeContainer1')

//para mostrar directo en el html sin crear un botón
document.addEventListener("DOMContentLoaded",()=>{
  let pokemons=getData()
  setHTML(pokemons)
})

//obteniendo el 1er objeto del gran array, capturando a Bulbasaur
const allPokemon = data.pokemon;

function setHTML(poke){
  let {img, num, name, about, type}=poke; //destructuración para extraer los objetos del arreglo
  let html=`
  <img src='${img}' >
  ${num} El pokemon se llama ${name} y tambien ${about} TIPO ${type}`
  console.log(html);
  //implementar appenchild para hacer su tarjeta desde acá

  pokeDom.innerHTML=html;
}

function getData(){
  let firstPokemon = allPokemon[0]; // este es objeto Bulbasaur
  console.log(allPokemon[0]);
  return firstPokemon;
}


/*/////parte de botón todos los nombres
//evento DOM
let cardDom=document.querySelector('.pokeContainer2')
let pokemonName = [];

const buttonStart = document.getElementById('btnStart');
buttonStart.addEventListener('click', showAllNames);

function showAllNames() {
  const allPokemon = data.pokemon;
  console.log(allPokemon)
  for (let i = 0; i < allPokemon.length; i++) {
    pokemonName[i] =  allPokemon[i].name;

  }
  console.log(pokemonName)
  cardDom.innerHTML = pokemonName;
}*/
>>>>>>> 73d785d559e05c6f6f54894bb7b18a0bcadba035
