
app.controller('RequestPokemonController', ['$scope', 'pokeApi', '$http', function($scope, pokeApi, $http){
	
	var self = this;
	self.pokeApi=pokeApi;
	self.pokemonName;
	self.getPokemon = function(pokemonName){
		var promise = pokeApi.requestPokemon(pokemonName).then(function(response){
			self.pokemonObj = response;
		}, function(response){
			self.pokemonObj = null;
		});
	};
}]);
