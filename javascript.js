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
  document.getElementById("absol").onclick = function() { onPokemonClick("absol"); };
  document.getElementById("aegislash").onclick = function() { onPokemonClick("aegislash"); };
  document.getElementById("azumarill").onclick = function() { onPokemonClick("azumarill"); };
  document.getElementById("blastoise").onclick = function() { onPokemonClick("blastoise"); };
  document.getElementById("blaziken").onclick = function() { onPokemonClick("blaziken"); };
  document.getElementById("blissey").onclick = function() { onPokemonClick("blissey"); };
  document.getElementById("buzzwole").onclick = function() { onPokemonClick("buzzwole"); };
  document.getElementById("ceruledge").onclick = function() { onPokemonClick("ceruledge"); };
  document.getElementById("chandelure").onclick = function() { onPokemonClick("chandelure"); };
  document.getElementById("charizard").onclick = function() { onPokemonClick("charizard"); };
  document.getElementById("cinderace").onclick = function() { onPokemonClick("cinderace"); };
  document.getElementById("clefable").onclick = function() { onPokemonClick("clefable"); };
  document.getElementById("comfey").onclick = function() { onPokemonClick("comfey"); };
  document.getElementById("cramorant").onclick = function() { onPokemonClick("cramorant"); };
  document.getElementById("crustle").onclick = function() { onPokemonClick("crustle"); };
  document.getElementById("decidueye").onclick = function() { onPokemonClick("decidueye"); };
  document.getElementById("delphox").onclick = function() { onPokemonClick("delphox"); };
  document.getElementById("dodrio").onclick = function() { onPokemonClick("dodrio"); };
  document.getElementById("dragapult").onclick = function() { onPokemonClick("dragapult"); };
  document.getElementById("dragonite").onclick = function() { onPokemonClick("dragonite"); };
  document.getElementById("duraludon").onclick = function() { onPokemonClick("duraludon"); };
  document.getElementById("eldegoss").onclick = function() { onPokemonClick("eldegoss"); };
  document.getElementById("espeon").onclick = function() { onPokemonClick("espeon"); };
  document.getElementById("falinks").onclick = function() { onPokemonClick("falinks"); };
  document.getElementById("garchomp").onclick = function() { onPokemonClick("garchomp"); };
  document.getElementById("gardevoir").onclick = function() { onPokemonClick("gardevoir"); };
  document.getElementById("gengar").onclick = function() { onPokemonClick("gengar"); };
  document.getElementById("glaceon").onclick = function() { onPokemonClick("glaceon"); };
  document.getElementById("goodra").onclick = function() { onPokemonClick("goodra"); };
  document.getElementById("greedent").onclick = function() { onPokemonClick("greedent"); };
  document.getElementById("greninja").onclick = function() { onPokemonClick("greninja"); };
  document.getElementById("gyarados").onclick = function() { onPokemonClick("gyarados"); };
  document.getElementById("hooh").onclick = function() { onPokemonClick("hooh"); };
  document.getElementById("hoopa").onclick = function() { onPokemonClick("hoopa"); };
  document.getElementById("inteleon").onclick = function() { onPokemonClick("inteleon"); };
  document.getElementById("lapras").onclick = function() { onPokemonClick("lapras"); };
  document.getElementById("leafeon").onclick = function() { onPokemonClick("leafeon"); };
  document.getElementById("lucario").onclick = function() { onPokemonClick("lucario"); };
  document.getElementById("machamp").onclick = function() { onPokemonClick("machamp"); };
  document.getElementById("mamoswine").onclick = function() { onPokemonClick("mamoswine"); };
  document.getElementById("meowscarada").onclick = function() { onPokemonClick("meowscarada"); };
  document.getElementById("metagross").onclick = function() { onPokemonClick("metagross"); };
  document.getElementById("mew").onclick = function() { onPokemonClick("mew"); };
  document.getElementById("mewtwox").onclick = function() { onPokemonClick("mewtwox"); };
  document.getElementById("mewtwoy").onclick = function() { onPokemonClick("mewtwoy"); };
  document.getElementById("mimikyu").onclick = function() { onPokemonClick("mimikyu"); };
  document.getElementById("miraidon").onclick = function() { onPokemonClick("miraidon"); };
  document.getElementById("mrmime").onclick = function() { onPokemonClick("mrmime"); };
  document.getElementById("ninetales").onclick = function() { onPokemonClick("ninetales"); };
  document.getElementById("pikachu").onclick = function() { onPokemonClick("pikachu"); };
  document.getElementById("sableye").onclick = function() { onPokemonClick("sableye"); };
  document.getElementById("scizor").onclick = function() { onPokemonClick("scizor"); };
  document.getElementById("scyther").onclick = function() { onPokemonClick("scyther"); };
  document.getElementById("slowbro").onclick = function() { onPokemonClick("slowbro"); };
  document.getElementById("snorlax").onclick = function() { onPokemonClick("snorlax"); };
  document.getElementById("sylveon").onclick = function() { onPokemonClick("sylveon"); };
  document.getElementById("talonflame").onclick = function() { onPokemonClick("talonflame"); };
  document.getElementById("trevenant").onclick = function() { onPokemonClick("trevenant"); };
  document.getElementById("tsareena").onclick = function() { onPokemonClick("tsareena"); };
  document.getElementById("tyranitar").onclick = function() { onPokemonClick("tyranitar"); };
  document.getElementById("umbreon").onclick = function() { onPokemonClick("umbreon"); };
  document.getElementById("urshifu").onclick = function() { onPokemonClick("urshifu"); };
  document.getElementById("venusaur").onclick = function() { onPokemonClick("venusaur"); };
  document.getElementById("wigglytuff").onclick = function() { onPokemonClick("wigglytuff"); };
  document.getElementById("zacian").onclick = function() { onPokemonClick("zacian"); };
  document.getElementById("zeraora").onclick = function() { onPokemonClick("zeraora");  };
  document.getElementById("zoroark").onclick = function() { onPokemonClick("zoroark"); };
});