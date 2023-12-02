import pokemons from './data'
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(Array) {
    let d = [];
    d = Array.type =="Fire";
    return d
}
let res = pokemons.filter(getAllFirePokemons);
console.log(res);
//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(ar){                                
    return ar.reduce((x,y) => {
      if(x== undefined || y.length< x.length) {
        x = y;
      }
      return x;
    } , undefined);                                 
}
let al= shortestPokemon(pokemon);
console.log(al);
//-------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons  

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
