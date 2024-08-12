let pokemonValues = {
    absol: 0,
    aegislash: 0,
    azumarill: 0,
    blastoise: 0,
    blaziken: 0,
    blissey: 0,
    buzzwole: 0,
    ceruledge: 0,
    chandelure: 0,
    charizard: 0,
    cinderace: 0,
    clefable: 0,
    comfey: 0,
    cramorant: 0,
    crustle: 0,
    decidueye: 0,
    delphox: 0,
    dodrio: 0,
    dragapult: 0,
    dragonite: 0,
    duraludon: 0,
    eldegoss: 0,
    espeon: 0,
    falinks: 0,
    garchomp: 0,
    gardevoir: 0,
    gengar: 0,
    glaceon: 0,
    goodra: 0,
    greedent: 0,
    greninja: 0,
    gyarados: 0,
    hooh: 0,
    hoopa: 0,
    inteleon: 0,
    lapras: 0,
    leafeon: 0,
    lucario: 0,
    machamp: 0,
    mamoswine: 0,
    meowscarada: 0,
    metagross: 0,
    mew: 0,
    mewtwox: 0,
    mewtwoy: 0,
    mimikyu: 0,
    miraidon: 0,
    mrmime: 0,
    ninetales: 0,
    pikachu: 0,
    sableye: 0,
    scizor: 0,
    scyther: 0,
    slowbro: 0,
    snorlax: 0,
    sylveon: 0,
    talonflame: 0,
    trevenant: 0,
    tsareena: 0,
    tyranitar: 0,
    umbreon: 0,
    urshifu: 0,
    venusaur: 0,
    wigglytuff: 0,
    zacian: 0,
    zeraora: 0,
    zoroark: 0,
};

let pokemonPositiveRelations = {
	venusaur: ["absol"],
	zoroark: ["aegislash", "goodra"],
};

let pokemonNegativeRelations = {
	venusaur: ["pikachu", "ninetales", "mewtwoy", "espeon", "glaceon", "cramorant", "duraludon"],
	zoroark: ["venusaur"],
};

let colorMap = new Map();
colorMap.set(-2, "bg-red")
colorMap.set(-1, "bg-yellow")
colorMap.set(0, "bg-neutral");
colorMap.set(1, "bg-green");
colorMap.set(2, "bg-blue");

let clickedPokemon = new Set();


function updateBackgroundColor(pokemonId) {

	let pokemonList = pokemonPositiveRelations[pokemonId].concat(pokemonNegativeRelations[pokemonId]);
	pokemonList.forEach(function(poke,index) {
		let element = document.getElementById(poke);

		element.classList.remove(...colorMap.values());

		let colorClass = colorMap.get(pokemonValues[poke]);
    	if (colorClass) {
        	element.classList.add(colorClass);
		}
	});
}


function onPokemonClick(pokemonId) {
  if (clickedPokemon.has(pokemonId)) {
    let pokemonPositiveList = pokemonPositiveRelations[pokemonId];   
    pokemonPositiveList.forEach(function(poke) {
      if (pokemonValues[poke] !== -2) {
        pokemonValues[poke]--;
      }
    });

    let pokemonNegativeList = pokemonNegativeRelations[pokemonId];
    pokemonNegativeList.forEach(function(poke) {
      if (pokemonValues[poke] !== 2) {
        pokemonValues[poke]++;
      }
    });



    clickedPokemon.delete(pokemonId);
  } else {
    let pokemonPositiveList = pokemonPositiveRelations[pokemonId];
	  pokemonPositiveList.forEach(function(poke,index) {
      if (pokemonValues[poke] !== 2) {
        pokemonValues[poke]++;
      }
    }); 
	
    let pokemonNegativeList = pokemonNegativeRelations[pokemonId];
    pokemonNegativeList.forEach(function(poke,index) {
      if (pokemonValues[poke] !== -2) {
        pokemonValues[poke]--;
      }
    });
    
    clickedPokemon.add(pokemonId);
  }

  updateBackgroundColor(pokemonId);
}


function resetPokemonData() {
	for (let pokemon in pokemonValues) {
		if (pokemonValues.hasOwnProperty(pokemon)) {
			pokemonValues[pokemon] = 0;
		}

		let element = document.getElementById(pokemon);
		element.classList.remove(...colorMap.values());
		let colorClass = colorMap.get(pokemonValues[pokemon]);
    	if (colorClass) {
        	element.classList.add(colorClass);
		}
	}

  clickedPokemon.clear();

  const pokeballs = document.querySelectorAll('.pokeball');
  pokeballs.forEach(function(pokeball) {
    pokeball.style.display = 'none';
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.group').forEach(function(element) {
		element.addEventListener('click', function() {
			const overlayImage = this.parentElement.querySelector('.pokeball');
			if (overlayImage.style.display === 'none' || overlayImage.style.display === '') {
          overlayImage.style.display = 'inline';
      } else {
          overlayImage.style.display = 'none';
      }
		});
	});
  document.getElementById("reset__btn").onclick = function() { resetPokemonData(); };
  for (let pokemon in pokemonValues) {
    if (pokemonValues.hasOwnProperty(pokemon)) {
        document.getElementById(pokemon).onclick = function() { onPokemonClick(pokemon); };
    }
  }
});