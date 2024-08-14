let pokemonDexNumbers = {
  absol: 359,
  aegislash: 681,
  azumarill: 184,
  blastoise: 9,
  blaziken: 257,
  blissey: 242,
  buzzwole: 794,
  ceruledge: 937,
  chandelure: 609,
  charizard: 6,
  cinderace: 815,
  clefable: 35,
  comfey: 764,
  cramorant: 845,
  crustle: 558,
  decidueye: 724,
  delphox: 655,
  dodrio: 85,
  dragapult: 887,
  dragonite: 149,
  duraludon: 884,
  eldegoss: 830,
  espeon: 196,
  falinks: 870,
  garchomp: 445,
  gardevoir: 282,
  gengar: 94,
  glaceon: 471,
  goodra: 706,
  greedent: 820,
  greninja: 658,
  gyarados: 130,
  hooh: 250,
  hoopa: 720,
  inteleon: 818,
  lapras: 131,
  leafeon: 470,
  lucario: 448,
  machamp: 68,
  mamoswine: 473,
  meowscarada: 908,
  metagross: 376,
  mew: 151,
  mewtwox: 150.1,
  mewtwoy: 150.2,
  mimikyu: 778,
  miraidon: 1008,
  mrmime: 122,
  ninetales: 38,
  pikachu: 25,
  sableye: 302,
  scizor: 212,
  scyther: 123,
  slowbro: 80,
  snorlax: 143,
  sylveon: 700,
  talonflame: 663,
  trevenant: 709,
  tsareena: 763,
  tyranitar: 248,
  umbreon: 197,
  urshifu: 892,
  venusaur: 3,
  wigglytuff: 40,
  zacian: 888,
  zeraora: 807,
  zoroark: 571,
};

let pokemonValues = {};
for (let pokemon in pokemonDexNumbers) {
  pokemonValues[pokemon] = 0; 
}

let pokemonStrugglesAgainst = {
	venusaur: ["dodrio", "leafeon", "zoroark", "talonflame", "zeraora", "meowscarada", "scyther", "gyarados", "mimikyu", "ceruledge", "urshifu"],
	chandelure: ["dodrio", "talonflame", "zoroark", "gyarados", "decidueye", "inteleon", "venusaur"],
	delphox: ["absol", "dodrio", "gengar", "leafeon", "meowscarada", "talonflame", "zeraora", "zoroark", "ceruledge", "gyarados", "scyther", "venusaur", "inteleon", "decidueye"],
	mimikyu: ["aegislash", "tsareena", "blastoise", "metagross", "buzzwole", "urshifu", "garchomp", "tyranitar"],
	metagross: ["aegislash", "chandelure", "delphox", "gardevoir", "ninetales", "glaceon", "sylveon", "venusaur", "cinderace", "dragapult", "tyranitar", "buzzwole"],
	absol: ["meowscarada", "zeraora", "aegislash", "buzzwole", "ceruledge", "falinks", "garchomp", "machamp", "metagross", "mewtwox", "scizor", "tyranitar", "zacian", "greninja"],
	leafeon: ["absol", "meowscarada", "talonflame", "zeraora", "zoroark", "aegislash", "buzzwole", "ceruledge", "charizard", "dragonite", "falinks", "garchomp", "gyarados", "machamp", "metagross", "mewtwox", "mimikyu", "scizor", "tyranitar", "urshifu", "zacian"],
};

