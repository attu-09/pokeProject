function fetchKantoPokemon(){
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(response => response.json())
  .then(allpokemon => {
    let arr=allpokemon.results;
    let id=1;
    for (data in arr){
      renderPokeData(id,arr[data].name);
      id++;
    }
  })
}

function renderPokeData(pokeId,name) {
  let pokemonDataContainer=document.getElementById('pokeDataContainer');
  let pokeCard = document.createElement('div');
  let pokeName = document.createElement('h3');
  // let pokeImg = document.createElement('img');

  pokeName.innerText=pokeId+" "+name;
  // pokeImg.src=`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`

  pokeCard.append(pokeName);
  pokemonDataContainer.appendChild(pokeCard);
}


fetchKantoPokemon();
