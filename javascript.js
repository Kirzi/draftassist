let pokemonValues = {
    venusaur: 0,
    blastoise: 0,
    buzzwole: 0,
    zoroark: 0,
	charizard: 0
};

let pokemonPositiveRelations = {
	venusaur: ["blastoise"],
	zoroark: ["charizard", "buzzwole"]
};

let pokemonNegativeRelations = {
	venusaur: ["zoroark", "buzzwole"],
	zoroark: []
};

let colorMap = new Map();
colorMap.set(-2, "bg-red")
colorMap.set(-1, "bg-yellow")
colorMap.set(0, "bg-neutral");
colorMap.set(1, "bg-green");
colorMap.set(2, "bg-blue");


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

    updateBackgroundColor(pokemonId);
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("venusaur").onclick = function() { onPokemonClick("venusaur"); };
document.getElementById("blastoise").onclick = function() { onPokemonClick("blastoise"); };
document.getElementById("buzzwole").onclick = function() { onPokemonClick("buzzwole"); };
document.getElementById("zoroark").onclick = function() { onPokemonClick("zoroark"); };
});





/* function venusaur() {
	document.getElementById("venusaur").classList.add("bg-red");
	document.getElementById("pikachu").classList.add("bg-red");
	document.getElementById("ninetales").classList.add("bg-red");
	document.getElementById("glaceon").classList.add("bg-red");
}

function blastoise() {
	document.getElementById("blastoise").classList.add("bg-red");
	document.getElementById("pikachu").classList.add("bg-red");
	document.getElementById("ninetales").classList.add("bg-red");
	document.getElementById("gardevoir").classList.add("bg-red");
	document.getElementById("decidueye").classList.add("bg-red");
	document.getElementById("espeon").classList.add("bg-red");
	document.getElementById("delphox").classList.add("bg-red");
	document.getElementById("dragapult").classList.add("bg-red");
	document.getElementById("chandelure").classList.add("bg-red");
}

function buzzwole() {
	document.getElementById("sylveon").classList.add("bg-red");
}

function zoroark() {
	document.getElementById("gardevoir").classList.add("bg-red");
	document.getElementById("decidueye").classList.add("bg-red");
	document.getElementById("espeon").classList.add("bg-red");
	document.getElementById("delphox").classList.add("bg-red");
	document.getElementById("dragapult").classList.add("bg-red");
	document.getElementById("chandelure").classList.add("bg-red");
} */