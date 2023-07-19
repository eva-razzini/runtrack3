function fetchPokemonData() {
    const filterForm = document.getElementById('filterForm');
    const id = filterForm.elements.id.value;
    const name = filterForm.elements.name.value;
    const type = filterForm.elements.type.value;
  
    const url = `pokemon.json?id=${id}&name=${name}&type=${type}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayPokemonList(data);
      })
      .catch(error => console.error(error));
  }
  
  function displayPokemonList(pokemonList) {
    const pokemonListDiv = document.getElementById('pokemonList');
    pokemonListDiv.innerHTML = '';
  
    pokemonList.forEach(pokemon => {
      const pokemonDiv = document.createElement('div');
      pokemonDiv.textContent = `${pokemon.name} - ${pokemon.type}`;
      pokemonListDiv.appendChild(pokemonDiv);
    });
  }  