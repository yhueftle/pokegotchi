
app.controller('RequestPokemonController', ['$scope', 'pokeApi', '$http', function($scope, pokeApi, $http){
	
	var self = this;
	self.pokeApi=pokeApi;
	self.pokemonName;
	self.getPokemon = function(){
		self.pokemonObj = null;
		self.image = null;
		var promise = pokeApi.requestPokemon(self.pokemonName).then(function(response){
			self.pokemonObj = response;
			self.image = self.pokemonObj.sprites.front_default;
		}, function(response){
			self.pokemonObj = null;
			self.notfound = 'pokemon not found';
		});
	};
	self.enter = function(keyEvent){
		if(keyEvent.which === 13){
			self.getPokemon(self.pokemonName);
		};
	};
}]);