let pokemonStrongAgainst = {
	venusaur: ["pikachu", "ninetales", "mewtwoy", "espeon", "glaceon", "cramorant", "duraludon", "scizor", "dragonite", "tyranitar", "metagross", "garchomp", "buzzwole"],
	chandelure: ["cramorant", "espeon", "glaceon", "ninetales", "pikachu", "buzzwole", "aegislash", "garchomp", "metagross", "scizor", "tyranitar"],
	delphox: ["aegislash", "buzzwole", "urshifu", "garchomp", "metagross", "tyranitar", "scizor"],
	mimikyu: ["leafeon", "blaziken", "charizard", "scyther", "dragonite", "venusaur", "espeon", "gardevoir", "glaceon", "sylveon", "decidueye", "cinderace", "inteleon", "cramorant", "duraludon", "dragapult", "miraidon", "mewtwoy"],
	metagross: ["dodrio", "gengar", "absol", "leafeon", "zoroark", "talonflame", "zeraora", "meowscarada", "scyther", "lucario", "mimikyu", "ceruledge"],
	absol: ["dodrio", "leafeon", "talonflame", "cinderace", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "espeon", "gardevoir", "glaceon", "inteleon", "mew", "mewtwoy", "miraidon", "sylveon"],
	leafeon: ["chandelure", "cinderace", "decidueye", "delphox", "dragapult", "duraludon", "gardevoir", "glaceon", "inteleon", "mewtwoy", "miraidon", "venusaur"],
};

let colorMap = new Map();
colorMap.set(-2, "bg-red")
colorMap.set(-1, "bg-yellow")
colorMap.set(0, "bg-neutral");
colorMap.set(1, "bg-green");
colorMap.set(2, "bg-blue");

let clickedPokemon = new Set();


function updateBackgroundColor(pokemonId) {

	let pokemonList = pokemonStrugglesAgainst[pokemonId].concat(pokemonStrongAgainst[pokemonId]);
	pokemonList.forEach(function(poke,index) {
		let element = document.getElementById(poke);

		element.classList.remove(...colorMap.values());

		let colorClass = colorMap.get(pokemonValues[poke]);
    	if (colorClass) {
        	element.classList.add(colorClass);
		}
	});
}

function reorderPokemon() {

  let categories = ["speedsters", "allrounders", "attackers", "defenders", "supporters"];

  for (let i = 0; i < categories.length; i++) {
    const container = document.getElementById(categories[i]);
    const label = container.querySelector('.category');

    const pokemonElements = Array.from(container.getElementsByClassName('image-container'));

    pokemonElements.sort((a, b) => {
      const idA = a.querySelector('img.pokemon').id;
      const idB = b.querySelector('img.pokemon').id;
      const valueA = pokemonValues[idA];
      const valueB = pokemonValues[idB];

      if (valueA !== valueB) {
          return valueB - valueA;
      }

      return pokemonDexNumbers[idA] - pokemonDexNumbers[idB];
    });

    container.innerHTML = '';
    container.appendChild(label);
    pokemonElements.forEach(el => container.appendChild(el));
  }
}


function onPokemonClick(pokemonId) {
  if (clickedPokemon.has(pokemonId)) {
    let pokemonPositiveList = pokemonStrugglesAgainst[pokemonId];   
    pokemonPositiveList.forEach(function(poke) {
      if (pokemonValues[poke] !== -2) {
        pokemonValues[poke]--;
      }
    });

    let pokemonNegativeList = pokemonStrongAgainst[pokemonId];
    pokemonNegativeList.forEach(function(poke) {
      if (pokemonValues[poke] !== 2) {
        pokemonValues[poke]++;
      }
    });

    clickedPokemon.delete(pokemonId);
  } else {
    let pokemonPositiveList = pokemonStrugglesAgainst[pokemonId];
	  pokemonPositiveList.forEach(function(poke,index) {
      if (pokemonValues[poke] !== 2) {
        pokemonValues[poke]++;
      }
    }); 
	
    let pokemonNegativeList = pokemonStrongAgainst[pokemonId];
    pokemonNegativeList.forEach(function(poke,index) {
      if (pokemonValues[poke] !== -2) {
        pokemonValues[poke]--;
      }
    });
    
    clickedPokemon.add(pokemonId);
  }

  updateBackgroundColor(pokemonId);

  reorderPokemon();
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

  reorderPokemon();

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